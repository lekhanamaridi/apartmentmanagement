import { useState } from "react";
import './Tenantupdate.css'
function Tenantupdate() {
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
      fetch(`http://localhost:3000/tenantupdate ` ,
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
      <h1 className="tenanthead"><i>Tenant Modification</i></h1>
        <table className="updatetable">
        <div className="updatecontent"> 
          
          <body>
            <tr>
              <td className="updaterow">
                <label className="updatelabel">tenant_id</label>
              </td>
              <td className="updaterow">
                <input  className="updateinput" type="text" required
                onChange={(val) => {settenant_id(val.target.value)}} />
              </td>
            </tr>
            <tr>
              <td>
                <label className="updatelabel">name</label>
              </td>
              <td>
                <input className="updateinput" type="text" required
                onChange={(val) => {setname(val.target.value)}}/>
              </td>
            </tr>
            <tr>
              <td>
                <label className="updatelabel">apartment_no</label>
              </td>
              <td>
                <input className="updateinput" type="text" required
                onChange={(val) => {setapartment_no(val.target.value)}}/>
              </td>
            </tr>
            <tr>
              <td>
                <label className="updatelabel">email</label>
              </td>
              <td>
                <input className="updateinput" type="text" required
                onChange={(val) => {setemail(val.target.value)}}/>
              </td>
            </tr>
            <tr>
              <td>
                <label className="updatelabel">phone</label>
              </td>
              <td>
                <input className="updateinput" type="text" required
                onChange={(val) => {setphone(val.target.value)}}/>
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

export default Tenantupdate;