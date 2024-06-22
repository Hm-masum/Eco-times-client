import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckOutForm.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import ButtonComp from "../../Components/ButtonComp";
import Swal from "sweetalert2";

const CheckOutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [transactionId,setTransactionId]= useState('')
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(()=>{
    if(price>0){
      axiosSecure.post('/create-payment-intent',{price:price})
      .then(res => {
        console.log(res.data)
        setClientSecret(res.data.clientSecret)
      })
    }
 },[axiosSecure,price])

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id)
      console.log(paymentIntent);
     

      // 1. Create payment info object
      const paymentInfo = {
        name: user?.displayName,
        email: user?.email,
        transactionId: paymentIntent.id,
        paymentPrice: price,
        date: new Date(),
      };

      console.log(paymentInfo);

      try {
        const res=await axiosSecure.patch(`/users/premium/${user?.email}`)
        console.log(res)

        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: `${user.displayName} is a premium user now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }

      } catch (err) {
        console.log(err);
      }
    }

    setProcessing(false);
  };

  return (
    <div className="my-12 ">
      <h2 className="text-3xl mb-8 text-center font-semibold">
        Payment Please!
      </h2>

      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button disabled={!stripe || !clientSecret || processing} type="submit">
          <ButtonComp value={"payment"}></ButtonComp>
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-600">Your Transaction id:{transactionId}</p>}
    </div>
  );
};

export default CheckOutForm;
