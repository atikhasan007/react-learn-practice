//useState object

import { useState } from "react";




const App = () => {

  const [myObj , setMyObj] = useState({
    key1 : "value 1",
    key2 : "value 2",
    key3 : "value 3",
  });

const change = () =>{
  setMyObj(
    // object er moddhe single value change
    prevOBJ=>({
      ...prevOBJ,
      key1 : "New Value For Key 1",
      key2 : "New Value For Key 2"
    })


  );

}




  return (
    <div>
      <h1 >{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <button onClick={change}>Change</button>
     
    </div>
  );
};


export default App;
