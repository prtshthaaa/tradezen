import React from "react";
import "./support.css";

function Hero() {
  return (
    <div className="support-hero">

      <div className="left">
        <h2>Support Portal</h2>

        <h3>
          Search for an answer or browse help topics to create a ticket
        </h3>

        <input
          type="text"
          placeholder="Eg: how do I activate F&O, why is my order rejected..."
        />

        <div className="links">
          <a>Track account opening</a>
          <a>Track segment activation</a>
          <a>Intraday margins</a>
          <a>Kite user manual</a>
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