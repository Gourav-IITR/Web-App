import NewNav from '../Navbar/navbar_new'
import Footer from '../Footer/Footer';
import book_pic from "../BookPage/Book_cover.jpg"
import { defaultStyles } from 'react-modal';
import check from './check.png'
import './conformation.css'

function confirmation(){
    return(
        <>
            <NewNav/>
            <div className='confirm-wrapper'>
                <div className='image'>
                    <img src={check}></img>
                    Order Confirmed

                </div>
                <div className='book-content'>
                    <img src={book_pic}></img>
                </div>
            </div>          
            <Footer/>       
        </>
    );
}

export default confirmation;