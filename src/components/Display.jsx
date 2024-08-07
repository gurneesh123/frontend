import React from 'react';
import './Display.css';  // Assuming you have the CSS in a separate file

const Display = () => {
  return (
    <div className="display">
      <div className="display-content">
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products and offers</p>
        <a href="http://localhost:5173/items" className="cta-button">Shop Now</a>
      </div>
    </div>
  );
}

export default Display;
