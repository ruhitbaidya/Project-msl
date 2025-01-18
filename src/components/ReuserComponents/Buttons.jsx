import { FaLongArrowAltRight } from "react-icons/fa";
import "./alls.css";

// eslint-disable-next-line react/prop-types
const Buttons = ({ text }) => {
  return (
    <div className="flex justify-start items-center">
      <button className="bg-[#FF8D28] primBtn text-white text-[16px] md:text-[18px] flex justify-between items-center gap-[10px] md:gap-[20px] py-[12px] md:py-[15px] px-[20px] md:px-[30px] rounded-lg hover:bg-[#FF9E40] transition duration-300 ease-in-out">
        <span>{text}</span>
        <FaLongArrowAltRight />
      </button>
    </div>
  );
};

export default Buttons;
