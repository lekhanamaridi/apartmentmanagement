import { useState } from "react";
import './Blockinsert.css'
function Blockinsert() {
  let [block_no, setblock_no] = useState("");
  let [block_name , setblock_name] = useState("");
  function send(){
    let data = {
      'block_no' : block_no,
      'block_name' : block_name
    }
    try{
      fetch(`http://localhost:3000/blockinsert ` ,
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
        <h1 className="blockhead"><i>Block Insertion</i></h1>
        <table className="inserttable">
         <div className="insertcontent"> 
          <body>
            <tr>
              <td className="insertrow">
                <label className="insertlabel">block_no</label>
              </td>
              <td className="insertrow">
                <input  className="insertinput" type="text" required
                onChange={(val) => {setblock_no(val.target.value)}} />
              </td>
            </tr>
            <tr>
              <td>
                <label className="insertlabel">block_name</label>
              </td>
              <td>
                <input className="insertinput" type="text" required
                onChange={(val) => {setblock_name(val.target.value)}}/>
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

export default Blockinsert;