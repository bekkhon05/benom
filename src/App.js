
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./companent/navbar";
import Home from "./page/home";
import About from "./page/about";
import "./App.css"
import Project from "./page/project";
import Contact from "./page/contact";

function App() {
  return (
    <div >
      <Home />
      {/* <About />      */}
       {/* <Project/>
      <Contact/> */}
    </div>
  )
}

export default App;
