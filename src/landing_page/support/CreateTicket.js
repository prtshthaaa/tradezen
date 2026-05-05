import React from "react";
import "./support.css";

function CreateTicket() {
  return (
    <div className="ticket-section">

      <h2>To create a ticket, select a relevant topic</h2>

      <div className="grid">

        {/* Column 1 */}
        <div>
          <h4>Account Opening</h4>
          <a href="#">Online Account Opening</a>
          <a href="#">Offline Account Opening</a>
          <a href="#">Company, Partnership and HUF</a>
          <a href="#">NRI Account Opening</a>
          <a href="#">Charges at TradeZen</a>
          <a href="#">Getting Started</a>
        </div>

        {/* Column 2 */}
        <div>
          <h4>Your TradeZen Account</h4>
          <a href="#">Login Credentials</a>
          <a href="#">Account Modification</a>
          <a href="#">Bank details</a>
          <a href="#">Your Profile</a>
          <a href="#">Transfer of shares</a>
        </div>

        {/* Column 3 */}
        <div>
          <h4>Trading</h4>
          <a href="#">Margin / leverage</a>
          <a href="#">Kite Web & Mobile</a>
          <a href="#">Trading FAQs</a>
          <a href="#">Corporate Actions</a>
          <a href="#">Kite API</a>
        </div>

      </div>

      {/* second row */}
      <div className="grid">

        <div>
          <h4>Funds</h4>
          <a href="#">Adding Funds</a>
          <a href="#">Withdrawal</a>
          <a href="#">eMandates</a>
        </div>

        <div>
          <h4>Console</h4>
          <a href="#">Reports</a>
          <a href="#">Ledger</a>
          <a href="#">Portfolio</a>
          <a href="#">IPO</a>
        </div>

        <div>
          <h4>Coin</h4>
          <a href="#">Mutual Funds</a>
          <a href="#">SIP</a>
          <a href="#">Buy & Sell</a>
        </div>

      </div>

    </div>
  );
}

export default CreateTicket;