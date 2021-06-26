import React from 'react';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../redux/Shopping/shopping-actions';

const CheckoutProduct = ({id, title, price, description, category, image}) => {
    const dispatch = useDispatch();
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const addItemToBasket = () => {
      const product = {
        id, title, price, description, category, image,   
      }
      dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        const product = {
            id, title, price, description, category, image,   
          }
      dispatch(removeFromBasket(product))
    }

    return (
        <div className="grid grid-cols-5">
           <Image src={image} height={200} width={200} objectFit="contain" /> 
           <div className="col-span-3 mx-5">
               <p>{title}</p>
               <div className="flex">
               {Array(rating)
                .fill()
                .map((_, i) => (
                 <StarIcon key={i} className="h-5 text-yellow-500" />
                 ))}
               </div>
               <p className="text-xs my-2 line-clamp-3">{description}</p>
               <Currency quantity={price} currency="NGN" />
           </div>
           <div className="flex flex-col space-y-2 my-auto justify-self-end">
             <button onClick={addItemToBasket} className="button">Add to Basket</button>
             <button onClick={removeItemFromBasket} className="button">Remove From Basket</button>
           </div>
        </div>
    );
};

export default CheckoutProduct;