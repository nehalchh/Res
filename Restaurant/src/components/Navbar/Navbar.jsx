import { IoMenu } from "react-icons/io5";
import { BiFork } from "react-icons/bi";
import images from "../../constants/images";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav style={{padding: "1rem"}} className="w-full bg-[#0c0c0c] flex justify-between items-center px-4 py-3 md:px-8">
      {/* Logo */}
      <img
        style={{paddingLeft: "3rem"}}
        className="w-[180px] md:w-[220px] lg:w-[240px] h-auto"
        src={images.gericht}
        alt="logo"
      />

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-6 text-amber-50 font-sans text-[16px] md:text-[18px]">
        <li className="hover:text-gray-400"><a href="#home">Home</a></li>
        <li className="hover:text-gray-400"><a href="#about">About</a></li>
        <li className="hover:text-gray-400"><a href="#menu">Menu</a></li>
        <li className="hover:text-gray-400"><a href="#awards">Awards</a></li>
        <li className="hover:text-gray-400"><a href="#contact">Contact</a></li>
      </ul>

      {/* Desktop CTA Buttons */}
      <div style={{paddingRight: "3rem"}} className="hidden lg:flex items-center text-[16px] lg:text-[18px] text-amber-50 font-sans gap-5">
        <a className="border-b border-transparent hover:border-[#DCCA87] transition-all duration-200" href="#login">Log In / Register</a>
        <div className="bg-[#DCCA87] w-[1px] h-[25px]"></div>
        <a className="border-b border-transparent hover:border-[#DCCA87] transition-all duration-200" href="/">Book Table</a>
      </div>

      {/* Mobile Hamburger Menu Icon (only for mobile) */}
      <div className="lg:hidden">
        <IoMenu
          className="text-amber-50 text-3xl cursor-pointer"
          onClick={() => setToggle(true)}
        />
      </div>

      {/* Mobile Full-Screen Overlay (only show if toggled ON) */}
      {toggle && (
        <div className="fixed lg:hidden top-0 left-0 w-full h-screen bg-[#0c0c0c] z-50 flex flex-col justify-center items-center px-4">
          <BiFork
            className="text-3xl text-[#DCCA87] cursor-pointer absolute top-6 right-6"
            onClick={() => setToggle(false)}
          />
          <ul className="flex flex-col items-center gap-8 text-2xl font-serif text-[#DCCA87]">
            <li onClick={() => setToggle(false)}><a href="#home">Home</a></li>
            <li onClick={() => setToggle(false)}><a href="#about">About</a></li>
            <li onClick={() => setToggle(false)}><a href="#menu">Menu</a></li>
            <li onClick={() => setToggle(false)}><a href="#awards">Awards</a></li>
            <li onClick={() => setToggle(false)}><a href="#contact">Contact</a></li>
            <li onClick={() => setToggle(false)}><a href="#login">Log In / Register</a></li>
            <li onClick={() => setToggle(false)}><a href="/">Book Table</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
