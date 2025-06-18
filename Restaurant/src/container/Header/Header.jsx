import './Header.css';
import { images } from "../../constants";
import { SubHeading } from "../../components";

let Header = () => {
  return(
    <div style={{paddingTop: "5rem", paddingLeft:"7rem"}} className='bg-[#0c0c0c] text-amber-50 w-full h-60'>
      <div id='info' >
        <SubHeading className="heading-sub" title="Chase the flavour"/>
        <h1 style={{paddingTop: "3rem"}} id='heading-h1'>The key to Fine dining</h1>
      </div>
      <div id='image'>

      </div>
    </div>
  )
};

export default Header;