import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header">
        <nav>
          <div className="logo">Kingsukh Guest House</div>
          <ul className={menuOpen ? "nav_links open" : "nav_links"}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#rooms">Rooms</a>
            </li>
            <li>
              <a href="#gallary">Gallary</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="resp-button">BOOK NOW</button>
          <div className="resp-icon" onClick={toggleMenu}>
            {menuOpen ? <ImCross style={{ fontSize: "1.5rem" }} /> : <FaBars />}
          </div>
        </nav>
        <div className="header-text" id="home">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3, repeat: 0 }}
          >
            Simple - Unique - Friendly
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.3, repeat: 0 }}
          >
            Make Yourself At Home <br /> In Our<span> Guest House</span>.
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
