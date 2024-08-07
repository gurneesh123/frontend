import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import Header from './Header';

const AboutUs = () => {
  return (
    <div className="about-us">
        <Header/>
        <Navbar/>
      <header className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Chateaux Vins</strong>, your premier destination for fine wines online.
          </p>
        </div>
      </header>

      <main>
        <section className="our-story">
          <div className="container">
            <h2>Our Story</h2>
            <p>
              Founded in the heart of France, Chateaux Vins is a family-owned business with a passion for wine that spans generations. 
              We have cultivated relationships with the finest vineyards across France, bringing you an exceptional selection of wines from renowned regions like Bordeaux, Burgundy, and Champagne.
            </p>
          </div>
        </section>

        <section className="our-mission">
          <div className="container">
            <h2>Our Mission</h2>
            <p>
              At Chateaux Vins, our mission is to share our love of French wine with the world. 
              We strive to provide our customers with an unparalleled wine shopping experience, offering expert recommendations and an exclusive selection of high-quality wines.
            </p>
          </div>
        </section>

        <section className="our-values">
          <div className="container">
            <h2>Our Values</h2>
            <ul>
              <li><strong>Quality:</strong> We believe in offering only the best wines that France has to offer.</li>
              <li><strong>Passion:</strong> Our love for wine drives us to constantly seek out new and exciting selections.</li>
              <li><strong>Customer Service:</strong> We are committed to providing exceptional service to our customers.</li>
              <li><strong>Authenticity:</strong> We work directly with vineyards to ensure the authenticity of our wines.</li>
            </ul>
          </div>
        </section>

        <section className="our-offerings">
          <div className="container">
            <h2>Our Offerings</h2>
            <p>
              Whether you are a wine connoisseur or a casual enthusiast, we have something for everyone. 
              Explore our extensive collection of red, white, and sparkling wines, as well as rare and vintage selections.
            </p>
          </div>
        </section>

        <section className="contact-us">
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              We would love to hear from you! Whether you have questions about our wines or need assistance with an order, our team is here to help. 
              Feel free to reach out to us at <a href="mailto:info@chateauxvins.com">info@chateauxvins.com</a> or call us at +33 1 23 45 67 89.
            </p>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="container">
          <p>&copy; 2024 Chateaux Vins. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
