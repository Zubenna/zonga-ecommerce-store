import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="relative">
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
        <div className="h-80">
          <Image loading="lazy" src="https://i.imgur.com/UWcagAZ.png"  alt="" layout="fill" className="object-fill"/>
        </div>
        <div className="h-80">
          <Image loading="lazy" src="https://i.imgur.com/CuWmW0P.png"  alt="" layout="fill" className="object-fill"/>
        </div>
        <div className="h-80">
          <Image loading="lazy" src="https://i.imgur.com/5WV5dzc.png"  alt="" layout="fill" className="object-fill"/>
        </div>
        <div className="h-80">
          <Image loading="lazy" src="https://i.imgur.com/qyzjllm.png"  alt="" layout="fill" className="object-fill"/>
        </div>
        </Carousel>  
        </div>
    );
};

export default Banner;