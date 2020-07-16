const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./config/keys").mongoURI;
const appointments = require("./routes/appointments");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.use("/appointments", appointments);

// Handle Production
if (process.env.NODE_ENV === "production") {
  //Setting Static Folder
  app.use(express.static(__dirname + "/public"));

  // Handling Single-page App
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Listening on Port: ${port}`));
