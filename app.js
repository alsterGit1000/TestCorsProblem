const express = require("express");
const cors = require("cors");
const app = express();

// Configure CORS options
const corsOptions = {
  origin: "http://your-frontend-domain.com", // Replace with the domain of your frontend app
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Use CORS middleware
app.use(cors(corsOptions));

// Your other middleware and route handlers
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("got into the post!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
