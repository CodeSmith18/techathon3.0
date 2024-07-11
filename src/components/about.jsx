import React from "react";
import poster from "./image.png";
import "./Techathon.css";

export const About = (props) => {
  return (
    <div className="container-about">
      <div className="content-about">
      <h1>Techathon: "Smart Synergy" - AI Empowering ECE Innovation</h1>
      <div className="section-about">
        <h2>Event Overview</h2>
        <ul>
          <li><strong>Duration:</strong> July 15 - August 16</li>
          <li><strong>Theme:</strong> Smart Synergy AI Empowering ECE Innovation</li>
          <li><strong>Structure:</strong> Two rounds</li>
        </ul>
      </div>
      <div className="section-about">
        <h2>Round 1: Quiz</h2>
        <ul>
          <li><strong>Content:</strong> Basic electronics, AI/ML, and general aptitude</li>
          <li><strong>Goal:</strong> Shortlist participants for Round 2</li>
        </ul>
      </div>
      <div className="section-about">
        <h2>Round 2: Project Building</h2>
        <ul>
          <li><strong>Duration:</strong> 3 weeks (2 weeks prep, 1 week presentation)</li>
          <li><strong>Focus:</strong> Develop a project assigned with the theme</li>
        </ul>
      </div>
      <div className="section-about">
        <h2>Winning Criteria</h2>
        <ul>
          <li><strong>Quiz Points:</strong> Performance in the initial quiz</li>
          <li><strong>Project Points:</strong> Quality and innovation of the project</li>
          <li><strong>Participation Points:</strong> Engagement in workshops and speaker sessions</li>
        </ul>
      </div>
     
      </div>
      
      <h1>Techathon 2.0 Winners and Speakers</h1>
    </div>
  );
};
