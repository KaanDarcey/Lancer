import React from 'react';
import './stripe.scss';
import Button from '../Button';

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
      fontSize: '11pt',
      fontSmoothing: 'antialiased',
    },
    invalid: {
      iconColor: '#dc3545',
      color: '#dc3545',
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
            billing_details: {
              name: document.getElementById('billingName').value,
              address:{
                country: document.getElementById('country').value
              }
            },
          });

          if(error){
              console.log(error)
          }else{
              console.log("payment", paymentMethod);

              document.querySelector('.result').style.display = 'flex';

              var result = JSON.stringify(paymentMethod, null, 2);

              document.querySelector("pre").textContent = result;
              document.querySelector('.FormGroup').style.display='none';

              //fetch server to get the clientSecret
              const clientSecret = await fetch("http://localhost:8888/pay.php");

              //user server secret to communicate back to stripe
              const data = stripe.confirmCardPayment(clientSecret, {
              // const data = await stripe.confirmCardPayment('{CLIENT_SECRET}', {
                payment_method: paymentMethod
              });

              if(data.success){
                  //unlock feature!
                  
              }
          }
    };
    return(
      <div>
        <form className="FormGroup" onSubmit={Pay}>
          <h3>Payment Method</h3>
          <div className="FormRow">
            <input type="text" placeholder='Name' id="billingName" className="StripeElement" required/>
          </div>
          <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
          </div>
          <div className="FormRow">
           <select id="country" className="StripeElement">
            <option selected value="CA">Canada</option>
            <option value="US">United States</option>
          </select>
          </div>
          <button className="submitBtn" type="submit">Upgrade</button>
        </form>
        <div className="result">
        <h3>Payment Completed</h3>
        <pre className="payment-result"></pre>
        </div>        
</div>
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
