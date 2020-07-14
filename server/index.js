const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./config/keys").mongoURI;
const appointments = require("./routes/appointments");

const app = express();
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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Listening on Port: ${port}`));
