import Buttons from "./Buttons";
import "../Home/slider.css";
const Choice = () => {
  return (
    <div className="choicePg">
      <div className="my-[50px] container mx-auto px-[10px] border p-[30px]">
        <div className="grid grid-cols-2 gap-[25px]">
          <div></div>
          <div className="text-center">
            <h2 className="text-[44px]">We promise your choice</h2>
            <div className="flex justify-center items-center mt-[27px]">
              <Buttons text="Buy products" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
