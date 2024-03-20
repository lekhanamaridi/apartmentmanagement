import { useState } from "react";
import './Apartmentdelete.css'
function Apartmentdelete() {
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

      <div className="deletecontains">
      <h1 className="apartmenthead"><i>Apartment Deletion</i></h1>
        <table className="deletetable">
        <div className="deletecontent"> 
          <body>
            <tr>
              <td className="deleterow">
                <label className="deletelabel">apartment_no</label>

              </td>
              <td className="deleterow">
                <input  className="deleteinput" type="text" required
                onChange={(val) => {setapartment_no(val.target.value)}} />
              </td>
            </tr>
            <button type="submit" className="deletebutton" onClick={del}> submit </button>
          </body>
          </div>
        </table>
      </div>
    </div>
  );
}

export default Apartmentdelete;