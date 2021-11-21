const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
      userId:{type:Number},
    bookedBy: {
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    restaurantData: {
      Name: { type: String },
      location: { type: String },
      cuisine: { type: String },
      id: { type: Number },
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = { Booking };
