import React from "react";
import "./products.css";

function Universe() {
  return (
    <div className="universe">

      <p className="sub-text">
        Want to know more about our technology stack? Check out the TradeZen.tech blog.
      </p>

      <h2>The TradeZen Universe</h2>

      <p className="desc">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      <div className="universe-grid">

        <div className="card">
          <img src="/media/images/smallcaseLogo.png" alt="smallcase" />
          <p>Thematic investment platform</p>
        </div>

        <div className="card">
          <img src="/media/images/streakLogo.png" alt="streak" />
          <p>Algo & strategy platform</p>
        </div>

        <div className="card">
          <img src="/media/images/sensibullLogo.svg" alt="sensibull" />
          <p>Options trading platform</p>
        </div>

        <div className="card">
          <img src="/media/images/zerodhaFundhouse.png" alt="fund" />
          <p>Asset management</p>
        </div>

        <div className="card">
          <img src="/media/images/goldenpiLogo.png" alt="bonds" />
          <p>Bond platform</p>
        </div>

        <div className="card">
          <img src="/media/images/dittoLogo.png" alt="ditto" />
          <p>Insurance platform</p>
        </div>

      </div>

      <button className="signup-btn">Signup Now</button>

    </div>
  );
}

export default Universe;