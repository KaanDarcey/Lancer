import React from 'react';
import './stripe.scss';

import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// var style = {
//     base:{
//       fontSize: '16px',
//         color:"#424770",
//         letterSpacing: '0.025em'
//     }
// }

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#e3e1e1',
      color: '#284b63',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {color: '#fce883'},
      '::placeholder': {color: '#e3e1e1'},
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};

//The actual form iteself

function StripeForm({}){
    const stripe = useStripe();
    const elements = useElements();

    const Pay = async (e) =>{
        //communicate with Stripe based on the card info
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
          });

          if(error){
              console.log(error)
          }else{
              console.log("payment", paymentMethod);
              //fetch server to get the clientSecret
              const clientSecret = await fetch("http://localhost:8888/pay.php");

              //user server secret to communicate back to stripe
              const data = stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod  
              });

              if(data.success){
                  //unlock feature!
              }
          }
    };
    return(
        <form className="FormGroup" onSubmit={Pay}>
            <h3>Pay with Credit Card</h3>

            <div className="FormRow">
                  <CardElement options={CARD_OPTIONS} />
                </div>
                    <button type="submit">Pay Transaction</button>
                    </form>
                );
            };

const stripePromise = loadStripe('pk_test_9vaOLwXF1POYSL7StuXKOVkj00eLU17d99');

//wrapping stripe elements to the form
function Wrapper({}){
    return(
        <Elements stripe={stripePromise}>
            <StripeForm/>
        </Elements>
    )
}
Wrapper.defaultProps = {

}

export default Wrapper;
