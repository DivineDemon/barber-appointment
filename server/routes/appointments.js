const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// GET /appointments
// Get All Appointments
// Public Access

router.get("/", (req, res) => {
  Appointment.find()
    .sort({ appointmentdate: -1 })
    .then((appointments) => res.json(appointments));
});

module.exports = router;
