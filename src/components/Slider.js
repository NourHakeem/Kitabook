import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "https://example.com/avatar1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Nulla vitae elit libero, a pharetra augue.",
      avatar: "https://example.com/avatar2.png",
    },
    // Add more data objects for additional slides
  ];

  return (
    <div id="slider" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {data.map((item, index) => (
          <li
            key={item.id}
            data-target="#slider"
            data-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>

      <div className="carousel-inner">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={item.avatar} className="rounded-circle" alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <a
        className="carousel-control-prev"
        href="#slider"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#slider"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
