import users from "../../assets/othersUsers.png";
import { FaStar } from "react-icons/fa";
const OthersReview = () => {
  return (
    <div>
      <div>
        <h2 className="text-[18px] text-[#515151] mb-[18px]">
          Customer Review
        </h2>
        <div className="flex justify-between mb-[14px]">
          <div className="flex gap-[20px] items-center">
            <img src={users} alt="" />
            <div>
              <h5>Allie Grater</h5>
              <div className="flex gap-[6px] text-[#FDCC0D]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div>
            <span className="text-[12px] text-[#A7A7A7]">03 May 2021</span>
          </div>
        </div>
        <div>
          <p className="text-[14px] text-[#1E1E1E80]">
            I bought the overseeding soil. Spent almost $180 on soil. This is so
            disappointing. Instead of making my lawn more healthy, it is
            completely ruined. Very unhappy customer.
          </p>
          <p className="text-[12px] text-[#181818] my-[16px]">Report</p>
        </div>
      </div>
    </div>
  );
};

export default OthersReview;
