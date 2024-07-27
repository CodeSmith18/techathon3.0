import React from "react";
import ecsoc from "./ecesoc.png";
import tech from "./WhatsApp_Image_2024-07-11_at_02.22.16_e80e6850-removebg-preview.png";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a href="https://ecesocbitm.netlify.app" target="_blank"><img src={ecsoc} alt=""  ></img></a>
          <a href="https://unstop.com/p/quiz-a-bit-tech-a-thon-30-bit-mesra-ranchi-1066276" target="_blank">  <img src={tech} alt="" /></a>
         
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            
            <li>
              <a href="#gg" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#cc" className="page-scroll">
                Problem Statement
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
