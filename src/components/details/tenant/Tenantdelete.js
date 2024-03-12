import { useState } from "react";
import './Tenantdelete.css'
function Tenantdelete() {
  let [tenant_id, settenant_id] = useState("");
  function del(){
    let data = {
      'tenant_id' : tenant_id,
    }
    try{
      fetch(`http://localhost:3000/tenantdelete ` ,
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

        <table className="deletetable">
          
          <body>
            <tr>
              <td className="deleterow">
                <label className="deletelabel">tenant_id</label>

              </td>
              <td className="deleterow">
                <input  className="deleteinput" type="text" required
                onChange={(val) => {settenant_id(val.target.value)}} />
              </td>
            </tr>
            <button type="submit" className="deltebutton" onClick={del}> submit </button>
          </body>
        </table>
      </div>
    </div>
  );
}

export default Tenantdelete;