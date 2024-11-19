

import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

      ( async ()=>{
   let response =    await  fetch('https://dummyjson.com/products/1') // API call
   let json = await response.json()
   setData(json)



      })()

   
  }, []);

  return (
    <div>
      {data ? JSON.stringify(data) : "Loading..."} {/* Display data or a loading message */}
    </div>
  );
};

export default App;



//directly can't using async await function in useEffect 
//but iif == immediately invokedable function 