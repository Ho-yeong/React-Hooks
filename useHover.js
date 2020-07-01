import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onClick);
      }
    };
  }, []);
  return element;
};

export default function App() {
  const sayHello = () => {
    console.log("say ! Hello!");
  };
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>HI</h1>
    </div>
  );
}
