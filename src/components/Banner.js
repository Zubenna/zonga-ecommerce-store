import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className="relative">
        {/* <div className="absolute h-10 w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" /> */}
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        >
        <div className="">
          <img loading="lazy" src="https://i.imgur.com/UWcagAZ.png"  alt="" className="h-80 object-fill"/>
        </div>
        <div>
          <img loading="lazy" src="https://i.imgur.com/CuWmW0P.png"  alt="" className="h-80 object-fill"/>
        </div>
        <div>
          <img loading="lazy" src="https://i.imgur.com/5WV5dzc.png"  alt="" className="h-80 object-fill"/>
        </div>
        <div>
          <img loading="lazy" src="https://i.imgur.com/qyzjllm.png"  alt="" className="h-80 object-fill"/>
        </div>
        </Carousel>  
        </div>
    );
};

export default Banner;