# Pixel‑Grid Full‑Stack

A full‑stack pixel grid application where users can update cells in a grid with different colours. The backend exposes endpoints to fetch and update the grid; the frontend displays the grid and allows users to click/select colours.

## 🧰 Features

* Fetch the current state of the grid from the backend.
* Click on a grid cell (or otherwise trigger) to set its colour.
* Toolbar to select the active colour.
* Modern stack: Node/Express backend + React frontend (with Vite or similar).
* Structured for scalability (separate `backend/` and `frontend/` folders).

## 📁 Project Structure

```
/
├── backend/           # Express API server
├── frontend/          # React UI application
├── .gitignore
├── .gitattributes
└── README.md
```

### Backend

* Uses `express` for routing
* Uses `cors` and `express.json()` middleware
* SQLite (or similar) database accessed via `db.prepare(...).run(...)` calls
* Endpoints:

  * `GET /grid` → returns `{ grid: [...] }`
  * `POST /setGridColor` → expects `{ x, y, color }`, updates the database, returns updated grid

### Frontend

* React functional components + hooks (`useState`, `useEffect`)
* `PixelGrid` component renders the grid and wires up updates
* `Toolbar` component lets the user pick a colour
* Fetches the data from the backend, posts updates
* Modern syntax: `async/await`, modular file structure

## 🚀 Getting Started

### Prerequisites

* Node.js (v14+ recommended)
* npm or yarn
* (Optional) SQLite3 command line if you want to inspect or seed database

### Setup

1. Clone the repo

   ```bash
   git clone https://github.com/GMuchoki/Pixel-Grid-Full-Stack.git
   cd Pixel-Grid-Full-Stack
   ```

2. Setup the backend

   ```bash
   cd backend
   npm install
   # Set up your database (if required), e.g. create `grid` table
   npm start    # or `node server.js` depending on your setup
   ```

3. Setup the frontend

   ```bash
   cd ../frontend
   npm install
   npm run dev   # (if using Vite) or `npm start` (for CRA)
   ```

4. Environment variables

   * In the frontend, you should have something like:

     ```env
     VITE_API_BASE_URL=http://localhost:3000
     ```
   * In the backend, if needed:

     ```env
     PORT=3000
     ```

5. Navigate to `http://localhost:3000` (or whatever port you set) to use the app.

## 🧪 Usage

* On launch, the grid is fetched from the backend.
* Select a colour from the toolbar.
* Click/tap a cell on the grid to set its colour.
* The frontend sends a `POST` request with `{ x, y, color }`.
* The backend updates the database and returns the full updated grid, which the frontend re‑renders.
* If there’s an error (network, server, invalid inputs), a message will be shown (frontend handles errors gracefully).

## 🔧 Tech Stack

* **Backend**: Node.js, Express.js, SQLite (or similar), CORS
* **Frontend**: React, Hooks (`useState`, `useEffect`), modern build setup (e.g., Vite)
* **Database**: SQLite with simple `grid` table (columns: `x`, `y`, `color`)
* **Development**: ES Modules (`import/export`) in frontend, CommonJS (`require`) or ES Modules in backend depending on setup

## ✅ Why this project?

* Good example of full‑stack architecture for small interactive apps.
* Demonstrates how to build a real‑time (sort of) grid UI with backend state persistence.
* Modular codebase: each side (frontend/backend) separated, easy to extend (e.g., authentication, multiple grids, web sockets).
* Shows usage of modern React patterns and clean server endpoints.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/MyFeature`)
3. Commit your changes (`git commit -m "Add MyFeature"`)
4. Push to the branch (`git push origin feature/MyFeature`)
5. Create a Pull Request describing your changes.

Please ensure your code follows the style of the existing codebase and you test any new functionalities.

## 📄 License

[MIT License](LICENSE) (or whichever license you choose) — feel free to change accordingly.

## 👤 Contact

Maintained by **GMuchoki**.
Feel free to open issues or pull requests if you find bugs or want to suggest improvements.

---

*Happy coding & pixel‑painting!* 🎨
