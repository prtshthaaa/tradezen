import React from "react";

function RightSection({ image, title, desc }) {
  return (
    <div className="product-section reverse">

      <div className="product-left">
        <img src={image} alt={title} />
      </div>

      <div className="product-right">
        <h2>{title}</h2>
        <p>{desc}</p>

        <div className="links">
          <span>Try demo →</span>
          <span>Learn More →</span>
        </div>

        <div className="badges">
          <img src="/media/images/googlePlayBadge.svg" alt="play" />
          <img src="/media/images/appstoreBadge.svg" alt="app" />
        </div>
      </div>

    </div>
  );
}

export default RightSection;