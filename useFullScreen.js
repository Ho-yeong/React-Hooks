import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useFullscreen = (callback) => {
  const element = useRef();
  let state = false;
  const runcb = () => {
    if (callback && typeof callback === "function") {
      if (!state) {
        state = true;
      } else {
        state = false;
      }
      callback(state);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    } else if (element.current.mozRequestFullScreen) {
      element.current.mozRequestFullScreen();
    } else if (element.current.webkitRequestFullScreen) {
      element.current.webkitRequestFullScreen();
    } else if (element.current.msRequestFullScreen) {
      element.current.msRequestFullScreen();
    }
    runcb();
  };
  const exitFull = () => {
    if (state === false) {
      console.log("already small");
      return;
    }

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runcb();
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img
          src="data:image/jpeg;base64,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"
          alt="nos"
        />
        <button onClick={exitFull}>Exit</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  );
}
