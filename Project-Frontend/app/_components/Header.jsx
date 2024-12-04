'use client';
import { UserButton, useUser } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import { Plane } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../_context/CartContext';
import CartApis from '../_utils/CartApis';
import Cart from './Cart';

function Header() {
  console.log('href', window.location.href); //test
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();

  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes('sign-in'));
  }, []);

  useEffect(() => {
    if (user) {
      getCartItems();
    }
  }, [user]);

  const getCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress)
      .then(res => {
        console.log('Response from cart item', res?.data?.data);
        res?.data?.data.forEach(citem => {
          setCart(oldCart => [
            ...oldCart,
            {
              id: citem.id,
              product: citem.attributes?.products?.data[0],
            },
          ]);
        });
      })
      .catch(error => {
        console.log('Error fetching cart items', error);
      });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
	const [openCart, setOpenCart] = useState(false)
  return !isLoggedIn && (
    <header className="sticky top-0 bg-slate-50 shadow-md z-100">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <svg
            id="logo-39"
            width="50"
            height="40"
            viewBox="0 0 50 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z"
              fill="#A5B4FC"
              className="ccompli2"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z"
              fill="#4F46E5"
              className="ccustom"
            ></path>
            <path
              d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z"
              fill="#A5B4FC"
              className="ccompli2"
              fillOpacity="0.3"
            ></path>
          </svg>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className={`md:block ${menuOpen ? 'block' : 'hidden'} md:flex`}>
            <ul className="flex flex-col md:flex-row items-center gap-6 text-sm md:gap-6  bg-slate-50 md:bg-transparent md:p-0 p-4 absolute md:static top-16 right-0 w-full md:w-auto shadow-md md:shadow-none z-50">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/aboutus">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700">{user.firstName}</span>
                <div className='flex items-center gap-10'>
                  <UserButton afterSignOutUrl='/' />
                  {openCart && <Cart />}
                  <h2 className='flex items-center gap-3 hover:cursor-pointer'>
                    <Plane onClick={()=>setOpenCart(!openCart)}/> 
                    ({cart?.length})
                  </h2>
                </div>
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium bg-primary text-white transition hover:bg-white hover:text-primary"
                  href="/sign-in"
                >
                  Login
                </a>
                <a
                  className="hidden rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium bg-primary text-white transition hover:bg-white hover:text-primary sm:block"
                  href="/sign-up"
                >
                  Register
                </a>
              </div>
            )}

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
