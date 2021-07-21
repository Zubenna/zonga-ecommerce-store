import React from 'react';

const ProductFilter = (props) => {
    const { handleFilter } = props; 
    const handleClick = (event) => {
      const value = event.target.innerText;
      handleFilter(value);
    };

    return (
      <div className="ml-4 w-auto">
        <div className="flex flex-col w-auto">
          <h3 className="w-full md:w-40 mt-6 mb-4 text-center">Filter Products by Category</h3>
          <button type="button" className="filterButton h-8" id="all" onClick={handleClick}>All</button>
          <button type="button" className="filterButton h-10" id="men-c" onClick={handleClick}>Men&apos;s Clothing</button>
          <button type="button" className="filterButton h-10" id="jewelry" onClick={handleClick}>Jewelery</button>
          <button type="button" className="filterButton h-10" id="electron" onClick={handleClick}>Electronics</button>
          <button type="button" className="filterButton h-10" id="women-c" onClick={handleClick}>Women&apos;s Clothing</button>
          <button type="button" className="filterButton h-10" id="phone" onClick={handleClick}>Phones</button>
          <button type="button" className="filterButton h-10" id="furnit" onClick={handleClick}>Furniture</button>
        </div>
      </div>
    );
  };
  
  export default ProductFilter;
