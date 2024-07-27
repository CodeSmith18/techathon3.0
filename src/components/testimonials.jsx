import React, { useEffect, useRef } from "react";
import "./testimonal.css";

export const Testimonials = (props) => {
  const h1Refs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    h1Refs.current.forEach(h1 => {
      if (h1) observer.observe(h1);
    });

    return () => {
      if (observer) {
        h1Refs.current.forEach(h1 => {
          if (h1) observer.unobserve(h1);
        });
      }
    };
  }, []);

  return (
    <div className="particpate">
      <h1 ref={(el) => (h1Refs.current[0] = el)}>Make your Team and Participate</h1>
      <h1 ref={(el) => (h1Refs.current[1] = el)}>To Win Exciting Prizes Worth 20K</h1>
      <a href="https://unstop.com/p/quiz-a-bit-tech-a-thon-30-bit-mesra-ranchi-1066276" target="_blank">Register </a>
      <div> <h1>Techathon 2.0 Winners and Speakers</h1></div>
    </div>
  );
};
