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

// POST /appointments
// Book an Appointment
// Public Access

router.post("/", (req, res) => {
  const newAppointment = new Appointment({
    name: req.body.name,
    phone: req.body.phone,
    appointmentdate: req.body.appointmentdate,
  });

  newAppointment.save().then((appointment) => res.json(appointment));
});

// Delete /appointments
// Delete the Appointment
// Public Access

router.delete("/:id", (req, res) => {
  Appointment.findById(req.params.id)
    .then((appointment) =>
      appointment.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
