import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

import { Select } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";
import ButtonComp from "../../Components/ButtonComp";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("2");
  let price;
  const {user}=useAuth()
  const axiosSecure=useAxiosSecure()

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    //console.log(selectedOption)
  };

  const handleButton= () => {
    price=0;
    if (price === 0) {
        Swal.fire({
          title: "Are you sure?",
          text: "You will be premium user for 1 min",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, confirm it!",
        }).then((result) => {
          if (result.isConfirmed) {
            const res = axiosSecure.patch(`/users/premium/${user?.email}`);
            console.log(res);
  
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                icon: "success",
                title: `${user?.displayName} is a premium user now`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }
        });
      }
  }

  if(selectedOption==='2'){
    price=100;
  }
  if(selectedOption==='3'){
    price=150;
  }

  return (
    <div>
      <h2 className="text-3xl mb-5 text-center font-semibold">
        Payment Please!
      </h2>
      <div className="flex items-center justify-center"><button onClick={handleButton}><ButtonComp value={"For testing"}></ButtonComp></button></div>

      <form>
        <div className="max-w-md mt-10 mx-auto">
          <Select onBlur={handleChange} id="countries" required>
            <option value="2">$100 / 5days</option>
            <option value="3">$150 / 10days</option>
          </Select>
        </div>
      </form>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm price={price}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
