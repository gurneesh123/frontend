import React, { useState } from "react";
import "./Faq.css"; // Ensure this CSS file is linked correctly

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How should I store my wine?",
      answer:
        "Wine should be stored in a cool, dark place with a consistent temperature, ideally between 45°F and 65°F (7°C and 18°C), and bottles should be kept horizontally to keep the cork moist.",
    },
    {
      question: "What are your shipping options?",
      answer:
        "We offer standard, expedited, and express shipping options. Delivery times and costs vary depending on your location. Check our shipping page for more details.",
    },
    {
      question: "Do you offer wine tastings or events?",
      answer:
        "Yes, we host regular wine tastings and events both in-store and online. Check our events calendar on the website to register and for more information.",
    },
    {
      question: "Can I return or exchange my wine purchase?",
      answer:
        "If you are not satisfied with your purchase, you may return or exchange unopened bottles within 30 days of purchase. Please review our return policy for more details.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleAnswer(index)}
          >
            <h3 className="faq-question">{faq.question}</h3>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
