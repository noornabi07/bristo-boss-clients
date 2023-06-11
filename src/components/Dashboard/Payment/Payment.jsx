import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import UseCart from '../../../hook/UseCart';

const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_pk);

const Payment = () => {
    const [cart] = UseCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle subheading="Please Provide" heading="Payment"></SectionTitle>
            <h2 className='text-3xl'>Payment History Page Here...</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;