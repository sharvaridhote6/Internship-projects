import React from "react";
function Navbar(){
   return(
    <nav className="bg-gray-800 text-white">
        <div className="flex justify-center space-x-6">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
   )
}
export default Navbar;