import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/generalNavbar.css'

const GeneralNavbar = () => {
    return(
        <div className='generalNavContainer'>
            <div className='generalHomeLink'>
                <Link to='/'>Kevin Nguyen</Link>
            </div>
            <div className='generalOtherLinks'>
                <Link to='/about'>About</Link>
                <Link to='/videography'>Videography</Link>
                <Link to='/photography'>Photography</Link>
                <Link to='/services'>Services</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default GeneralNavbar