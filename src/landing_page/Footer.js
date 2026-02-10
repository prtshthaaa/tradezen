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

function Footer() {
  return (
    <div className="container-fluid bg-dark bg-opacity-75 border-top border-secondary mt-5">
      <div className="row pt-5 pb-4">

        {/* LOGO + ABOUT */}
        <div className="col-12 col-md-3 ps-md-5 mb-4">
          {TradeZenLogo}
          <p className="text-light opacity-75 mt-3 small">
            © 2010–2026, TradeZen Private Limited.  
            All rights reserved.
          </p>

          <div className="d-flex gap-3 fs-5">
            <a href="#" className="text-secondary">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="col-6 col-md-3 mb-4">
          <h6 className="fw-bold text-light">Products</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-decoration-none text-secondary">Company</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">About Us</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Careers</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Leadership</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Blog</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="col-6 col-md-3 mb-4">
          <h6 className="fw-bold text-light">Support</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-decoration-none text-secondary">Help Center</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Contact Support</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">FAQs</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">System Status</a></li>
          </ul>
        </div>

        {/* ACCOUNT */}
        <div className="col-6 col-md-3 mb-4">
          <h6 className="fw-bold text-light">Account</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-decoration-none text-secondary">My Account</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Login</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Register</a></li>
            <li><a href="#" className="text-decoration-none text-secondary">Order History</a></li>
          </ul>
        </div>

        {/* DISCLAIMER */}
        <div className="col-12 px-md-5 mt-3">
          <p className="text-secondary small lh-lg">
            TradeZen Private Limited is a technology-enabled financial services
            company registered under the Companies Act, 2013, Government of India.
            The platform provides market-related tools and information for
            educational purposes only and does not constitute investment advice.
            Market investments are subject to risk. TradeZen does not guarantee
            profits or returns. Users should make financial decisions at their
            own discretion after reviewing all applicable documents.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Footer;
