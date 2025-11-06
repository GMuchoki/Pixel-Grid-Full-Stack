import React from "react";
import "../styles/PixelGrid.css";

const PixelGrid = ({ grid }) => {
  return (
    <div className="grid">
      {grid.map((cell) => (
        <div 
        key={`${cell.x}-${cell.y}`}
        style={{ backgroundColor: `${cell.color}`, gridColumnStart: `${cell.x + 1}`, gridRowStart: `${cell.y + 1}` }}
        className="gridItem"
        ></div>
      ))}
    </div>
  );
}

export default PixelGrid;