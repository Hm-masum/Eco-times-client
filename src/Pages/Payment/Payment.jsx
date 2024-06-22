import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

const Payment = () => {
    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm price={5}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;