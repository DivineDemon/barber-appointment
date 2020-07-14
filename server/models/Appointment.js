const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  appointmentdate: {
    type: Date,
    required: true,
  },
  issuedate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Appointment = mongoose.model("appointment", AppointmentSchema);
