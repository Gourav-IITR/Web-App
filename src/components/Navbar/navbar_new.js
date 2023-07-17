import React, { Component } from "react";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import './navbar_styles.css'
import { IconContext } from "react-icons";
import {BiUserCircle} from "react-icons/bi"
import AuthOptions from "./AuthOptions";
import Logo from "../Footer/logo.jpg"
import { useState } from "react";


function Navbar(){

    const[subMenu,setSubmenu]=useState("hide");

     const toggleMenu=()=>{
        subMenu==="hide"?(setSubmenu("sub-menu-wrap")):setSubmenu("hide");
    }
        return(
            <nav className="NavbarItems">
                {/* <h1 className="Navbar_logo">PAPERBACK</h1> */}
                <Link to="/" className='link'>
                    <img src={Logo} className="Nav-logo"></img>
                </Link>               
                <ul className="Navbar_menu">
                <li className="nav__item">
                    <Link to="/register-novel" className='link'>
                        <button type='button' className='lend_book'>
                                Lend Book
                        </button>
                    </Link>
                    </li>
                    <li>
                        <IconContext.Provider value={{ color:"grey"}}>
                            <div style={{cursor:"pointer"}} onClick={toggleMenu} className="user-icon">
                                <BiUserCircle size={35}/>
                            </div>
                        </IconContext.Provider>  
                    </li>
                    <li>
                    <div className={subMenu} id="subMenu">
                            <div className="sub-menu">
                                <div className="user-info">
                                    {/* <img src={Logo}></img>
                                    <h2>Shreyansh</h2> */}
                                 </div>
                                 {/* <hr></hr> */}
                                 <div className="dropdown-content">
                                    <AuthOptions/>
                                 </div>                                 
                            </div>
                        </div>
                        
                    </li>
                </ul>
                
                
            </nav>
        );
}

export default Navbar;