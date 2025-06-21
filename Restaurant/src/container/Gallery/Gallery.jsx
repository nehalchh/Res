import React from 'react';
import { BsInstagram , BsArrowLeftShort , BsArrowRightShort } from "react-icons/bs";

import {SubHeading} from "../../components";
import {images} from "../../constants";

import './Gallery.css';

const Gallery = () => {

  let scrollRef = React.useRef(null);

  let scroll = (direction) => {
    let { current } = scrollRef;
    if (direction === "left") {
      current.scroll -= 300;
    }
    else{
      current.scroll += 300;
    }
  }

  let imgs = [images.gallery01 , images.gallery02 , images.gallery03 , images.gallery04];

  return(
  <div className='bg-[#0c0c0c] text-amber-50 h-screen flex justify-between pt-40 pl-28'>
    <div>
      <SubHeading className='subh1 text-3xl' title="Instagram"/>
      <h1 className='hh1 text-5xl pt-8'>Photo Gallery</h1>
      <p className='font-serif pt-20'>Explore our culinary creations and vibrant dining experiences.</p>
      <p className='font-serif'>Follow us on Instagram for more delicious moments.</p>
      <button className="bg-[#eae2c6] text-black rounded-md px-6 py-2 border border-[#DCCA87] font-serif hover:bg-[#dcca87] transition cursor-pointer mt-5">View More</button>
    </div>

    <div>
      <div ref={scrollRef} className='flex'>
        {imgs.map((items) => (
          <div>
            <img src={items} alt="Gallery images" />
            <BsInstagram />
          </div>
        ))}
      </div>
      <div>
        <BsArrowLeftShort onClick={() => scroll('left')} />
        <BsArrowRightShort onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
  );
}

export default Gallery;
