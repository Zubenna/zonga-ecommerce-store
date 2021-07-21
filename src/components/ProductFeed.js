import React from 'react';
import Product from '../components/Product';
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../redux/Shopping/shopping-actions";
import ProductFilter from "./ProductFilter";

const ProductFeed = ({ products }) => {
  const filter = useSelector((state) => state.filter);
  // const AllProducts = useSelector((state) => state.shop.products)
  const dispatch = useDispatch();

  const handleFilter = (item) => {
    dispatch(filterProducts(item));
  };

  const filteredProducts = () => {
    if (filter === 'All') return products;
    return products.filter((product) => product.category === filter);
  };
    return (
      <div className="flex flex-col md:flex-row">
        <ProductFilter handleFilter={handleFilter} />
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {filteredProducts().map(({id, title, price, description, category, rating, image}) => (
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
      </div>
    );
};

export default ProductFeed;