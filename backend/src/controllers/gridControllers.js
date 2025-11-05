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