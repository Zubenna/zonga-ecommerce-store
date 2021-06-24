import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Currency from 'react-currency-formatter';
import { StarIcon } from '@heroicons/react/solid';

const Product = ({id, title, price, description, category, image}) => {
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain" />
        <h4 className="text-xs my-3 line-clamp-1">{title}</h4>
        <div className="flex">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <div className="mb-5">
            <Currency quantity={price} currency="NGN" />
        </div>
        <button className="button">Add to basket</button>
        </div>
    );
};

export default Product;