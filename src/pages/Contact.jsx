import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server or API)
    console.log("Form data submitted:", formData);

    // Redirect to the "Thank You" page
    navigate("/thankyou");
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="contact-us-section">
        <h2>Contact Us</h2>
        <div className="contact-us-container">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Our Contact Information</h3>
            <p>
              <strong>Address:</strong> 123 Vine Street, Bordeaux, France
            </p>
            <p>
              <strong>Phone:</strong> +33 1 23 45 67 89
            </p>
            <p>
              <strong>Email:</strong> info@chateauxvins.com
            </p>
            <p>
              <strong>Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
