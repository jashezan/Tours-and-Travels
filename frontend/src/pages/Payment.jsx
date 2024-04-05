import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY)

const Payment = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.error('Error creating payment method:', error);
            setPaymentError(error.message);
            return;
        }

        try {
            const response = await fetch('/api/makePayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: 100, token: paymentMethod.id }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Payment was successful
            // Redirect or show success message
        } catch (error) {
            console.error('Error processing payment:', error);
            setPaymentError('Payment failed. Please try again later.');
        }
    };

    return (
        <Elements stripe={stripePromise}>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
                {paymentError && <div>{paymentError}</div>}
            </form>
        </Elements>
    );
};

export default Payment;
