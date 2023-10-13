import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='menu'>
            
            <nav>
            <a href="/home">Home</a>
            <a href="/about_us">About us</a>
            <a href="/contact_us">Contact Us</a>
            <a href="/book_now">Book Now</a>
            <a href="/teachers-list">Teachers List</a>
            </nav>
        </div>
    );
};

export default Nav;