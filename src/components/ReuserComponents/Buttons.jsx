import { FaLongArrowAltRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Buttons = ({ text }) => {
  return (
    <div className="flex justify-start items-center mt-[20px] lg:mt-[0px]">
      <button className="bg-[#FF8D28] text-white text-[16px] md:text-[18px] flex justify-between items-center gap-[10px] md:gap-[20px] py-[5px] lg:py-[12px] md:py-[15px] px-[10px] lg:px-[20px] md:px-[30px] rounded-lg hover:bg-[#FF9E40] transition duration-300 ease-in-out">
        <span>{text}</span>
        <FaLongArrowAltRight />
      </button>
    </div>
  );
};

export default Buttons;
