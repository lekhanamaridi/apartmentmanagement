import { useState } from "react";
import './Tenantinsert.css'
function Tenantinsert() {
  let [tenant_id, settenant_id] = useState("");
  let [name , setname] = useState("");
  let [apartment_no , setapartment_no] = useState("");
  let [email , setemail] = useState("");
  let [phone , setphone] = useState("");
  function send(){
    let data = {
      'tenant_id' : tenant_id,
      'name' : name,
      'apartment_no' : apartment_no,
      'email' : email,
      'phone' : phone
    }
    try{
      fetch(`http://localhost:3000/tenantinsert ` ,
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
      <h1 className="tenanthead"><i>Tenant Insertion</i></h1>
        <table className="inserttable">
        <div className="insertcontent"> 
          
          <body>
            <tr>
              <td className="insertrow">
                <label className="insertlabel">tenant_id</label>
              </td>
              <td className="insertrow">
                <input  className="insertinput" type="text" required
                onChange={(val) => {settenant_id(val.target.value)}} />
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
          </div>
        </table>
      </div>
    </div>
  );
}

export default Tenantinsert;