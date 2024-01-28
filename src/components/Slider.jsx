import React, { useState } from "react";
import ReactSlidy from "react-slidy";

const SLIDES = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];

const createStyles = (isActive) => ({
  background: "transparent",
  border: 0,
  color: isActive ? "#333" : "#ccc",
  cursor: "pointer",
  fontSize: "32px",
});

export default () => {
  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  return (
    <>
      <ReactSlidy doAfterSlide={updateSlide} slide={actualSlide}>
        {SLIDES.map((src) => (
          <img alt="" key={src} src={src} />
        ))}
      </ReactSlidy>
      <div className="Dots">
        {SLIDES.map((_, index) => {
          return (
            <button
              key={index}
              style={createStyles(index === actualSlide)}
              onClick={() => updateSlide({ currentSlide: index })}
            >
              &bull;
            </button>
          );
        })}
      </div>
    </>
  );
};
