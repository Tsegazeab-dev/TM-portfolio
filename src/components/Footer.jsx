import React from "react";
import { FaLinkedin, FaGithub, FaDesktop } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className="w-full bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center h-16 justify-center">
          <p className="text-teal-400 font-mono"><FaDesktop className="inline-block mr-2"></FaDesktop>Tailored Web Solutions</p>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
