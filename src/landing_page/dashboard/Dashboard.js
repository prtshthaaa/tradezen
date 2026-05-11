import React from "react";

function Dashboard() {
  return (
    <div
      style={{
        background: "#050816",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        

        <button
          style={{
            background: "transparent",
            border: "2px solid #ff7b2c",
            color: "#ff7b2c",
            padding: "10px 25px",
            borderRadius: "30px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Welcome Box */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(96,0,128,0.9), rgba(25,0,50,0.95))",
          border: "2px solid #a855f7",
          borderRadius: "25px",
          padding: "60px 30px",
          textAlign: "center",
          marginBottom: "40px",
          boxShadow: "0 0 25px rgba(168,85,247,0.4)",
        }}
      >
        <h1
          style={{
            color: "#ff7b2c",
            fontSize: "58px",
            fontWeight: "800",
            margin: "0",
            letterSpacing: "1px",
          }}
        >
          Welcome to TradeZen Dashboard
        </h1>
      </div>

      {/* Wallet Card */}
      <div
        style={{
          background: "#0f172a",
          border: "2px solid #ff7b2c",
          borderRadius: "25px",
          padding: "35px",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          boxShadow: "0 0 20px rgba(255,123,44,0.25)",
        }}
      >
        {/* Wallet Icon */}
        <div
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #5b21b6, #2e1065)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "60px",
            boxShadow: "0 0 20px rgba(255,123,44,0.4)",
          }}
        >
          👛
        </div>

        {/* Wallet Text */}
        <div>
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "15px",
            }}
          >
            Wallet Balance
          </h2>

          <h1
            style={{
              color: "#ff7b2c",
              fontSize: "70px",
              margin: "0",
              fontWeight: "800",
            }}
          >
            ₹25,000
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;