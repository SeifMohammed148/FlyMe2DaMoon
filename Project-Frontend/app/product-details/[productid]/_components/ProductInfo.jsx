'use client';
import { useUser } from '@clerk/nextjs';
import { AlertOctagon, MapPin, BadgeCheck, Calendar } from 'lucide-react'; // Changed to Calendar icon
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import CartApis from '../../../_utils/CartApis'; // No change to the API
import CartContext from '../../../_context/CartContext'; // No change to the context

function TripInfo({ product }) { // `product` remains the same
  const router = useRouter();
  const { user } = useUser();

  const handleAddToCart = () => {
    if (!user) {
      router.push('/sign-in'); // Redirect to sign-in if user is not logged in
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id], // This represents the trip being booked
        },
      };

      CartApis.addToCart(data) // No change to the API call
        .then(res => {
          console.log('Trip Booked Successfully');
          setCart(oldCart => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              product, // This represents the trip booked
            },
          ]);
        })
        .catch(error => {
          console.log('error', error);
        });
    }
  };

  const { cart, setCart } = useContext(CartContext);

  const location = product?.attributes?.category; // Assuming the location is in the `category` attribute

  return (
    <div>
      <h2 className='text-[25px] text-primary font-bold line-clamp-1'>{product?.attributes?.producttitle}</h2>

      {/* Location with MapPin icon, which opens Google Maps when clicked */}
      <h2 className='text-[15px] text-gray-400 flex gap-1'>
        <a 
          href={`https://www.google.com/maps/search/?q=${encodeURIComponent(location)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          <MapPin className='w-4 h-4 text-grey-400' /> 
          {location}
        </a>
      </h2>

      <h2 className='text-[25px] text-primary flex gap-1 mt-1'>{product?.attributes?.productdescription}</h2>


      <div className='mt-10 md:flex md:flex-row items-center'>
        {/* Trip price */}
        <h2 className='text-[25px] text-orange-700 font-bold line-clamp-1 mt-1 hover:text-orange-600 hover:cursor-pointer'>
          ${product?.attributes?.productprice} {/* This is the price for booking */}
        </h2>

        {/* Button to book the trip with Calendar icon */}
        <button
          onClick={handleAddToCart} // The action is still booking a trip, but label is changed
          className="bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2 ml-4"
        >
          <Calendar className="w-6 h-6" /> {/* Changed the icon to Calendar */}
          <span>Book This Trip</span> {/* Changed label */}
        </button>
      </div>
    </div>
  );
}

export default TripInfo;
