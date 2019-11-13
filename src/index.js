const express = require("express");
const app = express();

// CrossDomain
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
};

app.use(allowCrossDomain);

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require("./routes/eployees"));

// Starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
