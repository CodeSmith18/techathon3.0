import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";

import {Gallery} from "./components/gallery";
import { Testimonials } from "./components/testimonials";

import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
const jsonDataa = [
  { type: 'video', url: 'https://www.youtube.com/embed/yt0B_i3aq2U' },
  { type: 'video', url: 'https://www.youtube.com/embed/lMIk7EHR6y8' },
  { type: 'video', url: 'https://www.youtube.com/embed/watch?v=AS0-bUbbrLY' },

 
  { type: 'image', url: "img/sp1.jpg" },
  { type: 'image', url: "img/sp2.jpg" },
  { type: 'image', url: "img/sp3.jpg" },
  // Add more video and image objects as needed
];

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
    
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Gallery data={jsonDataa} />
      <Testimonials data={landingPageData.Testimonials} />

      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
