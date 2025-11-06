import React, { useState, useEffect } from "react";
import PixelGrid from "./components/PixelGrid";
import Toolbar from "./components/Toolbar";
import "./styles/global.css";


const App = () => {
  const [grid, setGrid] = useState([]);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState("black");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/grid`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setGrid(result.grid);

      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load grid data.");
      }
    };

    fetchData();
  }, []);

  const updateColor = async (x, y) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/setGridColor`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ x, y, color: selectedColor })
      });

      const { grid: updatedGrid } = await response.json();

      setGrid(updatedGrid);

    } catch (error) {
      console.error("Error updating grid color:", error);
    }
  };

  return (
    <div className="content-wrapper">
      <h1>Pixel Grid</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <PixelGrid grid={grid} updateColor={updateColor} />
          <Toolbar selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        </>
      )}
    </div>
  );
};

export default App;