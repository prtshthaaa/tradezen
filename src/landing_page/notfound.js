import React from "react";
import { Link } from 'react-router-dom';
function Notfound() {
  return (
    <div className="container p-4 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">4O4 not found</h1>
        <p>
         Sorry, the page you are looking for does not exist. Please check the URL or return to the homepage.
        </p>
        <Link to="/" >    
            <button className="hero-btn mb-2 ">Go Home</button>
</Link>
      </div>
    </div>
  );
}

export default Notfound;