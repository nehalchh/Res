import './Header.css';
import { images } from "../../constants";
import { SubHeading } from "../../components";

let Header = () => {
  return(
    <>
    <div style={{paddingTop: "5rem", paddingLeft:"7rem"}} className='bg-[#0c0c0c] text-amber-50 w-full h-screen flex gap-[130px]'>
      <div id='info' >

        <SubHeading className="heading-sub text-3xl" title="Chase the flavour"/>

        <h1
        style={{paddingTop: "3rem"}}
        id='heading-h1'
        className='text-8xl tracking-wide text-[#DCCA87]'
        >THE KEY TO</h1>
        <h1
        style={{paddingTop: "1rem"}}
        id='heading-h11'
        className='text-8xl tracking-wide text-[#DCCA87]'
        >FINE DINING</h1>

        <br />

        <p className='w-[600px] text-[17px] leading-[25px]'>
          Welcome to Gericht, where our passion for cooking shines in every dish. Our chefs pour their heart and soul into creating meals that tell a story. Using only the finest ingredients, we aim to delight your taste buds and warm your heart. Join us for a dining experience that's personal, memorable, and crafted just for you.
        </p>
        <br />
        <br />

        <button
          className='bg-[#eae2c6] rounded-md text-black h-10 w-30 border-[#DCCA87] font-serif'
          onClick={() => {}}
        >Explore Menu
        </button>
      </div>

      
      <div  id='image'>
        <img
        className='h-[560px] w-[500px]' src={images.welcome} alt="welcome" />
      </div>
    </div>
    </>
  )
};

export default Header;