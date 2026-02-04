import React from 'react'
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
function Footer() {
    return ( 
        <div className='container-fluid border-top mt-5' style={{backgroundColor: "#e2e3e5"}}>
            <div className='row  mt-5'>
                <div className='col-3 ps-5'>
                    {TradeZenLogo}
                    <p>&copy; 2010-2024, Not TradeZen Broking Ltd.
                        All rights reserved.
                    </p>
                    <div className="social-icons text-muted">
    <a href="#"><i className="fa-brands fa-x-twitter text-muted"></i></a>
    <a href="#"><i className="fa-brands fa-facebook text-muted"></i></a>
    <a href="#"><i className="fa-brands fa-instagram text-muted"></i></a>
    <a href="#"><i className="fa-brands fa-linkedin text-muted"></i></a>
    <a href="#"><i className="fa-brands fa-telegram text-muted"></i></a>
  </div>


                </div>
                <div className='col-3'>
                    <h6 className='fw-bold'>Products</h6>
                    <ul className='list-unstyled'>
                        <li><a href="#" className="text-decoration-none text-dark">Company</a></li>
                        <li><a href="#" className="text-decoration-none text-dark">About Us</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Careers</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Leadership</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Our Team</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Press & Media</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Blog</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Contact Us</a></li>
                        <li><a href="#" className="text-decoration-none text-muted">Sustainability</a></li>


                    </ul>
                </div>
                <div className='col-3'>
                    <h6 className='fw-bold'>Support</h6>
                    <ul className='list-unstyled'>
                       <li><a href="#" className="text-decoration-none text-dark">Help Center</a></li>
<li><a href="#" className="text-decoration-none text-muted">Contact Support</a></li>
<li><a href="#" className="text-decoration-none text-muted">FAQs</a></li>
<li><a href="#" className="text-decoration-none text-muted">System Status</a></li>
<li><a href="#" className="text-decoration-none text-muted">Report an Issue</a></li>

                    </ul>
                </div>
                <div className='col-3'>
                    <h6 className='fw-bold'></h6>
                    <ul className='list-unstyled'>
                       <li><a href="#" className="text-decoration-none text-dark">My Account</a></li>
<li><a href="#" className="text-decoration-none text-muted">Login</a></li>
<li><a href="#" className="text-decoration-none text-muted">Register</a></li>
<li><a href="#" className="text-decoration-none text-muted">Order History</a></li>

                    </ul>
                </div>
<div className='mt-4 text-muted ps-5 pe-4'>
     <p>TradeZen Private Limited is a technology-enabled financial services company registered under
                     the Companies Act, 2013, Government of India. 
                     <br></br>
                     <br></br>
                     The company is incorporated as a private limited entity and 
                     operates in compliance with applicable Indian laws and regulatory 
                     frameworks. TradeZen Private Limited is registered with the Ministry
                      of Corporate Affairs (MCA) and, where applicable,
                       with regulatory authorities such as SEBI, NSE, and BSE 
                       for permitted financial and market-related activities.
                       <br></br>
                       <br></br>
                        All information, tools, products,
                         and services provided on this platform are for 
                         informational purposes only and do not constitute
                          investment advice, financial solicitation, or an offer 
                          to buy or sell securities. Market investments are subject 
                          to risk, and users are advised to read all related documents
                           carefully before making any financial decisions. 
                           <br></br>
                           <br></br>
                           TradeZen Private Limited does not guarantee returns or profits
                            and shall not be held responsible for any losses arising from the use of information available
                             on this website. All trademarks, logos, and brand names are the property of their respective owners. © 2026 TradeZen Private Limited.
                              All rights reserved.</p>
</div>
               
            </div>
        </div>
     );
}

export default Footer;