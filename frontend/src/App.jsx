import React, { useState, useEffect } from "react";
import PixelGrid from "./components/PixelGrid";
import "./styles/global.css";


const App = () => {
  const [grid, setGrid] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div className="content-wrapper">
      <h1>Pixel Grid</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <PixelGrid grid={grid} />
      )}
    </div>
  );
};

export default App;