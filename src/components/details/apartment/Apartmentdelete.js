import { useState } from "react";
import './Delete.css'
function Apartmentupdate() {
  let [apartment_no, setapartment_no] = useState("");
  function del(){
    let data = {
      'apartment_no' : apartment_no,
    }
    try{
      fetch(`http://localhost:3000/apartmentdelete ` ,
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
            <button type="submit" className="updatebutton" onClick={del}> submit </button>
          </body>
        </table>
      </div>
    </div>
  );
}

export default Apartmentupdate;