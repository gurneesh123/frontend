// Header.js
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const toggleSearch = () => {
    setSearchOpen(prevState => !prevState);
  };

  const handleSignInClick = () => {
    navigate('/api/auth/login'); // Navigate to the /login route
  };

  return (
    <header className="header">
      <div className="logo">Chateaux Vins</div>
      <div className="header-content">
        <div className="search-container">
          <input
            type="text"
            id="searchInput"
            className={`search-input ${searchOpen ? 'open' : ''}`}
            placeholder="Search."
          />
          <button
            id="searchButton"
            className="search-button"
            onClick={toggleSearch}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        <button className="cta-button" onClick={handleSignInClick}>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
