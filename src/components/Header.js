import React from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';

const Header = () => {
    return (
        <header>
            <div className="flex items-center bg-zonga_pink flex-grow">
              <div className="flex items-center flex-grow sm:flex-grow-0">
              <Image
                src="https://i.imgur.com/pVVKvUl.png"
                width={100}
                height={50}
                objectFit="contain"
                className="cursor-pointer"

                alt=""
              />
              </div>
              <div className="hidden sm:flex items-center h-8 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"  type="text" />
                <SearchIcon className="h-12 p-4" />
              </div>
              <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div className="cursor-pointer">
                <div className="flex">
                <QuestionMarkCircleIcon className="h-8 w-8 p-1"/>
                   <select className="outline-none bg-white text-black px-2 text-sm">
                   <option selected>Help</option>
                   <option>FAQ's</option>
                   <option>Contact Us</option>
                   <option>Track My Order</option>
                   </select>
                </div>
                </div>
                <div className="link">
                  <p>Hello Andy Brown</p>
                  <p className="font-extrabold md:text-sm">Login/Signup</p>
                </div>
                <div className="relative link flex items-center">
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                 <ShoppingCartIcon className="h-10" />
                 <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-2 pl-6 bg-zonga_pink-light text-white text-sm">
              <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1"/>
                All</p>
              <p className="link">Prime Video</p>
              <p className="link">Zonga Business</p>
              <p className="link">Today's Deals</p>
              <p className="link hidden lg:inline-flex">Electronics</p>
              <p className="link hidden lg:inline-flex">Food & Grocery</p>
              <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    );
};

export default Header;