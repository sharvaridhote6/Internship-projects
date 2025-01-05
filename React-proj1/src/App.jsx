import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css"; 

function App(){
  return(
    <div className="font-sans">
      <Header/>
      <Navbar/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;