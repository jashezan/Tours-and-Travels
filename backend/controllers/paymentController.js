const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// app.use(bodyParser.json());

// // Route to handle payment processing
// app.post('/process-payment', async (req, res) => {
//   try {
//     const { paymentMethodId, amount, currency } = req.body;

//     // Create a payment intent
//     const paymentIntent = await stripe.paymentIntents.create({
//       payment_method: paymentMethodId,
//       amount,
//       currency,
//       confirm: true, // Confirm the payment immediately
//     });

//     // If payment is successful
//     res.status(200).json({ success: true, message: 'Payment successful' });
//   } catch (error) {
//     // If payment fails
//     console.error('Error processing payment:', error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
