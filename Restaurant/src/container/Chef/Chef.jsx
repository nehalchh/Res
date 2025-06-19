import React from 'react';
import { images } from "../../constants";
import { SubHeading } from "../../components";

import './Chef.css';

const Chef = () => {
  return (
    <div className="min-h-screen app__bg text-amber-50 px-6 sm:px-10 lg:px-28 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-36">
      
      {/* IMAGE */}
      <div className="w-full max-w-[500px]">
        <img className="w-full h-auto" src={images.chef} alt="chefIMAGE" />
      </div>

      {/* TEXT SECTION */}
      <div className="w-full max-w-3xl">
        <SubHeading className="subh1 text-2xl" title="Chef's Word" />
        <h1 className="hh1 text-4xl sm:text-5xl lg:text-6xl mt-6 text-[#DCCA87]">What we believe in</h1>
        
        <p className="font-serif text-[16px] sm:text-[18px] mt-10 leading-relaxed">
          Cooking is my passion, and Gericht is my canvas. I believe in crafting dishes that not only satisfy your hunger but also tell a story. Our team uses the freshest ingredients and combines them with creativity and love to create unforgettable dining experiences. Come, be a part of our journey and let us share our story with you, one dish at a time.
        </p>

        <p className="subh1 mt-10 text-[#DCCA87] text-[18px]">Kevin Luo</p>
        <p className="font-serif">Chef & Founder</p>

        <img className="h-[80px] mt-6" src={images.sign} alt="sign" />
      </div>

    </div>
  );
};

export default Chef;
