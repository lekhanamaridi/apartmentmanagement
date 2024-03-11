import { useState } from "react";
import './Apartmentinsert.css'
function Apartmentinsert() {
  let [apartment_no, setapartment_no] = useState("");
  let [block_no , setblock_no] = useState("");
  function send(){
    let data = {
      'apartment_no' : apartment_no,
      'block_no' : block_no
    }
    try{
      fetch(`http://localhost:3000/Apartmentinsert` ,
      { method : "POST" , 
      headers:{'Content-Type': 'application/json'} ,  
      body:JSON.stringify(data)})
      .then((res) => res.json())
      .then((data) => {
        if (data.message){
          console.log(data.message);
          alert(data.message);
        }
        if(data.sqlMessage){
          console.log(data.sqlMessage); 
          alert(data.sqlMessage);
        }
        console.log(data.results); 
      })
      .catch((error) => console.log(error));
    }
    catch (error) {
      console.log("error :", error)
    }
  }
  return (
    <div>
      <div className="input-container">
        <table className="input-table">
          <tbody>
            <tr>
              <td className="row">
                <label className="insert-label">apartment_no</label>
              </td>
              <td className="input-row">
                <input  className="insert-input" type="text" required
                onChange={(val) => {setapartment_no(val.target.value)}} />
              </td>
            </tr>

            <tr>
              <td>
                <label className="insert-label">block_no</label>
              </td>
              <td>
                <input className="insert-input" type="text" required
                onChange={(val) => {setblock_no(val.target.value)}}/>
              </td>
            </tr>

            <button type="submit" className="insert-button" onClick={send}> submit </button>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Apartmentinsert;