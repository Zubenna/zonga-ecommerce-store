import React, { useState } from 'react';

const ProductFilter = (props) => {
    const { handleFilter } = props;
    const [show1, setShow1] = useState();
    const [show2, setShow2] = useState();
    const [show3, setShow3] = useState();
    const [show4, setShow4] = useState();
    const [show5, setShow5] = useState();
    const [show6, setShow6] = useState();
    const [show7, setShow7] = useState();
  
    const handleClick = (event) => {
      const value = event.target.innerText;
      handleFilter(value);
      const { id } = event.target;
      if (id === 'all') {
        setShow1(true);
        setShow2(false);
        setShow3(false);
        setShow4(false);
        setShow5(false);
        setShow6(false);
        setShow7(false);
      } else if (id === 'men-c') {
        setShow1(false);
        setShow2(true);
        setShow3(false);
        setShow4(false);
        setShow5(false);
        setShow6(false);
        setShow7(false);
      } else if (id === 'women-c') {
        setShow1(false);
        setShow2(false);
        setShow3(true);
        setShow4(false);
        setShow5(false);
        setShow6(false);
        setShow7(false);
      } else if (id === 'jewelry') {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(true);
        setShow5(false);
        setShow6(false);
        setShow7(false);
      } else if (id === 'electron') {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(false);
        setShow5(true);
        setShow6(false);
        setShow7(false);
      } else if (id === 'phone') {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(false);
        setShow5(false);
        setShow6(true);
        setShow7(false);
      }
      else if (id === 'furnit') {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShow4(false);
        setShow5(false);
        setShow6(false);
        setShow7(true);
      }
    };
    return (
      <div className="ml-4 w-auto">
        <div className="flex flex-col w-auto">
          <h3 className="w-full md:w-40 mt-6 mb-4 text-center">Filter Products by Category</h3>
          <button type="button" className="filterButton h-8" id="all" onClick={handleClick}>All</button>
          <button type="button" className="filterButton h-10" id="men-c" onClick={handleClick}>Men's Clothing</button>
          <button type="button" className="filterButton h-10" id="jewelry" onClick={handleClick}>Jewelery</button>
          <button type="button" className="filterButton h-10" id="electron" onClick={handleClick}>Electronics</button>
          <button type="button" className="filterButton h-10" id="women-c" onClick={handleClick}>Women's Clothing</button>
          <button type="button" className="filterButton h-10" id="phone" onClick={handleClick}>Phones</button>
          <button type="button" className="filterButton h-10" id="furnit" onClick={handleClick}>Furniture</button>
        </div>
      </div>
    );
  };
  
  export default ProductFilter;
