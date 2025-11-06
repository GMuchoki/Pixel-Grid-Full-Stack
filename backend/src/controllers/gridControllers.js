import db from "../db/database.js";

export const getGridData = (req, res) => {
  try {
    const getRows = db.prepare("SELECT * FROM grid").all();
    res.status(200).json({ grid: getRows });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch data!",
      error: error,
    });
  }
};

export const addGridData = (req, res) => {
  const { x, y, color } = req.body;

  if (!color) {
    return res.status(400).json({
      message: "Invalid color value",
    });
  }

  const row = db.prepare("SELECT * FROM grid WHERE x = ? AND y = ?").get(x, y);

  if (!row) {
    return res.status(400).json({
      message: "Invalid coordinates",
    });
  }

  const updateGrid = db.prepare("UPDATE grid SET color = ? WHERE x = ? AND y = ?").run(color, x, y);

  if (updateGrid.changes > 0) {
    const updatedGrid = db.prepare("SELECT * FROM grid").all();

    return res.status(200).json({
      message: "Color updated successfully",
      grid: updatedGrid,
    });
  } else {
      return res.status(400).json({
        message: "No changes made — the color might already be the same or coordinates invalid.",
      });
  }
};