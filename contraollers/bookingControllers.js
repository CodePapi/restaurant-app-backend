const { Booking } = require("../models/bookingModels");

//helpers
const {
  bookedEmailOwner,
  bookedEmailUser,
} = require("../helpers/emails/index");
const { confirmationText } = require("../helpers/nodeMailer/index");


const BookRestaurant = async (req, res) => {
  const { bookedBy, restaurantData } = req.body;

  const userId = 1;
  const booking = new Booking({
    bookedBy,
    restaurantData,
    userId,
  });
  const createBooking = await booking.save();
  if (createBooking) {
    confirmationText(
      "oshiesam@gmail.com",
      "Booking Confirmation",
      bookedEmailOwner(createBooking)
    );
    confirmationText(
      createBooking.bookedBy.email,
      "Booking Confirmation",
      bookedEmailUser(createBooking)
    );
    res.status(201).json(createBooking);
  } else {
    throw Error;
  }
};

const GetMyBookings = async (req, res) => {
  // const {id}=req.user
  const id = 2;
  const myBooked = await Booking.find({ userId: id });

  if (myBooked) {
    res.status(201).json(myBooked);
  } else {
    throw Error;
  }
};
module.exports = { BookRestaurant, GetMyBookings };
