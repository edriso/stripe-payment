const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const getStripePublishableKey = (req, res) => {
  const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
  res.json({ stripePublishableKey });
};

const createPaymentIntent = async (req, res) => {
  const { purchase, total_amount, shipping_fee } = req.body;

  // when it comes with money, you should always check with the backend as we can manipulate in the frontend, so we check about the orders in db and about its prices
  const calculateOrderAmount = (items) => {
    // we won't check in this project as it's for demo about learning how to pay with stripe, but normally we calculate in db
    // price is required to be in cents for stripe; so total_amount = 10.998$ not 10998$
    return total_amount + shipping_fee;
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(purchase),
    currency: 'usd',
  });

  res.json({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = {
  getStripePublishableKey,
  createPaymentIntent,
};
