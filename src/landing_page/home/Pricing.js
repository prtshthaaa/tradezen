import React from 'react';

import useScrollReveal from '../scroll';

function Pricing() {
  const { ref, inView } = useScrollReveal({ threshold: 0.4 });

  return ( 
    <div ref={ref} className={`container ${inView ? "in-view" : ""}`}>
      
      <div className="row my-5">

        {/* LEFT CONTENT */}
        <div className={`col-5 reveal reveal-left ${inView ? "in-view" : ""}`}>
          <h1 className="text-light fw-bold mb-3">
            Unbeatable pricing
          </h1> 

          <p className="text-light opacity-75 mb-4">
            We pioneered the concept of discount broking price transparency in India.
            Flat fees and no hidden charges.
          </p>

          <a
            href=""
            className="fw-semibold text-decoration-none"
            style={{ color: "#FF5F00" }}
          >
            See pricing <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>

        <div className="col-2"></div>

        {/* RIGHT CONTENT */}
        <div className={`col-5 reveal reveal-right ${inView ? "in-view" : ""}`}>
          <div className="row">

            <div
              className="col-6 p-4 text-center rounded"
              style={{ border: "1px solid #FF5F00" }}
            >
              <h1 className="fw-bold" style={{ color: "#FF5F00" }}>
                <i className="fa-solid fa-indian-rupee-sign"></i>0
              </h1>
              <p className="pt-3 text-light opacity-75">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            
            <div
              className="col-6 p-4 text-center rounded"
              style={{ border: "1px solid #FF5F00" }}
            >
              <h1 className="fw-bold" style={{ color: "#FF5F00" }}>
                <i className="fa-solid fa-indian-rupee-sign"></i>20
              </h1>
              <p className="pt-3 text-light opacity-75">
                Intraday and F&O
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Pricing;
