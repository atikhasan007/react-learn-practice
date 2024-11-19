import { useEffect } from "react";


const App = () => {


    useEffect(()=>{
        console.log('hello');
    },[0,1,3,4])


  return (
    <div>
      
    </div>
  );
};


export default App;



//useEffect two parameter 
//first callback function 
//second optional dependency array
// second optional dependency array faka raka mane akbar  execute hobe
