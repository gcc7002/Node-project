const express = require("express");
const app = express();

const opportunities = [
  { id: 1, title: "Volunteer in Europe", type: "volunteer" },
  { id: 2, title: "Scholarship in USA", type: "scholarship" },
  { id: 3, title: "Remote Internship", type: "internship" },
];

app.get("/opportunities", (req, res) => {
  res.json(opportunities);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
