import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>{isLogin ? "Login to TradeZen" : "Create your TradeZen account"}</h2>

        {!isLogin && (
          <input type="text" placeholder="Full Name" />
        )}

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        {!isLogin && (
          <input type="password" placeholder="Confirm Password" />
        )}

        <button
          onClick={() => navigate("/dashboard")}
          >
          {isLogin ? "Login" : "Signup"}
        </button>

        <p>
          {isLogin ? "New user?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Signup" : " Login"}
          </span>
        </p>

      </div>

    </div>
  );
}

export default Signup;