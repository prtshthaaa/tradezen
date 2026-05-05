import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <div>

      <Hero />

      <LeftSection
        image="/media/images/kite.png"
        title="Kite"
        desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, elegant UI, and seamless experience."
      />

      <RightSection
        image="/media/images/console.png"
        title="Console"
        desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments."
      />

      <LeftSection
        image="/media/images/coin.png"
        title="Coin"
        desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account."
      />
      <Universe />

    </div>
  );
}

export default ProductPage;