// eslint-disable-next-line react/prop-types
const TitleDesc = ({ title, description }) => {
  return (
    <div className="mt-[40px] md:mt-[60px] lg:mt-[80px] px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="mb-[10px] text-[28px] md:text-[36px] lg:text-[44px] text-[#32251F] font-semibold">
          {title}
        </h2>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#1E1E1E80] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TitleDesc;
