 import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import userContext from '../../context/userContext';
import registration from "../images/registration icon.png"
import { CiLogin,CiLogout } from "react-icons/ci";
import { FiUserPlus,FiUser} from "react-icons/fi";

const AuthOptions = () => {

    const {userData, setUserData} = useContext(userContext);
    const history = useHistory();
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
        history.push("/user/login");
        notify();
    };


    const notify = () => {
            toast.info('Successfully Logged out!', {position: toast.POSITION.TOP_CENTER});
    }
    
    return (
        <div className="navbar-flex">
        {userData.user ? (
            <div className='nav-links'>
            <Link to="/register-novel" className='link'>
                    <div className="navbar-flex-option">
                         <img src={registration} style={{width:"30px", marginRight:"5px"}}></img>
                        <p>Register your Book</p>
                        <span>></span>
                    </div>
                </Link>
                <Link to="/user/profile" className='link'>
                    <div className="navbar-flex-option">
                    <FiUser size={30} style={{marginRight:"5px"}}/>
                        <p>My Profile</p>
                        <span>></span>
                    </div>
                </Link>
                <Link to="" className='link'>
                    <div onClick={logout} className="navbar-flex-option">
                    <CiLogout size={25} style={{marginRight:"5px"}}/>
                        <p>Logout</p>
                        <span>></span>
                    </div>
                </Link>
                </div>
        ) : (
            <div>
                     <Link to="/user/register" className='link' >
                        <div className="navbar-flex-option" >
                            <FiUserPlus size={30} style={{marginRight:"5px"}}/>
                               <p> Sign Up</p>
                                <span>></span>
                        </div>
                    </Link>
                    <Link to="/user/login" className='link'>
                         <div className="navbar-flex-option">
                            <CiLogin size={30} style={{marginRight:"5px"}}/>
                               <p>Login</p>
                                <span>></span>
                        </div>  
                     </Link>
                     <Link to="/register-novel" className='link'>
                    <div className="navbar-flex-option">
                         <img src={registration} style={{width:"30px", marginRight:"5px"}}></img>
                        <p>Register your Book</p>
                        <span>></span>
                    </div>
                </Link>
                <Link to="/user/profile" className='link'>
                    <div className="navbar-flex-option">
                    <FiUser size={30} style={{marginRight:"5px"}}/>
                        <p>My Profile</p>
                        <span>></span>
                    </div>
                </Link>
                <Link to="" className='link'>
                    <div onClick={logout} className="navbar-flex-option">
                    <CiLogout size={25} style={{marginRight:"5px"}}/>
                        <p>Logout</p>
                        <span>></span>
                    </div>
                </Link>
                     <Link to="/book/get/:id" className='link'>
                         <div className="navbar-flex-option">
                            <CiLogin size={30} style={{marginRight:"5px"}}/>
                               <p>Bookpage</p>
                                <span>></span>
                        </div>  
                     </Link>
                     <Link to="/conformation" className='link'>
                         <div className="navbar-flex-option">
                            <CiLogin size={30} style={{marginRight:"5px"}}/>
                               <p>Bookpage</p>
                                <span>></span>
                        </div>  
                     </Link>

            </div>
        )}

        </div>
    )
}

export default AuthOptions
