//react Router Dom
//npm i react-router-dom
//web application react-router-dom
//mobile application react-router-native

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductPage from "./pages/productPage.jsx";
import ProfilePage from "./pages/profilePage.jsx";

const App = ()=> {
  return (
    <div>
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFoundPage />} />

                

                
                
            </Routes>

        </BrowserRouter>
      
    </div>
  );
};

export default App;





//identity 
//01. <BrowserRouter></BrowserRouter> stores the current location
// in the browser's address 
//using the browser's built-in history stack.
//parent 

//02..routes renders a route exclusively
//03..route a specific UI component when the URL matches the specified path
//04..<link> the user navigate to another page by clicking 
