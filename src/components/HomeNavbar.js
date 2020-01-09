import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homeNavbar.css';

const HomeNavbar = () => {
    return(
        <div className='homeNavContainer'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/videography'>Videography</Link>
            <Link to='/photography'>Photography</Link>
            <Link to='/services'>Services</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default HomeNavbar