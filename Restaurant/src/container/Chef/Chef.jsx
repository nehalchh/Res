import React from 'react';
import { images } from "../../constants";
import './Chef.css';

const Chef = () => {
  return(
    <div className='h-screen app__bg text-amber-50'>

      <div>
        <img className='w-[450px] h-[600px]' src={images.chef} alt="chefIMAGE" />
      </div>

      <div>

      </div>

    </div>
  )
}

export default Chef;
