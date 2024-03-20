import { useState } from "react";
import './Apartmentupdate.css'
function Apartmentupdate() {
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
      'price': price
    }
    try{
      fetch(`http://localhost:3000/apartmentupdate ` ,
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
        alert('dataupdated')
      })
      .catch((error) => console.log(error));

    }
    catch (error) {
      console.log("error :", error)
    }

  }

  return (
    <div>

      <div className="updatecontains">
      <h1 className="apartmenthead"><i>Apartment Update</i></h1>
        <table className="updatetable">
        <div className="updatecontent"> 
          
          <body>
            <tr>
              <td className="updaterow">
                <label className="updatelabel">apartment_no</label>
              </td>
              <td className="updaterow">
                <input  className="updateinput" type="text" required
                onChange={(val) => {setapartment_no(val.target.value)}} />
              </td>
            </tr>
            <tr>
              <td>
                <label className="updatelabel">block_no</label>
              </td>
              <td>
                <input className="updateinput" type="text" required
                onChange={(val) => {setblock_no(val.target.value)}}/>
              </td>
            </tr>
            <tr>
              <td className="updaterow">
                <label className="updatelabel">apartment_status</label>
              </td>
              <td className="updaterow">
                <input  className="updateinput" type="text" required
                onChange={(val) => {setapartment_status(val.target.value)}} />
              </td>
            </tr>
            <tr>
              <td className="updaterow">
                <label className="updatelabel">apartment_type</label>
              </td>
              <td className="updaterow">
                <input  className="updateinput" type="text" required
                onChange={(val) => {setapartment_type(val.target.value)}} />
              </td>
            </tr>
            <tr>
              <td className="updaterow">
                <label className="updatelabel">price</label>
              </td>
              <td className="updaterow">
                <input  className="updateinput" type="text" required
                onChange={(val) => {setprice(val.target.value)}} />
              </td>
            </tr>
            <button type="submit" className="updatebutton" onClick={send}> submit </button>
          </body>
          </div>
        </table>
      </div>
    </div>
  );
}

export default Apartmentupdate;