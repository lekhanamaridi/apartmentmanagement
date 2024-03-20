import { useEffect, useState } from "react";
import './Apartmentdata.css';
import { Link } from "react-router-dom";
function ApartmentdataDetails() {
  let [apartmentdata, setapartmentdata] = useState([]);
  let [apartment, setapartmentdetails] = useState("");
  let [result, setresult] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/apartmentdata", 
      { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
        console.log("Fetched data:", data);
        setapartmentdata(data);
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
      'apartment': apartment
    };

    try {
      fetch("http://localhost:3000/apartmentsearch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setresult(apartmentdata);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, [apartment]);

  let details = apartment ? result : apartmentdata;

  return (
    <div>
      <div className="detailhead">
        <h1><i>Apartment Details</i></h1>
      </div>
      <div className="contains">
        <input
          type="text"
          placeholder="Enter apartment_no"
          className="searchbar"
          onChange={(val) => setapartmentdetails(val.target.value)}
        />
          <Link to="/apartment1">
            <button className="view1" type='button'><b>insert</b></button>
          </Link>
          <Link to="/apartment2">
            <button className="view2" type='button'><b>delete</b></button>
          </Link>
          <Link to="/apartment3">
            <button className="view3" type='button'><b>update</b></button>
          </Link>
        </div>
        <div>
          <div>
          <table className="table">
            <tr>
              <th className="tableheader"> apartment_no</th>
              <th className="tableheader"> block_no</th>
              <th className="tableheader"> apartment_status</th>
              <th className="tableheader"> apartment_type</th>
              <th className="tableheader"> price</th>
            </tr>
            {details.map((elem) => (
              <tr className="tablerow">
                <td className="tabledata">{elem.apartment_no}</td>
                <td className="tabledata">{elem.block_no}</td>
                <td className="tabledata">{elem.apartment_status}</td>
                <td className="tabledata">{elem.apartment_type}</td>
                <td className="tabledata">{elem.price}</td>
              </tr>
            ))}
          </table>
          </div>
        </div>
      </div>
  );
}

export default ApartmentdataDetails;