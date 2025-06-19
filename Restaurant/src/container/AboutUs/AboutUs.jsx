import './AboutUs.css';
import { images } from "../../constants";

const AboutUs = () => (
  <div id="about" className="relative w-full app__bg text-white px-8 py-20 lg:px-32 overflow-hidden">
    
    {/* Background Letter G */}
    <div className="absolute inset-0 flex justify-center items-center z-0">
      <img src={images.G} alt="Letter G" className="w-[400px] h-auto" />
    </div>

    {/* Foreground content */}
    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-20">
      
      {/* Left block */}
      <div className="text-center lg:text-left max-w-lg flex flex-col items-center lg:items-start">
        <h1 id='abt' className="text-[#DCCA87] text-6xl mb-4">About Us</h1>
        <p className="text-gray-300 mb-6 font-serif text-lg">
          At Gericht, we are committed to making every dining experience special. Our chefs and friendly staff work together to create an inviting atmosphere. Each dish is crafted with love, reflecting our dedication to culinary excellence and making your visit memorable.
        </p>
        <button className='bg-[#eae2c6] rounded-md text-black h-10 w-30 border-[#DCCA87] font-serif cursor-pointer'>Know More</button>
      </div>

      {/* Knife Image */}
      <div className="hidden lg:flex justify-center">
        <img src={images.knife} alt="Knife" className="h-[900px]" />
      </div>

      {/* Right block */}
      <div className="text-center lg:text-right max-w-lg flex flex-col items-center lg:items-end">
        <h1 id='hist' className="text-[#DCCA87] text-6xl mb-4">Our History</h1>
        <p className="text-gray-300 mb-6 font-serif text-lg">
          Since 1990, Gericht has been a cherished culinary spot in Santa Monica. Our mission: bringing people together with the joy of good food. From humble beginnings to becoming a renowned restaurant, we are proud of our rich history and community.
        </p>
        <button className='bg-[#eae2c6] rounded-md text-black h-10 w-30 border-[#DCCA87] font-serif cursor-pointer'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;