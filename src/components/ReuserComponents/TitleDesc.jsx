// eslint-disable-next-line react/prop-types
const TitleDesc = ({ title, description }) => {
  return (
    <div className="mt-[80px]">
      <div className="text-center">
        <h2 className="mb-[10px] text-[44px] text-[#32251F]">{title}</h2>
        <p className="text-[18px] text-[#1E1E1E80]">{description}</p>
      </div>
    </div>
  );
};

export default TitleDesc;
