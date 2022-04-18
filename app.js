const express = require("express");

const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
