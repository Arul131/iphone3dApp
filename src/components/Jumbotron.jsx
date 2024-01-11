import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphoneeeeeee.jpg";

export default function Jumbotron() {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    console.log({ element });
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      {/* <img className="logo" src={Iphone} alt="iphone 15 pro" /> */}
      <p className="description">iphone 15 pro</p>
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $41.62/mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="Iphone" />
    </div>
  );
}
