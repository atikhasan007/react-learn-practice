import { useRef } from "react";


const App = () => {
 
let APIData = useRef(null);
let myPTag =useRef();

  const fetchData = async () =>{

const response = await fetch("https://dummyjson.com/products");
APIData.current = await response.json();
    

  }

  const showData = () =>{
    myPTag.current.innerText = JSON.stringify(APIData.current);

  }


  return (
    <div>

      <p ref ={myPTag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
      
    </div>
  );
};

export default App;

//React Hook
//useRef() Caching expensive computations
//01. when you need to re-use the result multiple times within a component ,  but you don't wnat to 
// re-compute the value every time the component renders.

//02. let's say you have a component that fetches data from an API . The API call might take a 
//few seconds to complete , so you don't want to re-fetch the data every time the component renders . 
//instead , you can use useRef() to cache the result of the api call
