//react hook 
//useState() method
// in React , state refers to an object that holds data of your component
//when data changed component refresh automatically to reflect the changes

import { useState } from "react";




const  App = () => {
  //state  declar
  let [number, setNumber] = useState(0);
  return (
    <div>

      
      <h1>Number: {number}</h1>

      <button onClick={()=>{
        setNumber(number-1);
      }}>Sub</button>

      <button onClick={()=>{
        setNumber(0);
      }}>Reset</button>

      <button onClick={()=>{
        setNumber(number+1);
      }}>Add</button>

     
     
      
    </div>
  );
};

export default App;
