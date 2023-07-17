import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import userContext from '../../context/userContext';
import ErrorNotice from '../../misc/ErrorNotice';
import './Register.css'
import url from '../../misc/url'
import { toast } from 'react-toastify';
import NewNav from '../Navbar/navbar_new'
import Footer from '../Footer/Footer'
import Recaptcha from 'react-recaptcha';


const Register = () => {
    
    const[isVerified,setisVerified]=useState("false");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [name, setName] = useState('');
    const [dob, setdob] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [error, setError] = useState('');
    const[upi,setUpi]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');

    const { setUserData } = useContext(userContext);

    const history = useHistory();

    const handleVerfication=()=>{
        if(isVerified){
            console.log("Verfied");
        }
        else{
            alert('Please verify you are a human');
        }
    }

    const callback=()=>{
        if(isVerified){
            console.log("recaptcha is loaded");
        }
    }

    const verifyCallback=(response)=>{
        if(response){
            setisVerified(true);
        }
    }

    const submit = async (e) => {
        handleVerfication();
        e.preventDefault();
        try {
            const newUser = { username, email, enrollment, name, dob, password, passwordCheck };
            await axios.post(`${url.serverURL}/user/register`, newUser).then(res => {
                // console.log(res);
            });
            setUsername('');
            setEmail('');
            setEnrollment('');
            setName('');
            setPassword('');
            setPasswordCheck('');
            notifyUser();
            // const loginResponse = await axios.post(`${url.serverURL}user/login`, {
            //     email, password
            // });
            // // console.log('loginResponse', loginResponse);
            // setUserData({
            //     token: loginResponse.data.token,
            //     user: loginResponse.data.user
            // });
            // localStorage.setItem("auth-token", loginResponse.data.token);
            // history.push("/");
        } catch (error) {
            if (error.response){
                error.response.data.msg && setError(error.response.data.msg)
            }
        }
    };
    const notifyUser = () => {
        toast.info('Please check your mail', {position: toast.POSITION.TOP_CENTER});
    }

    return (
        <>
            <NewNav/>
            <div className="register-container" style={{marginTop:100}}>
                <div className="register-wrapper">
                    <div className="register-title">SignUp Form</div>
                    <div className="form-error">
                        {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                    </div>
                    <form onSubmit={submit}>
                        <div className="register-field">
                            <input type="text" id="username" onChange={e => setUsername(e.target.value)} value={username} required />
                            <label>Username</label>
                        </div>
                        <div className="register-field">
                            <input type="text" id="email" onChange={e => setEmail(e.target.value)} value={email} required />
                            <label>Email</label>
                        </div>
                        <div className="register-field">
                            <input type="text" id="name" onChange={e => setName(e.target.value)} value={name} required />
                            <label>Name</label>
                        </div>
                        <div className="register-field">
                            <input type="tel" id="phone-number" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} required />
                            <label>Phone Number</label>
                        </div>
                        <div className="register-field">
                            <input type="text" id="enrollment" onChange={e => setEnrollment(e.target.value)} value={enrollment} required />
                            <label>Enrollment No</label>
                        </div>
                        <div className="register-field">
                            <input type="date" id="dob" onChange={e => setdob(e.target.value)} value={dob} required />
                            <label id='dob-label'>Date of Birth</label>
                        </div>
                        <div className="register-field">
                            <input type="text" id="upi-id" onChange={e => setUpi(e.target.value)} value={upi} required />
                            <label>UPI Id</label>
                        </div>

                        {/* <div className="register-field">
                            <div className="box">
                                <select onClick={e => setYear(e.target.value)} onChange={e => setYear(e.target.value)}   className="year-container">
                                    <option className="year-option" selected={true} disabled="disabled">Year</option>
                                    <option value="1" className="year-option">1</option>
                                    <option value="2" className="year-option">2</option>
                                    <option value="3" className="year-option">3</option>
                                    <option value="4" className="year-option">4</option>
                                    <option value="5" className="year-option">5</option>
                                </select>
                            </div>
                        </div> */}
                        <div className="register-field">
                            <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} required />
                            <label>Password</label>
                        </div>
                        <div className="register-field">
                            <input type="password" id="checkPassword" onChange={e => setPasswordCheck(e.target.value)} value={passwordCheck} required />
                            <label>Check Password</label>
                        </div>
                        <div className="register-field">
                            <input type="submit" value="Sign Up" />
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <Recaptcha
                                sitekey="xxxxxxxxxxxxxxxxxx"
                                render="explicit"
                                verifyCallback={verifyCallback}
                                onloadCallback={callback}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Register
