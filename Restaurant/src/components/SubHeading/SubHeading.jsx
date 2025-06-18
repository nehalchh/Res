import { images } from "../../constants";

const SubHeading = ({ title, className = "" }) => {
  return (
    <div>
      <p className={className}>{title}</p>
      <img src={images.spoon} alt="spoon" />
    </div>
  );
};

export default SubHeading;
