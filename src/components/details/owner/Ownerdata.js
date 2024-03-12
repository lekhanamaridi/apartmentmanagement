import { useEffect, useState } from "react";
import './Ownerdata.css';
import { Link } from "react-router-dom";
function OwnerdataDetails() {
  let [ownerdata, setownerdata] = useState([]);
  let [owner, setownerdetails] = useState("");
  let [result, setresult] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/ownerdata", 
      { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
        console.log("Fetched data:", data);
        setownerdata(data);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  // Search Function
  useEffect(() => {
    let data = {
      'owner': owner
    };

    try {
      fetch("http://localhost:3000/ownersearch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setresult(ownerdata);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, [owner]);

  let details = owner ? result : ownerdata;

  return (
    <div>
      <div className="detailhead">
        <h1><i>Owner Details</i></h1>
      </div>
      <div className="contains">
        <input
          type="text"
          placeholder="Enter Owner_id"
          className="searchbar"
          onChange={(val) => setownerdetails(val.target.value)}
        />
          <Link to="/owner1">
            <button className="view1" type='button'><b>insert</b></button>
          </Link>
          <Link to="/owner2">
            <button className="view2" type='button'><b>delete</b></button>
          </Link>
          <Link to="/owner3">
            <button className="view3" type='button'><b>update</b></button>
          </Link>
        </div>
        <div>
          <div>
          <table className="table">
            <tr>
              <th className="tableheader"> owner_id</th>
              <th className="tableheader"> name</th>
              <th className="tableheader"> apartment_no</th>
              <th className="tableheader"> email</th>
              <th className="tableheader"> phone</th>
            </tr>
            {details.map((elem) => (
              <tr className="tablerow">
                <td className="tabledata">{elem.owner_id}</td>
                <td className="tabledata">{elem.name}</td>
                <td className="tabledata">{elem.apartment_no}</td>
                <td className="tabledata">{elem.email}</td>
                <td className="tabledata">{elem.phone}</td>
              </tr>
            ))}
          </table>
          </div>
        </div>
      </div>
  );
}

export default OwnerdataDetails;