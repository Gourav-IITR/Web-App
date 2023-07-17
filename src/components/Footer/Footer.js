import React from 'react'
import './Footer.css';
import MainPage from "../MainPage/MainPage"
import {Link, Route} from 'react-router-dom'
import Logo from "./logo.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='footer_main'>
        <div>
        <ul>
            <li>
                <Link to="/" className='logo_footer'>
                    {/* <img src={Logo} alt="Books on wheel" style={{height:"3.5rem", borderRadius:"0.5em"}}></img> */}
                    <h1 className="Navbar_logo">PAPERBACK</h1>
                </Link>  
            </li>
            <li>
                Rajiv Bhawan, IIT Roorkee
            </li>
        </ul> 
        <Route path='/' element={<MainPage/>}></Route>
        </div>       
        <div>
            Connect with us on:
            <br></br>
            <ul>
                <li>
                <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                &nbsp;
                <a href='https://wa.me/918895526631?text=Im%20interested%20in%20books' className='phone'>8895526631</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
                &nbsp;
                @get_paperback
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Footer
