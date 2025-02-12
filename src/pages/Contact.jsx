import SetTitle from "../components/ReuserComponents/ReactHalmet";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import maps from "../assets/map.jpg";
import ContactForm from "../components/contact/ContactForm/ContactForm";
const Contact = () => {
  return (
    <div>
      <SetTitle title="Contact Us" />
      <div className="bg-[#32251F]">
        <div className="container mx-auto px-[10px]">
          <div className="w-[95%] lg:w-[60%] mx-auto text-center py-[60px]">
            <h1 className="text-white text-[30px] lg:text-[44px]">
              Contact Us
            </h1>
            <p className="text-[#FFFFFF80] text-[18px]">
              We are here to assist you with all your needs and would like to
              make sure that no one will be left alone when they need a helping
              hand
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-[10px]">
          <div>
            <div className="mt-[80px]">
              <div className="grid lg:grid-cols-3 gap-[25px]">
                <div className="text-center">
                  <div className="bg-[#32251F] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full flex justify-center items-center text-[25px] lg:text-[50px] text-[#FF8D28] mx-auto">
                    <SlEnvolope />
                  </div>
                  <div>
                    <h5 className="text-[18px] lg:text-[24px] mt-[24px] mb-[12px]">
                      {" "}
                      Email:
                    </h5>
                    <p className="text-[14px] lg:text-[18px] text-[#1E1E1E80]">
                      info.beals@gmail.com
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-[#32251F] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full flex justify-center items-center text-[25px] lg:text-[50px] text-[#FF8D28] mx-auto">
                    <IoCall />
                  </div>
                  <div>
                    <h5 className="text-[18px] lg:text-[24px] mt-[24px] mb-[12px]">
                      {" "}
                      Phone:
                    </h5>
                    <p className="text-[14px] lg:text-[18px] text-[#1E1E1E80]">
                      + 11 0124 001 253 <br /> + 03 8074 9301
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-[#32251F] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full flex justify-center items-center text-[25px] lg:text-[50px] text-[#FF8D28] mx-auto">
                    <FaLocationDot />
                  </div>
                  <div>
                    <h5 className="text-[18px] lg:text-[24px] mt-[24px] mb-[12px]">
                      {" "}
                      Location:
                    </h5>
                    <p className="text-[14px] lg:text-[18px] text-[#1E1E1E80]">
                      32, Jalan Layang-Layang 5Bandar Puchong Jaya, 47180
                      Puchong, Selangor,Malaysia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[80px]">
        <img className="w-full h-[500px] object-cover" src={maps} alt="" />
      </div>
      <div className="bg-[#F9F9F9] py-[60px]">
        <div className="container mx-auto px-[10px]">
          <div className="w-full lg:w-[60%] mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
