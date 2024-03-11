import { useEffect, useState } from "react";
import './Apartmentdata.css';
function ApartmentdataDetails() {
  let [apartmentdata, setapartmentdata] = useState([]);
  let [apartment, setapartmentdetails] = useState("");
  let [result, setresult] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/apartmentdetails", 
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
      fetch("http://localhost:3000/searchapartment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setresult(data);
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

        <table className="table">
          <tr>
            <th className="tableheader"> apartment_no</th>
            <th className="tableheader"> block_no</th>
          </tr>

          {details.map((elem) => (
            <tr className="tablerow">
              <td className="tabledata">{elem.apartment_no}</td>
              <td className="tabledata">{elem.block_no}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default ApartmentdataDetails;