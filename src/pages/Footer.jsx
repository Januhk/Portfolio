import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col  items-center justify-between gap-4">
      
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="font-semibold text-white">John Khu</span>. All rights reserved.
        </p>
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Januhk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/john-vincent-khu-b51712222/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
         
        </div>
     
      </div>
    </footer>
  );
};

export default Footer;
