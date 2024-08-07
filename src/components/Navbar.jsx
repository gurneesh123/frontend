import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="http://localhost:5173"><i className="fa-solid fa-home nav-icon"></i> Home</a></li>
        <li><a href="http://localhost:5173/items"><i className="fa-solid fa-shop nav-icon"></i> Shop</a></li>
        <li><a href="#"><i className="fa-solid fa-concierge-bell nav-icon"></i> Services</a></li>
        <li><a href="http://localhost:5173/aboutus"><i className="fa-solid fa-info-circle nav-icon"></i> About</a></li>
        <li><a href="http://localhost:5173/contact"><i className="fa-solid fa-envelope nav-icon"></i> Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
