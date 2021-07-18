import React from 'react';
import StoredProducts from '../components/StoredProducts';
import { Button } from "semantic-ui-react";
import { useRouter } from 'next/router';

const AdminFeed = ({ products }) => {
  const router = useRouter();
    return (
        <div>
        <h1 className="text-gray-800 text-center pt-4 mb-4 font-bold">ADMIN MANAGEMENT PAGE</h1>
        <div className="flex mb-6 justify-center">
          <h3 className="mr-16 font-bold">Picture</h3>
          <h3 className="mr-24 font-bold">Ttile</h3>
          <h3 className="mr-52 font-bold">Description</h3>
          <h3 className="mr-12 font-bold">Category</h3>
          <h3 className="mr-12 font-bold">Quantity</h3>
          <h3 className="mr-8 font-bold">Price</h3>
          <h3 className="mr-10 font-bold">Rating</h3>
          <Button onClick={() => router.push("/newproduct")}>Add new product</Button>
        </div>
          {products.map(({id, title, price, description, category, quantity, rating, image}) => (
              <StoredProducts
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                rating={rating}
                quantity={quantity}
                image={image}
              />
          ))} 
        </div>
    );
};

export default AdminFeed;