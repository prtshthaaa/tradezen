import React from "react";
import { Link } from "react-router-dom";

const TradeZenLogo = (
  <svg
    width="160"
    height="40"
    viewBox="0 0 160 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Icon */}
    <circle cx="25" cy="20" r="18" stroke="#F97316" strokeWidth="2" />
    <path
      d="M14 24L18 20L22 23L28 16"
      stroke="#F97316"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Text */}
    <text
      x="48"
      y="26"
      fontSize="22"
      fontWeight="700"
      fill="#E5E7EB"
      fontFamily="Inter, Arial, sans-serif"
    >
      Trade
    </text>

    <text
      x="111"
      y="26"
      fontSize="22"
      fontWeight="700"
      fill="#F97316"
      fontFamily="Inter, Arial, sans-serif"
    >
      Zen
    </text>
  </svg>
);

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-opacity-75 border-bottom border-secondary py-1 fixed-top">
      <div className="container-fluid px-3">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center py-0" to="/">
          {TradeZenLogo}
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTENT */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-0 gap-3 align-items-center me-4">

            <li className="nav-item">
              <Link
                className="nav-link py-1 fw-medium"
                style={{ color: "#F97316" }}
                to="/signup"
              >
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link py-1 fw-medium"
                style={{ color: "#F97316" }}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link py-1 px-3 fw-medium "
                style={{ color: "#F97316" }}
                to="/products"
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link py-1 fw-medium"
                style={{ color: "#F97316" }}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link py-1 fw-medium"
                style={{ color: "#F97316" }}
                to="/support"
              >
                Support
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link py-1 fw-bold fs-5"
                style={{ color: "#F97316" }}
                to="/menu"
              >
                &#9776;
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
