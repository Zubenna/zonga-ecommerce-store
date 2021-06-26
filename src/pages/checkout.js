import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/client';
import Currency from 'react-currency-formatter';

import CheckoutProduct from '../components/CheckoutProduct';

const Checkout = () => {
    const items = useSelector((state) => state.shop);
    const [session] = useSession();
    const total = items.reduce((total, item) => total + item.price, 0);
    
    return (
        <div className="bg-red-50">
        <Header />
        <main className="lg:flex max-w-screen-2xl mx-auto">
            <div className="flex-grow m-5 shadow-sm">
                <Image
                  src="https://i.imgur.com/Snfy61T.jpg"
                  width={1020}
                  height={250}
                  objectFit="contain"
                />
                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-3xl border-b pb-4">{items.length === 0
                    ? "Your Shopping Basket is empty."
                    : "Shopping Basket"}
                    </h1>
                    {items.map((item, i) => (
                      <CheckoutProduct
                        key= {i}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                      />
                    ))}
                </div>
            </div>
            <div className="flex flex-col bg-white p-10 shadow-md">
                {items.length > 0 && (
                 <>
                   <h2 className="whitespace-nowrap">
                       Subtotal ({items.length} items):
                       <span className="font-bold">
                           <Currency quantity={total} currency="NGN" />
                       </span>
                   </h2>
                   <button
                   disabled={!session} 
                   className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                     {!session ? "Sign in to checkout" : "Proceed to checkout"}
                   </button>
                 </>

                )}
            </div>
        </main>
            
        </div>
    );
};

export default Checkout;
