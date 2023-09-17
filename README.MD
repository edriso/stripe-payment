# Stripe Payment Integration

[Stripe Payment Integration](https://stripe.com/docs/payments/quickstart?lang=node) is a straightforward Node.js application sourced from John Smilga's Node.js course. This application demonstrates how to integrate Stripe payments into a web application. It includes server-side and client-side code to handle payments, retrieve the Stripe publishable key, and create payment intents.

### Prerequisites

Before you begin, ensure you have the following prerequisites:

- Node.js and npm installed on your machine.
- (Optional) Git for cloning the repository.

### Getting Started

These instructions will help you set up and run the project on your local machine.

1. Clone the repository (if you haven't already):

   ```bash
   git clone https://github.com/edriso/stripe-payment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd stripe-payment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set `.env` configuration

   - Rename the `.env.example` file to `.env`.

   - Open the `.env` file and set the following environment variables using the information found in your stripe account's developers section:

     ```dotenv
     STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```

     Replace `your_email@example.com` and `your_email_password` with your actual email credentials.

5. Start the application:

   ```bash
   npm start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access the Stripe Payment Integration application.

7. Use the application to simulate payment processing and learn how to integrate Stripe into your projects.

---

**Note**: This project is for educational purposes and should not be used in production without further development and security considerations. Stripe API keys should be handled securely in production environments.
