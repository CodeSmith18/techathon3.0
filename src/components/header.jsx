import React from "react";
import vdo from "./3129957-uhd_3840_2160_25fps.mp4";
import "./header.css";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="overlay"></div>
        <video src={vdo} autoPlay loop muted />
        <div className="content">
            <p>ECESOC presents </p>
            <h1>TECH-A-THON</h1>
            <p>Co Powered by Unstop</p>
             <a className ="transparent-button"href="https://unstop.com/p/quiz-a-bit-tech-a-thon-30-bit-mesra-ranchi-1066276" target="_blank">Register</a>
        </div>
    </header>
  );
};
