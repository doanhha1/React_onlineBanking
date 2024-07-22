import React from "react";

import Navbar from './Components/Navbar';
import Header from "./Components/Home";
import Feature from "./Components/Service";
import Blog from "./Components/Blog";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Feature/>
     <Blog/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
