import React, { useEffect } from "react";
import "./popup.css";
import Image from "next/image";
const Popup = ({
  name,
  details,
  image,
  link,
  type,
  show,
  setShow,
  mouseCoordinates,
  github,
}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the escape key was pressed.
      if (event.keyCode === 27) {
        // Close the popup.
        setShow(null);
      }
    };

    // Add the event listener.
    document.addEventListener("keydown", handleKeyDown);

    // Return a cleanup function that removes the event listener.
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, setShow]);
  return (
    <div className={`popup-container ${show ? "focus" : ""}`}>
      <div
        className="popup-content"
        style={{
          transformOrigin: `${mouseCoordinates.x - 200}px ${
            mouseCoordinates.y
          }px`,
        }}
      >
        <span
          className="popup-close"
          onClick={() => {
            setShow(null);
          }}
        >
          &times;
        </span>
        <Image
          src={image}
          alt={name}
          width="400"
          height="300"
          className={show ? "animate__animated animate__fadeInDown" : ""}
        />
        <div className="info">
          <h3
            className={`project-Name ${
              show ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            Name: {name}
          </h3>
          <p
            className={`project-Details ${
              show ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            Description: {details}
          </p>
          <p
            className={`project-Type ${
              show ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            Type: {type}
          </p>
        </div>
        <div className="buttons-wrapper">
          {link && (
            <button
              onClick={() => {
                location.href = link;
              }}
              className={`button-57 ${
                show ? "animate__animated animate__fadeInLeft" : ""
              }`}
              role="button"
            >
              <span className="text">Website</span>
              <span>View</span>
            </button>
          )}
          {github && (
            <button
              onClick={() => {
                location.href = github;
              }}
              className={`button-57 ${
                show ? "animate__animated animate__fadeInRight" : ""
              }`}
              role="button"
            >
              <span className="text">Github</span>
              <span>View</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
