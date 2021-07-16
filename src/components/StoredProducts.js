import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/router";

const StoredProducts = ({ id, title, price, description, category, quantity, rating, image }) => {
  const router = useRouter();
    return (
    <table className="m-auto">
      <tr>
        <td>{<Image src={image} height={100} width={100} alt={title} objectFit="contain" />}</td>
        <td className="w-40 p-2">{title}</td>
        <td className="w-80">{description}</td>
        <td className="w-40">{category}</td>
        <td className="w-20">{quantity}</td>
        <td className="w-20">{price}</td>
        <td className="w-20">{rating}</td>
        <td className="w-20"> 
        <Link href={`${process.env.HOST}/${id}`}>
        <button className="button mr-3">
         View
        </button>
        </Link>
        </td>
        <td className="w-20">
        <Link href={`${process.env.HOST}/${id}/edit`}>
        <button className="button mr-3">
         Edit
        </button>
        </Link>
        </td>
      </tr>
    </table>
  );
};

export default StoredProducts;
