import './Header.css';
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="bg-[#0c0c0c] text-amber-50 w-full min-h-screen px-6 py-24 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[130px] overflow-x-hidden">
      
      {/* LEFT TEXT BLOCK */}
      <div id="info" className="max-w-lg">
        <SubHeading className="heading-sub text-2xl sm:text-3xl" title="Chase the flavour" />

        <h1 id='heading-h11' className="text-5xl sm:text-6xl md:text-7xl tracking-wide text-[#DCCA87] mt-12">
          THE KEY TO
        </h1>
        <h1 id='heading-h1' className="text-5xl sm:text-6xl md:text-7xl tracking-wide text-[#DCCA87] mt-4">
          FINE DINING
        </h1>

        <p className="text-[16px] leading-7 mt-8 mb-6">
          Welcome to Gericht, where our passion for cooking shines in every dish. Our chefs pour their heart and soul into creating meals that tell a story. Using only the finest ingredients, we aim to delight your taste buds and warm your heart. Join us for a dining experience that's personal, memorable, and crafted just for you.
        </p>

        <button
          className="bg-[#eae2c6] text-black rounded-md px-6 py-2 border border-[#DCCA87] font-serif hover:bg-[#dcca87] transition cursor-pointer"
        >
          Explore Menu
        </button>
      </div>

      {/* RIGHT IMAGE BLOCK */}
      <div id="image" className="w-full max-w-[400px]">
        <img
          className="w-full h-auto object-contain"
          src={images.welcome}
          alt="welcome"
        />
      </div>
    </div>
  );
};

export default Header;