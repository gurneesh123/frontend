// ThankYou.js
import React from "react";
import "./ThankYou.css"; // Create a CSS file for styling

const ThankYou = () => {
  return (
    <div className="thank-you-section">
      <h2>Thank You for Your Feedback!</h2>
      <p>
        We appreciate your input and will get back to you as soon as possible.
      </p>
      <a href="/" className="back-link">Back to Home</a>
    </div>
  );
};

export default ThankYou;
