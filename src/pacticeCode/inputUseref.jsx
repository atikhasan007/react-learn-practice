
import { useRef } from "react";


const App = () => {
  let FastName , LastName = useRef();
  
  const change = () =>{
    let fName = FastName.value;
    let lName = LastName.value;

    alert(fName +" "+lName);
  }
  return (
    <div>


    <input ref={(a)=>FastName=a} placeholder="First Name"/><br/>
    <input ref={(b)=>LastName=b} placeholder="Last Name"/><br/>

    <button onClick={change}>ClickMe</button>




      
    </div>
  );
};

export default App;