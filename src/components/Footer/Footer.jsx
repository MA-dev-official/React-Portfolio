import React from 'react';
import  {NavLink } from 'react-router-dom';



function Footer() {
  return (
    <footer className="fixed bottom-0  w-full bg-black text-white p-4 mt-auto">
      <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center gap-2 blueBorder rounded-lg ">
        <div className="text-center sm:text-left">
        <div className="flex gap-1 w-full items-center justify-center"> <h2 className="text-lg font-bold glow-text">M </h2><h2 className="text-lg font-bold text-white">A</h2> 
        </div>
          <p className="text-sm text-gray-400">© 2025 All Rights Reserved</p>
        </div>

        <ul className="flex gap-4 text-sm items-center justify-center">
          <li className=" text-md">
         <NavLink to="" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>Home</NavLink> 
          </li>
          <li className=" text-md"><NavLink to="about" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>About</NavLink></li>
          <li className=" text-md"><NavLink to="services" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>Services</NavLink></li>
          <li className=" text-md"><NavLink to="contact" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>Contact us</NavLink></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;