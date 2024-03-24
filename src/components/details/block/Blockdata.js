import { useEffect, useState } from "react";
import './Blockdata.css';
import { Link } from "react-router-dom";
function BlockdataDetails() {
  let [blockdata, setblockdata] = useState([]);
  let [block, setblockdetails] = useState("");
  let [result, setresult] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/blockdata", 
      { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
        console.log("Fetched data:", data);
        setblockdata(data);
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
      'block_no': block
    };

    try {
      fetch("http://localhost:3000/blocksearch", {
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
  }, [block]);

  let details = block ? result : blockdata;

  return (
    <div>
      <div className="detailhead">
        <h1><i>Block Details</i></h1>
      </div>
      <div className="contains">
        <input
          type="text"
          placeholder="Enter block_no"
          className="searchbar"
          onChange={(val) => setblockdetails(val.target.value)}
        />
          <Link to="/block1">
            <button className="view1" type='button'><b>insert</b></button>
          </Link>
          <Link to="/block2">
            <button className="view2" type='button'><b>delete</b></button>
          </Link>
          <Link to="/block3">
            <button className="view3" type='button'><b>update</b></button>
          </Link>
        </div>
        <div>
          <div>
          <table className="table">
            <tr>
              <th className="tableheader"> block_no</th>
              <th className="tableheader"> block_name</th>
            </tr>
            {details.map((elem) => (
              <tr className="tablerow">
                <td className="tabledata">{elem.block_no}</td>
                <td className="tabledata">{elem.block_name}</td>
              </tr>
            ))}
          </table>
          </div>
        </div>
      </div>
  );
}

export default BlockdataDetails;