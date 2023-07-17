import React, { useState } from 'react'
import Modal from 'react-modal';
import url from '../../misc/url';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import './GetBookModal.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Recaptcha from 'react-recaptcha';
import Confirmation from './Conformation';


const GetBookModal = ({ userId, bookId, modalIsOpen, setModalIsOpen }) => {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [enrollment, setEnrollment] = useState('');
    // const [contact, setContact] = useState('');
    const [error, setError] = useState('');
    const [otp,setOtp]=useState('');
    const[isVerified,setisVerified]=useState("false");

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
        e.preventDefault();
        try {
            const contactDetails = {bookId, userId,otp };
            const bookReqResponse = await axios.post(`${url.serverURL}/book/get`, contactDetails);
            // console.log('bookReqResponse', bookReqResponse);
            notify();
            setModalIsOpen(false);
            <Confirmation/>
        } catch (err) {
            console.log(err);
            if (err.response){
                setError(err.response.data.msg);
            }
        }
    };

    const notify = () => {
        toast.success('Otp verified Successfully!', {position: toast.POSITION.TOP_CENTER});
}
    return (
        <div>
            <Modal className="getBook-modal" isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'rgba(255,255,255,0.9)'
                        }
                    }
                }
            >
                <div className="modal-close-btn" onClick={() => setModalIsOpen(false)}><AiOutlineCloseSquare /></div>
                <div className="getBook-modal-flex">
                    <div className="getBook-modal-heading">OTP is sent to your  Number/Email</div>
                    <div className="form-error">{error}</div>
                    <div className="wrapper">
                        <form onSubmit={submit}>
                            <div className="group">
                                <input type="number" required="required" onChange={e => setOtp(e.target.value)} value={otp}/><span className="highlight"></span><span className="bar"></span>
                                <label>OTP</label>
                            </div>
                            <div className="btn-box">
                                <button className="btn btn-submit" type="submit">submit</button>
                            </div>
                            <Recaptcha
                                sitekey="xxxxxxxxxxxxxxxxxx"
                                render="explicit"
                                verifyCallback={verifyCallback}
                                onloadCallback={callback}
                            />
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default GetBookModal
