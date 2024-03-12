import { useState } from "react";
import './Blockdelete.css'
function Blockdelete() {
  let [block_no, setblock_no] = useState("");
  function del(){
    let data = {
      'block_no' : block_no,
    }
    try{
      fetch(`http://localhost:3000/blockdelete ` ,
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
                <label className="deletelabel">block_no</label>

              </td>
              <td className="deleterow">
                <input  className="deleteinput" type="text" required
                onChange={(val) => {setblock_no(val.target.value)}} />
              </td>
            </tr>
            <button type="submit" className="deltebutton" onClick={del}> submit </button>
          </body>
        </table>
      </div>
    </div>
  );
}

export default Blockdelete;