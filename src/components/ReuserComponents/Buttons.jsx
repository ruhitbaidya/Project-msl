import { FaLongArrowAltRight } from "react-icons/fa";
import "./alls.css";
// eslint-disable-next-line react/prop-types
const Buttons = ({ text }) => {
  return (
    <div>
      <button className="bg-[#FF8D28] primBtn  text-[18px] flex justify-between items-center gap-[20px] py-[15px] px-[30px] rounded-lg">
        <span>{text}</span> <FaLongArrowAltRight />
      </button>
    </div>
  );
};

export default Buttons;
