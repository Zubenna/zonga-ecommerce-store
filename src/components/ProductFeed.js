import React from 'react';
import Product from '../components/Product';

const ProductFeed = ({ products }) => {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {products.map(({id, title, price, description, category, rating, image}) => (
              <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                rating={rating}
              />
          ))} 
        </div>
    );
};

export default ProductFeed;