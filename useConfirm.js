import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (!onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the World</button>
    </div>
  );
}
