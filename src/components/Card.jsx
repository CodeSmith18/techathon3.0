import React from "react";
import "./Card.css";

const Card = ({ id, title, description, icon, download }) => {
  return (
    <div
      htmlFor={id}
      className="card"
      Style={{
        backgroundImage: 'url("bg")',
      }}
    >
      <div className="row">
        <div className="icon">{id}</div>
        <div className="description">
          <h4>{title}</h4>
          
          <a href={download}>Download</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
