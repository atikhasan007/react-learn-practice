import { useReducer } from "react";


const  App = () => {
 
  let myImg = useReducer();
  const change = () =>{
    myImg.current.src = "https://placehold.co/600x400?text=Hello+World";
    myImg.current.setAttribute('height','200px');
    myImg.current.setAttribute('width','300px');
  }

  return (
    <div>

      <img ref = {myImg} src="https://placehold.co/600x400"/>
      <button onClick={change}>Click Me</button>





    </div>
  );
};

export default App;
