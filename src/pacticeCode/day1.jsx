//function component 
//arrow function 

import { useRef } from "react";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";



const LoginStatusButton = (status) =>{
  if(status){
    return <button>Logout Btn</button>
  }
  else{
    return <button>Login Btn</button>
  }

}

const LoginStatusButton1 = (st) => {
 switch(st){
  case true:
    return <h1>humm... i am atik hasan</h1>
  case false:
    return <h1>opps... i am not atik hasan</h1>
  default:
    return <h1>NO....</h1>
 }

 
}


const loginStatusButton2 = (stt) => {

 return stt===true?
  <h1>he is a good boy !</h1>:
  <h1>he is not a good boy </h1>
}


const  App = () => {

  let myHeadLine=useRef();


  const change = ()=>{
    myHeadLine.current.innerText="Hello UseRef";

  }

  const change1 = ()=>{
    myHeadLine.innerHTML="<ul><li>A</li><li>B</li></ul>";

  }

  const PostFormData=(event)=>{
    event.preventDefault();
    //TODO
    alert('From Submitted');
    
  }

  function Demo(){
    alert('click');
  }

  const ButtonClick = () =>{
    alert("Say Hello !");
  }
  const status = true;
  const Loginstatus  = true;
  const isName = true;
  
  let marks = 80;
  let result = 33;
  const city = ['Dhaka','London','Delhi','Kolkata'];
  const item = {
    name:"atik hasan",
    age: 23,
    city:"dhaka"
  }
  // we say rendering  (return process)
  return (
    <div>
      <h1>{2+2}</h1>
      <Header/>
      <Hero title="Learn React" des="In details how to pass props"
       item={item}
       ChildButtonClick = {ButtonClick}
      />
      <ContactForm/>
      <Footer/>
      <h1>{new Date().getHours()}
          :{new Date().getMinutes()}
          :{new Date().getSeconds()}
      </h1>


      <h1 className="">I am Atik Hasan</h1>
      <h1 style={{
        color:"red",
        fontFamily:'sans-serif',
        fontWeight:'bold',
        fontSize:'50px'
      }}>I am Atik Hasan</h1>
      <button onClick={()=>{
        alert('msg');
      }}>Submit</button>
     

{/* 
      inline if else  start */}
      {
      marks >= 80?
      <h1>Brilliant Result</h1>
      :
      <h1> Average Result</h1>
      }
{/* 
      inline if else  end */}
      



{/* immediately-invoked function  start*/}
{/* create/mound hoyar sate sate execute hoy jay */}
{/* anonymous arrow function */}
   {(()=>{


      if(result >= 80 && result < 100){
        return <h1>A+</h1>
      }
      else if(result >= 70 && result < 80){
        return <h1>A</h1>
      }
      else if(result >= 60 && result < 70){
        return <h1>A-</h1>
      }
      else if(result >= 50 && result < 60){
        return <h1>B</h1>
      }
      else if(result >= 40 && result < 50){
        return <h1>C</h1>

      }
      else{
        return <h1>F</h1>
      }


    })()}
{/* immediately-invoked function  end*/}




   
{/* jsx loop system start */}
<ul>
  {
    city.map((item, i)=>{

      return <li key={i.toString}>{item}</li>

    })
  }
</ul>
{/* jsx loop system end */}





 {/* immediately-invoked function  start*/}
{(()=>{

  if(status==true){
    return <h1>Atik</h1>
  }
  else{
    return <h1>Arik</h1>
  }

})()}
 {/* immediately-invoked function  end*/}


{/* conditional rendering start if else condition*/}
<h1>Login status</h1>
{LoginStatusButton(false)}
{/* conditional rendering end  if else condition*/}

{/* Conditional rendering using Switch statement start*/}
{LoginStatusButton1(true)}
{/* Conditional rendering using Switch statement end*/}



{/* conditional Rendering using ternary operators start*/}
{loginStatusButton2(true)}
{/* conditional Rendering using ternary operators start*/}


{/* conditPassing Props To a component start hearional rendering using logical && start */}
   <h1>Login Status</h1>
   {
    Loginstatus && <h1>yes true</h1>
   }
{/* conditional rendering using logical && start */}







{/* conditional rendering using immediately invoked function start */}
{(()=>{

  if(isName){
    return <h1>it is name</h1>
  }
  else{
    return <h1>it is not name</h1>
  }

})()}
{/* conditional rendering using immediately invoked function start */}
  



{/* Passing Props To a component start hear */}

{/* ///Responding to events starts here code */}

{/* <button onClick={alert('Click me')}>Submit</button> direct execute */}
{/* <button onClick={()=>{
  alert('Click')
}}>Click Me</button> using arrow function  */}


{/* 
<button onClick={
function Demo(){
  alert('click');
}
}>Click me</button> regular function */}



<button onClick={Demo}>Click me</button> 



{/*from and submit  manage that whole page is not reload when submit click*/}

<form onSubmit={PostFormData}>
  <input placeholder="name"/>
  <button type="submit">Submit</button>
</form>
{/*from and submit  manage that whole page is not reload when submit click*/}


{/* useRef start here */}
<h1 ref={myHeadLine}></h1>
<button onClick={change}>Click Me</button>
{/* useRef end here */}
<h3 ref={(h3)=>myHeadLine=h3}></h3>
<button onClick={change1}>Click me</button>





{/* useRef Attribute start here */}
<img src="https://placehold.co/600x400"/>
{/* useRef Attribute end here */}



    </div>
  );
};


export default App;

//jsx conventions 
//1.You need to return a single parent element in jsx
//2.You can implement js directly in JSX
//3.All Tags self-close in JSX
//4.className and HTMLFor , not class and for in JSX
//5.Write all HTML Attributes in camelCase in JSX
//6.Write inline styles as objects in css



//passing props to a component
// the term 'props' is an abbreviation for 'properties'
//used for passing data from one component to another 
//props are being passed in a uni-directional flow means one way from parent to child
//props data is read-only, which means that data coming from 
  //should not be changed by child components



  ///Responding to events

  //event handlers are your own functions that will be triggered in response to 
  //interactions like clicking , hovering , focusing from inputs and so on
  //different ways write an event handler
  //how to pass event handling logic from a parent component 
  // how events propagates and how to stop them 



  ///React Hook
  //01. react hook is a feature in the react library
  //02.it was introduced in react version 16.8
  //03.hooks can be used to mange state, handle side effects, and access,
  //lifecycle methods in function components
  //04.there are several built in hooks provided by react , such as useState,
  //useEffect, useContext, and useRef.



  //react hook
  //useRef() Method

  //01. The useRef Hook allows you to persist values between renders
  //02. it can be used to store a mutable value that does not cause a re-render when updated
  //03. it can be used to access a DOM element directly

  //useRef use kore innerText and innerHTML ki vabe change kore 


