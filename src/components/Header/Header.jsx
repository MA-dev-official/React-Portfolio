import { useState } from 'react';
import  { NavLink} from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full  h-16 flex items-center p-2 blue-border ">
        <div className="flex gap-1 items-center size-fit text-md">
          <b className="text-white">M</b>
          <b className="font-bold glow-text bg-transparent">A</b>
        </div>

        {/* Hamburger Button - Show on small screens */}
        <button 
          onClick={() => setOpen(true)} 
          className="ml-auto mr-5 sm:hidden glow-text text-xl"
        >
          &#9776;
        </button>

        {/* Main Menu - Hidden on small screens */}
        <ul className="hidden sm:flex gap-4 items-center ml-auto mr-5">
          <li className=" text-md">
         <NavLink to="" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>Home</NavLink> 
          </li>
          <li className=" text-md"><NavLink to="about" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>About</NavLink></li>
          <li className=" text-md"><NavLink to="services" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>Services</NavLink></li>
          <li className=" text-md"><NavLink to="contact" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>Contact us</NavLink></li>
        </ul>
      </nav>

      {/* Sidebar - Only visible when 'open' is true */}
      {open && (
        <div className="fixed top-0 left-0 w-2/3 h-full bg-black/70 backdrop-blur-[1px] z-50 p-6 flex flex-col gap-4 text-white transition-all   ">
          <button 
            onClick={() => setOpen(false)} 
            className="self-end text-2xl"
          >
            &times;
          </button>
          <ul className="flex flex-col gap-4 mt-4">
            <li className=" text-md"><NavLink to="" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>Home</NavLink></li>
            <li className=" text-md"><NavLink to="about" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>About</NavLink></li>
            <li className=" text-md"><NavLink to="services" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>Services</NavLink></li>
            <li className=" text-md"><NavLink to="contact" className ={({isActive}) => `${isActive ? "glow-text" : "text-white" }` }>Contact us</NavLink></li>
          </ul>
        </div>
      )}
    </>
  );
}