
import "./support.css";
import React, { useState } from "react";


function Hero() {

  const [query, setQuery] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");

const [showDropdown, setShowDropdown] = useState(false);

const faqs = [
  {
    question: "How to open account?",
    answer: "Go to Signup page and create your TradeZen account.",
  },
  {
    question: "How to add funds?",
    answer: "Go to Dashboard → Wallet → Add Funds.",
  },
  {
    question: "Forgot password?",
    answer: "Use the reset password option on login page.",
  },
  {
    question: "How to buy stocks?",
    answer: "Open Dashboard and click Buy option.",
  },
];

const filteredFaqs = faqs.filter((faq) =>
  faq.question.toLowerCase().includes(query.toLowerCase())
);
  return (
    <div className="support-hero">

      <div className="left">
        <h2>Support Portal</h2>

        <h3>
          Search for an answer or browse help topics to create a ticket
        </h3>

        <div style={{ position: "relative" }}>

  <input
    type="text"
    placeholder="Search your question..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    style={{
      width: "100%",
      padding: "15px",
      borderRadius: "10px",
      border: "1px solid #ff7b2c",
      fontSize: "16px",
    }}
  />

  {query && (
    <div
      style={{
        position: "absolute",
        width: "100%",
        background: "#111827",
        border: "1px solid #ff7b2c",
        borderRadius: "10px",
        marginTop: "5px",
        zIndex: "1000",
      }}
    >
      {faqs
        .filter((faq) =>
          faq.question.toLowerCase().includes(query.toLowerCase())
        )
        .map((faq, index) => (
          <div
            key={index}
            onClick={() => {
              setQuery(faq.question);
              setSelectedAnswer(faq.answer);
            }}
            style={{
              padding: "12px",
              cursor: "pointer",
              color: "white",
              borderBottom: "1px solid #333",
            }}
          >
            {faq.question}
          </div>
        ))}
    </div>
  )}

  {showDropdown && (
  <div
    style={{
      position: "absolute",
      width: "100%",
      background: "#111827",
      border: "1px solid #ff7b2c",
      borderRadius: "10px",
      marginTop: "5px",
      zIndex: "1000",
    }}
  >
    {faqs.map((faq, index) => (
      <div
        key={index}
        onClick={() => {
          setQuery(faq.question);
          setSelectedAnswer(faq.answer);
          setShowDropdown(false);
        }}
        style={{
          padding: "12px",
          cursor: "pointer",
          color: "white",
          borderBottom: "1px solid #333",
        }}
      >
        <h4 style={{ color: "#ff7b2c" }}>
          {faq.question}
        </h4>

        {query === faq.question && (
          <p style={{ marginTop: "5px" }}>
            {faq.answer}
          </p>
        )}
      </div>
    ))}
  </div>
)}

</div>

<div
  style={{
    background: "#111827",
    borderRadius: "10px",
    marginTop: "10px",
    padding: "10px",
  }}
>
  {query &&
    filteredFaqs.map((faq, index) => (
      <div
        key={index}
        style={{
          padding: "12px",
          borderBottom: "1px solid #333",
        }}
      >
        <h4 style={{ color: "#ff7b2c" }}>
          {faq.question}
        </h4>

        <p style={{ color: "white" }}>
          {faq.answer}
        </p>
      </div>
    ))}
</div>

<div style={{ marginTop: "20px" }}>
  {query &&
    filteredFaqs.map((faq, index) => (
      <div
        key={index}
        style={{
          background: "#111827",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "10px",
          border: "1px solid #ff7b2c",
        }}
      >
        <h4 style={{ color: "#ff7b2c" }}>
          {faq.question}
        </h4>

        <p style={{ color: "white" }}>
          {faq.answer}
        </p>
      </div>
    ))}
</div>

        <div className="links">
          <a href="/">Track account opening</a>
          <a href="/">Track segment activation</a>
          <a href="/">Intraday margins</a>
          <a href="/">Kite user manual</a>
        </div>
      </div>

      <div className="right">
        <h3>Featured</h3>
        <p>1. Current Takeovers and Delisting – January 2024</p>
        <p>2. Latest Intraday leverages – MIS & CO</p>
      </div>

    </div>
  );
}

export default Hero;