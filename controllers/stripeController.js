const getStripePublishableKey = (req, res) => {
  const stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
  res.json({ stripePublishableKey });
};

const stripe = async (req, res) => {
  res.send('stripe route');
};

module.exports = {
  getStripePublishableKey,
  stripe,
};
