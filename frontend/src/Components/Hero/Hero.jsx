import React from "react";
import "./Hero.css";
import hand_icon from "../../Assets/hand_icon.png";
import hero_image from "../../Assets/hero_image.png";
import arrow from "../../Assets/arrow.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS</h2>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="Hand Emoji"></img>
          </div>
          <p>collections</p>
          <p>for everyone</p>
          <div className="hero-shop-now-btn">
            <div>Shop Now</div>
            <img src={arrow} alt=""></img>
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="Hero"></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
