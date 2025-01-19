import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ReviewBar = () => {
  return (
    <div>
      <div>
        <h3 className="text-[18px] text-[#515151] mb-[22px]">
          Reviews Summary
        </h3>
        <div className="grid grid-cols-7 items-center">
          <div className="col-span-5 space-y-[10px]">
            <div className="flex items-center gap-[10px]">
              <span className="text-[12px] text-[#A7A7A7]">05</span>
              <progress
                className="progress bg-[#DDDDDD] [&::-webkit-progress-bar]:bg-[#DDDDDD] [&::-webkit-progress-value]:bg-[#FDCC0D] [&::-moz-progress-bar]:bg-[#FDCC0D]"
                value="10"
                max="100"
              ></progress>
            </div>
            <div className="flex items-center gap-[10px]">
              <span className="text-[12px] text-[#A7A7A7]">04</span>
              <progress
                className="progress bg-[#DDDDDD] [&::-webkit-progress-bar]:bg-[#DDDDDD] [&::-webkit-progress-value]:bg-[#FDCC0D] [&::-moz-progress-bar]:bg-[#FDCC0D]"
                value="40"
                max="100"
              ></progress>
            </div>
            <div className="flex items-center gap-[10px]">
              <span className="text-[12px] text-[#A7A7A7]">03</span>
              <progress
                className="progress bg-[#DDDDDD] [&::-webkit-progress-bar]:bg-[#DDDDDD] [&::-webkit-progress-value]:bg-[#FDCC0D] [&::-moz-progress-bar]:bg-[#FDCC0D]"
                value="10"
                max="100"
              ></progress>
            </div>
            <div className="flex items-center gap-[10px]">
              <span className="text-[12px] text-[#A7A7A7]">02</span>
              <progress
                className="progress bg-[#DDDDDD] [&::-webkit-progress-bar]:bg-[#DDDDDD] [&::-webkit-progress-value]:bg-[#FDCC0D] [&::-moz-progress-bar]:bg-[#FDCC0D]"
                value="70"
                max="100"
              ></progress>
            </div>
            <div className="flex items-center gap-[15px]">
              <span className="text-[12px] text-[#A7A7A7]">01</span>
              <progress
                className="progress bg-[#DDDDDD] [&::-webkit-progress-bar]:bg-[#DDDDDD] [&::-webkit-progress-value]:bg-[#FDCC0D] [&::-moz-progress-bar]:bg-[#FDCC0D]"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="col-span-2 text-center">
            <h4 className="text-[36px] text-[#FF8D28] font-[500]">4.0</h4>
            <div>
              <div className="flex justify-center items-center text-[#FDCC0D] my-[14px]">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaRegStarHalfStroke />
                </span>
              </div>
              <div>
                <span className="text-[12px] font-[400] text-[#A7A7A7]">
                  21 Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBar;
