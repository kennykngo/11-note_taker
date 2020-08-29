const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  let data = fs.readFileSync("./db/db.json", "utf-8");
  data = JSON.parse(data);
  res.json(data);
  console.log(data);
});

router.post("/api/notes", (req, res) => {
  let data = fs.readFileSync("./db/db.json", "utf8");
  notes = JSON.parse(data);
  let id = notes.length + 1;
  const { title, text } = req.body;
  notes.push({ title, text, id });
  fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2));
});

router.delete("/api/notes/:id", async (req, res) => {
  let data = await fs.readFileSync("./db/db.json", "utf8");
  let notes = JSON.parse(data);
  const deleteId = req.params.id;
  notes.forEach((value, index) => {
    if (value.id == deleteId) {
      notes.splice(index, 1);
    }
  });
  await fs.writeFileSync(
    "./db/db.json",
    JSON.stringify(notes, null, 2),
    (err) => {
      if (err) throw err;
    }
  );
});

module.exports = router;
