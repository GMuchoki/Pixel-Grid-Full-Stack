import Database from "better-sqlite3";

const db = new Database("./grid.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS grid (
    x INT,
    y INT,
    color TEXT
  )
`);

// Check if table already has data
const rowCount = db.prepare("SELECT COUNT(*) AS count FROM grid").get().count;
console.log("Existing rows:", rowCount);

if (rowCount === 0) {
  console.log("Table is empty — inserting grid data...");

  // Create grid points
  const grid = [];
  for (let x = 0; x <= 19; x++) {
    for (let y = 0; y <= 19; y++) {
      grid.push({ x, y, color: "white" });
    }
  }

  // Prepare insert and transaction
  const insertGrid = db.prepare("INSERT INTO grid (x, y, color) VALUES (?, ?, ?)");
  const insertTransaction = db.transaction((grid) => {
    for (const g of grid) {
      insertGrid.run(g.x, g.y, g.color);
    }
  });

  try {
    insertTransaction(grid);
    console.log("Grid data inserted successfully!");
  } catch (error) {
    console.error("Transaction failed:", error.message);
  }
} else {
  console.log("Table already has data, skipping insert.");
}

// Display all rows
const rows = db.prepare("SELECT * FROM grid").all();
rows.forEach((row) => {
  console.log(`x: ${row.x}, y: ${row.y}, color: ${row.color}`);
});

export default db;