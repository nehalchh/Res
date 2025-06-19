import './SpecialMenu.css';
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => {
  return (
    <div id="menu" className="bg-[#0c0c0c] text-amber-50 py-10 px-4 sm:px-8 md:px-12 lg:px-20">
      
      {/* Header */}
      <div className="flex flex-col text-center items-center">
        <SubHeading className="subh1 text-[18px] sm:text-[20px]" title="Menu that fits your palette" />
        <h1 className="hh1 text-4xl sm:text-5xl lg:text-6xl text-[#DCCA87] mt-4">Today's Special</h1>
      </div>

      {/* Menu Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-12">
        
        {/* Wine & Beer */}
        <div className="flex flex-col items-center lg:items-end">
          <h1 className="hh2 text-3xl sm:text-4xl lg:text-5xl mb-6">Wine & Beer</h1>
          <div className="flex flex-col gap-6">
            {data.wines.map((items, index) => (
              <MenuItem key={index} items={items} />
            ))}
          </div>
        </div>

        {/* Center Image */}
        <div className="my-12 lg:my-0">
          <img className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-contain" src={images.menu} alt="menu" />
        </div>

        {/* Cocktails */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="hh2 text-3xl sm:text-4xl lg:text-5xl mb-6">Cocktails</h1>
          <div className="flex flex-col gap-6">
            {data.cocktails.map((items, index) => (
              <MenuItem key={index} items={items} />
            ))}
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center items-center mt-12">
        <button className="bg-[#eae2c6] text-black rounded-md px-6 py-2 border border-[#DCCA87] font-serif hover:bg-[#dcca87] transition">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
