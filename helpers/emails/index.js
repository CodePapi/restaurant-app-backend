const signupMail = (name) => {
  return (
    `<b>Hello ${name}</b> <br><br>` +
    "<p>Thank you for registering</p>" +
    "<p>This is just a quick email from <b>Foodie Restaurant</b> to say we acknowledge your registration</p>" +
    "<p>You can now login to start enjoying our services</p>" +
    "<br><hr><p><b>Stay Safe</b> <br>Foodie Restaurants App</p>"
  );
};

const bookedEmailUser = (booking) => {
  return (
    `<b>Hi</b> ${booking.bookedBy.name}<br><br>` +
    `<p>You Booked ${booking.restaurantData.cuisine} in ${booking.restaurantData.Name} at located which is ${booking.restaurantData.location}</p>` +
    "<p>Thanks For your patronage</p>" +
    "<br><hr><p><b>Stay Safe</b> <br>Foodie Restaurants App</p>"
  );
};

const bookedEmailOwner = (booking) => {
  return (
    `<b>Hi</b> <br><br>` +
    `<p>Your  restaurant ${booking.restaurantData.Name} was booked by ${
      booking.bookedBy.name
    } ${booking.bookedBy.email} at  ${new Date(booking.createdAt)}</p>` +
    "<p>Thanks</p>" +
    "<br><hr><p><b>Stay Safe</b> <br>Foodie Restaurants App</p>"
  );
};

module.exports = { signupMail, bookedEmailOwner, bookedEmailUser };
