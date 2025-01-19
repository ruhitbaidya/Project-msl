import image1 from "../../assets/users.png";
import { CiStar } from "react-icons/ci";
const UserReview = () => {
  return (
    <div className="mt-[30px]">
      <div>
        <h4 className="text-[18px] text-[#515151]">Rate and Review</h4>
        <div className="flex items-center gap-[20px]">
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <h5 className="text-[16px] text-[#181818]">Gardenia Ivanova</h5>
            <p className="text-[12px] text-[#A7A7A7]">Posting publicly</p>
          </div>
        </div>
        <div className="flex my-[18px] text-[25px] gap-[12px]">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>
        <div>
          <textarea
            className="w-full border border-[#DDDDDD] p-[16px] rounded-lg text-[14px]"
            rows="4"
            placeholder="What do you think about this product?"
          ></textarea>
          <div className="my-[30px] flex gap-[16px] justify-end items-center">
            <button className="flex justify-between items-center gap-[17px] border py-[12px] px-[34px] rounded-lg text-[18px] text-[#32251F] hover:bg-[#FF8D28] transition-all">
              Cancel
            </button>
            <button className="flex justify-between items-center gap-[17px] border py-[12px] px-[34px] rounded-lg text-[18px] text-[#32251F] hover:bg-[#FF8D28] transition-all">
              Post Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
