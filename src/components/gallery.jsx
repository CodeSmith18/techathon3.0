import React, { useEffect, useRef } from "react";
import "./gallery.css";

export const Gallery = ({ data }) => {
  const galleryItemRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1 // Trigger animation when 10% of element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    galleryItemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (observer) {
        galleryItemRefs.current.forEach((item) => {
          if (item) observer.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <div className="gallery" id="gg">
     
      {data.map((item, index) => (
        <div
          key={index}
          ref={(el) => (galleryItemRefs.current[index] = el)}
          className="gallery-item"
        >
          {item.type === "video" && (
            <iframe
              title={`Video ${index}`}
              width="100%"
              height="100%"
              src={item.url}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
          {item.type === "image" && (
            <img
              src={item.url}
              alt={`Image ${index}`}
              style={{ maxWidth: "100%", height: "100%" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
