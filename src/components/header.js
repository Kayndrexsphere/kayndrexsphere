import React, {useState} from "react";
import kayndrexlogo from "../assest/images/kayndrex logo.jpg";
import '../assest/css/header.css';
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa"

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

    return (
        // <div className="kayndrex_header">
        //     <div className="kayndrex_logo">
        //         <img src={kayndrexlogo} alt="Kayndrexlogo"/>
        //     </div>
        //     <button className="menu_icon" onClick={handleShowNavbar}>
        //   <FaBars/>
        // </button>
        //     <div className={`kayndrex_item ${showNavbar && 'active'}`}>
        //         <Link to="home"><p>Privacy Policy</p></Link>
        //         <Link to="termsandconditions"><p>Terms and Conditions</p></Link>
        //         <Link to="language"><p>Language</p></Link>
        //     </div>
        // </div>
        <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src={kayndrexlogo} alt="Kayndrexlogo"/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars className="side_bar" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              {/* <NavLink to="home">Home</NavLink> */}
            </li>
            <li>
              <NavLink to="home">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="termsandconditions">Terms and Conditions</NavLink>
            </li>
            <li>
              <NavLink to="language">Language</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
};

export default Header;