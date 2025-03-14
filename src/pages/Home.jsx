import { Banner } from "../components/Home/Banner";

import FetchersProduct from "../components/Home/FetchersProduct";
import PopularProduct from "../components/Home/PopularProduct";
import Review from "../components/Home/Review";
import Choice from "../components/ReuserComponents/Choice";
import SetTitle from "../components/ReuserComponents/ReactHalmet";

const Home = () => {
  return (
    <>
      <SetTitle title="Home" />
      <div className="container mx-auto px-[10px]">
        <Banner />
        <FetchersProduct />
      </div>
      <PopularProduct />
      <div className="container mx-auto px-[10px]">
        <Review />
      </div>
      <Choice />
    </>
  );
};

export default Home;
