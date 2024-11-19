// useState()  managing from 

import { useState } from "react";



const  App = () => {


let  [fromObj, setFormObj]=useState({
      fName:"",
      lName:"",
      city:"",
      gender:""
});


const onInputChange = (property , value) => {
  setFormObj(prevObj=>({
      ...prevObj,
      [property] : value
    
  }))

}

const formSubmit = (e) =>{

  e.preventDefault();
  console.log(fromObj);



}


  return (
    <div>

      <from>
         <input onChange={(e)=>{onInputChange("fName",e.target.value)}} value = {fromObj.fName} placeholder="Fast name"/><br/>
         <input onChange={(e)=>{onInputChange("lName",e.target.value)}} value={fromObj.lName} placeholder="Last name"/><br/>

         <select onChange={(e)=>{onInputChange("city",e.target.value)}} value={fromObj.city}>
                <option value="">Choose City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rangpur">Rangpur</option>
         </select>
         <br/>

         <input onChange={()=>{onInputChange("gender","Male")}} checked={fromObj.gender==="Male"} type="radio" name="gender"/>Male
         <input onChange={()=>{onInputChange("gender","Female")}} checked={fromObj.gender==="Female"} type="radio" name="gender"/>Female
         <br/>

         <button onClick={formSubmit} type="submit">Submit</button>
          
      </from>

      
    </div>
  );
};

export default App;
