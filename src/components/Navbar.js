import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/information'>Info</Link>
            <Link to='/videography'>Videography</Link>
            <Link to='/photography'>Photography</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Navbar