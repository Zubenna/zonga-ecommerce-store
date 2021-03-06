import React from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/Shopping/shopping-actions";

const Product = ({ id, title, price, description, category, rating, image }) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute left-2 top-2 text-xs italic text-gray-600">
        {category}
      </p>
      <Image src={image} height={200} width={200} alt="" objectFit="contain" />
      <h4 className="text-xs my-3 line-clamp-1">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="NGN" />
      </div>
      <button onClick={addItemToBasket} className="button">
        Add to basket
      </button>
    </div>
  );
};

export default Product;
