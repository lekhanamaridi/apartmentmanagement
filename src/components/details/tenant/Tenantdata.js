import { useEffect, useState } from "react";
import './Tenantdata.css';
import { Link } from "react-router-dom";
function TenantdataDetails() {
  let [tenantdata, settenantdata] = useState([]);
  let [tenant, settenantdetails] = useState("");
  let [result, setresult] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/tenantdata", 
      { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
        console.log("Fetched data:", data);
        settenantdata(data);
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
      'tenant': tenant
    };

    try {
      fetch("http://localhost:3000/tenantsearch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setresult(tenantdata);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, [tenant]);

  let details = tenant ? result : tenantdata;

  return (
    <div>
      <div className="detailhead">
        <h1><i>Tenant Details</i></h1>
      </div>
      <div className="contains">
        <input
          type="text"
          placeholder="Enter Tenant_id"
          className="searchbar"
          onChange={(val) => settenantdetails(val.target.value)}
        />
          <Link to="/tenant1">
            <button className="view1" type='button'><b>insert</b></button>
          </Link>
          <Link to="/tenant2">
            <button className="view2" type='button'><b>delete</b></button>
          </Link>
          <Link to="/tenant3">
            <button className="view3" type='button'><b>update</b></button>
          </Link>
        </div>
        <div>
          <div>
          <table className="table">
            <tr>
              <th className="tableheader"> tenant_id</th>
              <th className="tableheader"> tenant_name</th>
              <th className="tableheader"> apartment_no</th>
              <th className="tableheader"> email</th>
              <th className="tableheader"> phone</th>
            </tr>
            {details.map((elem) => (
              <tr className="tablerow">
                <td className="tabledata">{elem.tenant_id}</td>
                <td className="tabledata">{elem.tenant_name}</td>
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

export default TenantdataDetails;