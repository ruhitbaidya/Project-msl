import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import pay1 from "../../assets/Bkash.png";
import pay2 from "../../assets/paypal.png";
import pay3 from "../../assets/visa.png";
import pay4 from "../../assets/mastercard.png";
const Footer = () => {
  return (
    <div className="mb-[40px]">
      <div className="container mx-auto px-[10px] my-[80px]">
        <div className="flex justify-between items-center gap-[50px]">
          <div className="w-[30%]">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <p className="text-[18px] text-[#32251F] my-[30px]">
                We help you to find your essential products
              </p>
            </div>
            <div className="flex  items-center gap-[30px]">
              <Link to="/">
                <p className="w-[50px] h-[50px] border flex justify-center items-center text-[30px] gap-[20px] rounded-full">
                  <FaFacebook />
                </p>
              </Link>
              <Link to="/">
                <p className="w-[50px] h-[50px] border flex justify-center items-center text-[30px] gap-[20px] rounded-full">
                  <BsInstagram />
                </p>
              </Link>
              <Link to="/">
                <p className="w-[50px] h-[50px] border flex justify-center items-center text-[30px] gap-[20px] rounded-full">
                  <FaTwitter />
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center gap-[25px] w-[40%]">
            <div>
              <h4 className="text-[18px] text-[#32251F]">Information</h4>
              <Link className="my-[24px] block" to="/">
                <p className="text-[#32251F] text-[18px]">About</p>
              </Link>
              <Link className="mb-[24px] block" to="/">
                <p className="text-[#32251F] text-[18px]">Product</p>
              </Link>
              <Link className="mb-[24px] block" to="/">
                <p className="text-[#32251F] text-[18px]">Blog</p>
              </Link>
            </div>
            <div>
              <h4 className="text-[18px] text-[#32251F]">Company</h4>
              <Link className="my-[24px] block" to="/">
                <p className="text-[#32251F] text-[18px]">Community</p>
              </Link>
              <Link className="mb-[24px] block" to="/">
                <p className="text-[#32251F] text-[18px]">Career</p>
              </Link>
              <Link className="mb-[24px] block" to="/">
                <p className="text-[#32251F] text-[18px]">Our story</p>
              </Link>
            </div>
            <div>
              <h4 className="text-[18px] text-[#32251F]">Contact</h4>
              <Link className="my-[24px] block" to="/">
                <p className="text-[#32251F] text-[18px]">Getting Started</p>
              </Link>
              <Link className="mb-[24px] block" to="/">
                <p className="text-[#32251F] text-[18px]">Pricing</p>
              </Link>
              <Link className="mb-[24px] block" to="/">
                <p className="text-[#32251F] text-[18px]">Resources</p>
              </Link>
            </div>
          </div>
          <div className="w-[30%]">
            <h4 className="text-[18px] text-[#32251F]">Subscribe</h4>
            <div className="my-[35px] flex  items-center">
              <input
                className="py-[12px] px-[24px] bg-[#D9D9D9] rounded-tl-lg rounded-bl-lg focus:border-none focus:outline-none"
                placeholder="Enter Email"
                type="text"
              />
              <button className="bg-[#FF8D28] py-[16px] px-[22px] rounded-lg -ml-[10px]">
                <FaLongArrowAltRight />
              </button>
            </div>
            <div className="grid grid-cols-3 items-center gap-[25px]">
              <img src={pay1} alt="" />
              <img src={pay2} alt="" />
              <img src={pay3} alt="" />
              <img src={pay4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-[30px]" />
      <div>
        <p className="text-center text-[#32251F]">
          2025 all Right Reserved @BEALS
        </p>
      </div>
    </div>
  );
};

export default Footer;
