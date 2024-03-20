import { useState } from "react";
import './Apartmentinsert.css'
function Apartmentinsert() {
  let [apartment_no, setapartment_no] = useState("");
  let [block_no , setblock_no] = useState("");
  let [apartment_status, setapartment_status] = useState("");
  let [apartment_type, setapartment_type] = useState("");
  let [price, setprice] = useState("");
  function send(){
    let data = {
      'apartment_no' : apartment_no,
      'block_no' : block_no,
      'apartment_status' : apartment_status,
      'apartment_type' : apartment_type,
      'price' : price
    }
    try{
      fetch(`http://localhost:3000/apartmentinsert ` ,
      { method : "POST" , headers:{'Content-Type': 'application/json'} ,  body:JSON.stringify(data)})
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

      <div className="insertcontains">
      <h1 className="apartmenthead"><i>Apartment Insertion</i></h1>
        <table className="inserttable">
        <div className="insertcontent"> 
          
          <body>
            <tr>
              <td className="insertrow">
                <label className="insertlabel">apartment_no</label>
              </td>
              <td className="insertrow">
                <input  className="insertinput" type="text" required
                onChange={(val) => {setapartment_no(val.target.value)}} />
              </td>
            </tr>
            <tr>
              <td>
                <label className="insertlabel">block_no</label>
              </td>
              <td>
                <input className="insertinput" type="text" required
                onChange={(val) => {setblock_no(val.target.value)}}/>
              </td>
            </tr>
            <tr>
              <td>
                <label className="insertlabel">apartment_status</label>
              </td>
              <td>
                <input className="insertinput" type="text" required
                onChange={(val) => {setapartment_status(val.target.value)}}/>
              </td>
            </tr>
            <tr>
              <td>
                <label className="insertlabel">apartment_type</label>
              </td>
              <td>
                <input className="insertinput" type="text" required
                onChange={(val) => {setapartment_type(val.target.value)}}/>
              </td>
            </tr>
            <tr>
              <td>
                <label className="insertlabel">price</label>
              </td>
              <td>
                <input className="insertinput" type="text" required
                onChange={(val) => {setprice(val.target.value)}}/>
              </td>
            </tr>
            <button type="submit" className="insertbutton" onClick={send}> submit </button>
          </body>
          </div>
        </table>
      </div>
    </div>
  );
}

export default Apartmentinsert;