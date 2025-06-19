import './MenuItem.css';
import { GoDash } from "react-icons/go";

const MenuItem = ({ items }) => (
  <div className="mb-6">
    
    <div className="flex justify-between items-center w-full gap-2">
      <p className="text-[#DCCA87] font-serif text-[22px]">{items.title}</p>
      
      <div className="flex items-center gap-2">
        <GoDash className="text-[#DCCA87] w-10" />
        <p className="text-white  font-serif text-[22px]">{items.price}</p>
      </div>
    </div>

    
    <p className="text-gray-400 text-sm mt-1">{items.tags}</p>
  </div>
);

export default MenuItem;
