import React, { useContext, useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CartContext from '../../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import CartApis from '../../_utils/CartApis';

const CheckoutForm = ({amount}) => {
  const {cart,setCart}=useContext(CartContext)
  const {user}=useUser
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const res = await fetch('/api/create-intent', {
      method: 'POST',
      
      body: JSON.stringify({
        amount: amount,
      }),
    });

    const clientSecret = await res.json()

  
    const result = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			clientSecret,
			elements,
			confirmParams: {
				return_url: "http://localhost:3000/payment-confirm",
			},
		});

    if (result.error) {
      console.log(result.error.message);
      setErrorMessage(result.error.message);
    } else {
      // Successful payment or further redirection is handled by Stripe.
    }
  };
const createOrder = async () => {
  try {
    // حذف العناصر من العربة
    await Promise.all(cart.map(async (ele) => {
      await CartApis.deleteCartItem(ele?.id);
    }));

    // إنشاء الطلب بعد حذف العناصر بنجاح
    const productIDs = cart.map((el) => el?.product.id);
    const data = {
      data: {
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        products: productIDs
      }
    };
    const res = await OrderApi.createOrder(data);
    // يمكنك إضافة المزيد من التحكم هنا بناءً على الرد من الطلب
    console.log('Order created successfully:', res);
  } catch (error) {
    console.error('Error creating order:', error);
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <div className='mx-32 md:mx-[320px] mt-20'>
        <PaymentElement />
        <button className='bg-primary w-full p-2 text-white mt-6 h-10 hover:bg-gray-400' disabled={loading}>
          Submit
        </button>
        {errorMessage && <div className='text-red-500 mt-4'>{errorMessage}</div>}
      </div>
    </form>
  );
};

export default CheckoutForm;
