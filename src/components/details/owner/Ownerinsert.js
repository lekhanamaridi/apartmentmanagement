import { useState } from "react";
import './Ownerinsert.css'
function Ownerinsert() {
  let [owner_id, setowner_id] = useState("");
  let [name , setname] = useState("");
  let [apartment_no , setapartment_no] = useState("");
  let [email , setemail] = useState("");
  let [phone , setphone] = useState("");
  function send(){
    let data = {
      'owner_id' : owner_id,
      'name' : name,
      'apartment_no' : apartment_no,
      'email' : email,
      'phone' : phone
    }
    try{
      fetch(`http://localhost:3000/ownerinsert ` ,
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

        <table className="inserttable">
          
          <body>
            <tr>
              <td className="insertrow">
                <label className="insertlabel">owner_id</label>
              </td>
              <td className="insertrow">
                <input  className="insertinput" type="text" required
                onChange={(val) => {setowner_id(val.target.value)}} />
              </td>
            </tr>
            <tr>
              <td>
                <label className="insertlabel">name</label>
              </td>
              <td>
                <input className="insertinput" type="text" required
                onChange={(val) => {setname(val.target.value)}}/>
              </td>
            </tr>
            <tr>
              <td>
                <label className="insertlabel">apartment_no</label>
              </td>
              <td>
                <input className="insertinput" type="text" required
                onChange={(val) => {setapartment_no(val.target.value)}}/>
              </td>
            </tr>
            <tr>
              <td>
                <label className="insertlabel">email</label>
              </td>
              <td>
                <input className="insertinput" type="text" required
                onChange={(val) => {setemail(val.target.value)}}/>
              </td>
            </tr>
            <tr>
              <td>
                <label className="insertlabel">phone</label>
              </td>
              <td>
                <input className="insertinput" type="text" required
                onChange={(val) => {setphone(val.target.value)}}/>
              </td>
            </tr>
            <button type="submit" className="insertbutton" onClick={send}> submit </button>
          </body>
        </table>
      </div>
    </div>
  );
}

export default Ownerinsert;