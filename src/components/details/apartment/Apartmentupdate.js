import { useState } from "react";
import './Update.css'
function Apartmentupdate() {
  let [apartment_no, setapartment_no] = useState("");
  let [block_no , setblock_no] = useState("");
  function send(){
    let data = {
      'apartment_no' : apartment_no,
      'block_no' : block_no
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

        <table className="updatetable">
          
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
            <button type="submit" className="updatebutton" onClick={send}> submit </button>
          </body>
        </table>
      </div>
    </div>
  );
}

export default Apartmentupdate;