
//dynamic json niye kaj kora 
//todo application

import { useState } from "react";




const  App = () => {

 const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const RemoveItem = (index) =>{
    
    list.splice(index,1);
    setList([...list])

  }


  return (
    <div>
       
       

      <input onChange={(event)=>{
        setItem(event.target.value);
      }} placeholder="Item.."/>

      
      <button onClick={()=>{
        list.push(item);
        setList([...list])

      }}>Add</button><br/>

<table>
  <tbody>
    {list.length !== 0 ? (
      list.map((element, index) => (
        <tr key={index}>

          <td>{element}</td>
          <td><button onClick={()=>{
              RemoveItem(index);
          }}>Remove</button></td>


        </tr>

      ))
    ) : (
      <tr>
        <td>No data available</td>
      </tr>
    )}
  </tbody>
</table>

      
    </div>
  );
};

export default App;
