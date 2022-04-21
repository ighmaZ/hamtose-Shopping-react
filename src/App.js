
import React,{ useState , useEffect} from "react";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Home from "./pages";
import About from "./pages/about";
import {Routes} from "react-router-dom";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import DropDown from "./components/DropDown";

function App() {

  const[isOpen, setIsOpen] = useState(false);  // for navbar toggle

  const toggle = ( ) => {
    setIsOpen(!isOpen)
  };


  return (
    <div>
      <Navbar toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle}/>
   <Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route exact path="/about" element={<About/>}/>
   <Route exact path="/menu" element={<Menu/>}/>
   <Route exact path="/contact" element={<Contact/>}/>
   </Routes>
      <Footer />
      </div>
     

  );
}

export default App;
