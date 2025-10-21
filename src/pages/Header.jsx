import { useState } from "react";
import { motion } from "framer-motion";
const Header = () => {
  const name = "John Khu";
  const defaultname = "Jk";
  const [hovered, setHovered] = useState(false);
  const [Display,setDisplay] = useState(defaultname);
  

  const enterMouse = () => {
    let i = 0;
    setDisplay(name.splice(0,i+1))
  }
  return (
    <div className="sticky top-0 w-full bg-black border-b border-gray-800 shadow-lg z-50">
      <div className="relative flex justify-center items-center h-16 ">
        <motion.span
        whileHover={{
          x: [0, -5, 5, -5, 5, 0],
          rotate: [0, -3, 3, -3, 3, 0],
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      
          className="absolute left-20  text-white text-2xl font-poppins cursor-pointer " >Jk.Dev
        </motion.span>
        <ul className="font-poppins hidden gap-6 sm:gap-x-10  text-[#DADADA] lg:flex md:flex">
          <li>
            <a
              href="#about"
              className="px-1 py-1 rounded-lg hover:[text-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff]
             transition-all duration-300"
            >
              Home
            </a>
           
          </li>
          <li>
            <a
              href="#Experience"
                className="px-1 py-1 rounded-lg hover:[text-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff]
             transition-all duration-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="px-1 py-1 rounded-lg hover:[text-shadow:0_0_10px_#ffffff,0_0_20px_#ffffff]
             transition-all duration-300"
            >
              Projects
            </a>
          </li>
          <li>
           
            <a
              href="#Contacts"
                className="px-1 py-1 rounded-lg hover:[text-shadow:0_0_5px_#ffffff,0_0_10px_#ffffff]
             transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
