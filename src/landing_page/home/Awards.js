import React from "react";
import "./css/awards.css";
import useScrollReveal from "../scroll";

function Awards() {
  const { ref, inView } = useScrollReveal({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={`awards-container my-5 ${inView ? "in-view" : ""}`}
    >
      <div className="row align-items-center">

        <div className={`col-6 px-4 award-left reveal ${inView ? "in-view" : ""}`}>
          <img
            src="media/images/awards.png"
            alt="Awards illustration"
            className="award-img mb-4"
          />
        </div>
<div className={`col-6 px-4 award-right reveal ${inView ? "in-view" : ""}`}>

  <h1 className="mb-3 text-light fw-bold">
    Largest stock broker in India
  </h1>

  <p className="mb-4 text-light">
    2+ million TradeZen clients contribute to over 15% of all
    retail order volumes in India daily by trading and investing in:
  </p>

  <div className="row mb-4">
    <div className="col-6">
      <ul className="list-unstyled text-light">
        <li className="mb-2">
          <span className="text-warning me-2">•</span>Futures and Options
        </li>
        <li className="mb-2">
          <span className="text-warning me-2">•</span>Commodity derivatives
        </li>
        <li className="mb-2">
          <span className="text-warning me-2">•</span>Currency derivatives
        </li>
      </ul>
    </div>

    <div className="col-6">
      <ul className="list-unstyled text-light">
        <li className="mb-2">
          <span className="text-warning me-2">•</span>Stocks & IPOs
        </li>
        <li className="mb-2">
          <span className="text-warning me-2">•</span>Direct mutual funds
        </li>
        <li className="mb-2">
          <span className="text-warning me-2">•</span>Bonds and securities
        </li>
      </ul>
    </div>
  </div>

        </div>

      </div>
    </div>
  );
}

export default Awards;
