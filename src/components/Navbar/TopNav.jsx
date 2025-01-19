import { useTranslation } from "react-i18next";
import "../../translate";
import { useState } from "react";
const TopNav = () => {
  const [chan, setChan] = useState("en");
  const { t, i18n } = useTranslation();
  const changeLanguare = (value) => {
    i18n.changeLanguage(value);
  };
  return (
    <div className="bg-[#32251F] py-[10px]">
      <div className="container mx-auto px-[10px]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto">
            <p className="py-[16px] text-white text-[14px] text-center sm:text-left">
              <span>{t("headEmail")}: beals@gmail.com </span>
              <span className="sm:ml-[20px]">
                {t("phone")}: +1 905-826-3821{" "}
              </span>
            </p>
          </div>
          <div className="text-white w-full sm:w-auto text-center sm:text-right">
            <button
              className={`mr-[5px] ${chan === "en" ? "text-[#FF8D28]" : ""}`}
              onClick={() => {
                changeLanguare("en"), setChan("en");
              }}
            >
              EN
            </button>{" "}
            l{" "}
            <button
              className={`ml-[5px] ${chan === "bn" ? "text-[#FF8D28]" : ""}`}
              onClick={() => {
                changeLanguare("bn"), setChan("bn");
              }}
            >
              BN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
