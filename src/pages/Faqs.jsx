import Accordion from "../components/Faq/Accordion";
import Purcess from "../components/ReuserComponents/Purcess";
import SetTitle from "../components/ReuserComponents/ReactHalmet";

const Faqs = () => {
  return (
    <div>
      <SetTitle title="FAQ " />
      <div className="bg-[#32251F]">
        <div className="container mx-auto px-[10px]">
          <div className="w-full lg:w-[60%] mx-auto text-center py-[60px]">
            <h1 className="text-white text-[30px] lg:text-[36px]">
              Quick answer and Questions
            </h1>
            <p className="text-[#FFFFFF80] text-[18px]">
              We have add some basic question that help you a lot.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-[10px] py-[60px]">
        <div>
          <h2 className="text-[#32251F] text-[25px] lg:text-[44px] text-center">
            Freequently Asked Questions
          </h2>
        </div>
        <div className="my-[30px] w-[95%] lg:w-[70%] mx-auto">
          <Accordion />
        </div>
        <div className="my-[80px] w-[95%] lg:w-[70%] mx-auto">
          <div className="text-center w-[95%] lg:w-[70%] mx-auto">
            <h3 className="text-[#32251F] text-[25px] lg:text-[36px]">
              Still have a questions?
            </h3>
            <p className="text-[#1E1E1E80]">
              If you can’t find your answer to your questions in our FAQs,
              please contact us. We will answer very shortly
            </p>
            <button className="bg-[#FF8D28] w-full py-[10px] rounded-lg mt-[20px]">
              Contact Us
            </button>
          </div>
        </div>
        <div className="mt-[50px]">
          <Purcess />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
