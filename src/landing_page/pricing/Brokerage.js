import React from "react";
import "./pricing.css";

function Brokerage() {
  return (
    <div className="brokerage">

      <div className="pricing-cards">
        
        <div className="card">
          <h2>₹0</h2>
          <p>Free equity delivery</p>
        </div>

        <div className="card">
          <h2>₹20</h2>
          <p>Intraday and F&O trades</p>
        </div>

        <div className="card">
          <h2>₹0</h2>
          <p>Free direct mutual funds</p>
        </div>

      </div>

      <div className="signup-center">
        <button>Sign up now</button>
      </div>

     <div className="charges">

  <div className="charges-header">
    <h3>Brokerage calculator</h3>
    <h3>List of charges</h3>
  </div>

        <ul>
          <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note.</li>
          <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity.</li>
          <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity.</li>
          <li>If account is in debit balance, any order placed will be charged ₹40.</li>
        </ul>

      </div>

    </div>
  );
}

export default Brokerage;