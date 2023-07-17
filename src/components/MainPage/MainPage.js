import React from 'react'
import BookList from '../BookList/BookList'
import NewNav from '../Navbar/navbar_new'
import { Link } from 'react-router-dom'
import './MainPage.css'
import Footer from '../Footer/Footer'
import landingPhoto from './landingPhoto.png';
import a from './a.png'
import c from './c.png'
import f from './f.png'
import Hero from './Hero'

const MainPage = () => {
    return (
        <div>
            <div>
            <NewNav />
            </div>
            <div className='mainpage-content'>
                <Hero />
                <div className='whyChoose'>Why choose Paperback ?</div>
                <div className='features'>
                    <div className='feature1'><img className='photoLanding' src={f} alt='Landing Photo' /></div>
                    <div className='feature2'><img className='photoLanding' src={c} alt='Landing Photo' /></div>
                    <div className='feature3'><img className='photoLanding' src={a} alt='Landing Photo' /></div>
                </div>
                <div className='aboutUs'>About Us</div>
                <div className='aboutUs_content'>
                We are in a mission to make physical books a lot 
                more accessible by providing one-stop solution for 
                lending and borrowing books.
                </div>
            </div>
            {/* <BookList /> */}
            <Footer />
        </div>
        
    );
}

export default MainPage
