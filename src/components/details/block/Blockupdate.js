import { useState } from "react";
import './Blockupdate.css'
function Blockupdate() {
  let [block_no, setblock_no] = useState("");
  let [block_name , setblock_name] = useState("");
  function send(){
    let data = {
      'block_no' : block_no,
      'block_name' : block_name
    }
    try{
      fetch(`http://localhost:3000/blockupdate ` ,
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
      <h1 className="blockhead"><i>Block Modification</i></h1>
        <table className="updatetable">
        <div className="updatecontent"> 
          <body>
            <tr>
              <td className="updaterow">
                <label className="updatelabel">block_no</label>
              </td>
              <td className="updaterow">
                <input  className="updateinput" type="text" required
                onChange={(val) => {setblock_no(val.target.value)}} />
              </td>
            </tr>
            <tr>
              <td>
                <label className="updatelabel">block_name</label>
              </td>
              <td>
                <input className="updateinput" type="text" required
                onChange={(val) => {setblock_name(val.target.value)}}/>
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

export default Blockupdate;