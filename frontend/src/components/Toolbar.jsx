import React from "react";
import "../styles/Toolbar.css";

const Toolbar = ({ selectedColor, setSelectedColor }) => {

  const colors = ["black", "red", "green", "blue", "yellow", "purple", "orange", "pink"];

  return (
    <div className="toolbar">
      {colors.map((c) => (
        <button 
          key={c} 
          className={selectedColor === c ? "selected-color" : ""}
          style={{ backgroundColor: c }}
          onClick={() => setSelectedColor(c)}
        ></button>
      ))}
    </div>
  );
};

export default Toolbar;