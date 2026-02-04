import React from "react";


const TradeZenLogo = (
  <svg
    width="160"
    height="40"
    viewBox="0 0 160 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Icon */}
    <circle cx="25" cy="20" r="18" stroke="#2563EB" strokeWidth="2" />
    <path
      d="M14 24L18 20L22 23L28 16"
      stroke="#2563EB"
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
      fill="#0F172A"
      fontFamily="Inter, Arial, sans-serif"
    >
      Trade
    </text>

    <text
      x="111"   /* 👈 spacing between e and Z */
      y="26"
      fontSize="22"
      fontWeight="700"
      fill="#2563EB"
      fontFamily="Inter, Arial, sans-serif"
    >
      Zen
    </text>
  </svg>
);

function Navbar() {
  return (
    
  <nav className="navbar navbar-expand-lg  bg-body-tertiary py-0  " >
  <div className="container-fluid px-3" style={{backgroundColor: "#e2e3e5"}}>

    {/* LOGO */}
    <a className="navbar-brand d-flex align-items-center py-0" href="#">
      {TradeZenLogo}
    </a>

    {/* TOGGLER */}
    <button
      className="navbar-toggler py-0"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* CONTENT */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      {/* RIGHT SIDE LINKS */}
      <ul className="navbar-nav ms-auto mb-0 gap-3 align-items-center me-5">
        <li className="nav-item">
          <a className="nav-link py-1 fw-medium " href="#">
           Signup
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link py-1 fw-medium" href="#">
           About
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link py-1 fw-medium" href="#">
            Products
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link py-1 fw-medium" href="#">
           Pricing
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link  py-1 fw-medium"
            href="#"
           
          >
           Support
          </a>
        </li>

        <li className="nav-item ">
          <a
            className="nav-link py-1 fw-medium"
            href="#"
            role="button"
            
          >
           &#9776;
          </a>
        </li>
      </ul>

    </div>
  </div>
</nav>


  );
}

export default Navbar;
