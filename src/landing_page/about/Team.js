import React from "react";
import "./about.css";

function Team() {
  return (
    <div className="team">

      <h2>People</h2>

      <div className="team-container">

        {/* LEFT IMAGE */}
        <div className="team-left">
          <img src="/media/images/nithinKamath.jpg" alt="nithin" />
          <h3>Nithin Kamath</h3>
          <p>Founder, CEO</p>
        </div>

        {/* RIGHT TEXT */}
        <div className="team-right">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader.
          </p>

          <p>
            Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p className="links">
            Homepage / TradingQnA / Twitter
          </p>
        </div>

      </div>

    </div>
  );
}

export default Team;