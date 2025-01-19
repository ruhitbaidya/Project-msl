import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ReviewBar from "./ReviewBar";
import UserReview from "./UserReview";
import OthersReview from "./OthersReview";
const ReviewRoot = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className={`border-t-2 ${
          open ? "" : "border-b-2"
        }  pt-[20px] pb-[14px] flex justify-between items-center`}
      >
        <span>Reviews</span>
        <span>{open ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
      </div>
      <div className={`${open ? "" : "hidden"} border-b-2`}>
        <ReviewBar />
        <UserReview />
        <OthersReview />
      </div>
    </div>
  );
};

export default ReviewRoot;
