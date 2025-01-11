import { Banner } from "../components/Home/Banner";
import Choice from "../components/Home/Choice";
import FetchersProduct from "../components/Home/FetchersProduct";
import PopularProduct from "../components/Home/PopularProduct";
import Review from "../components/Home/Review";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-[10px]">
        <Banner />
        <FetchersProduct />
        <PopularProduct />
        <Review />
      </div>
      <Choice />
    </>
  );
};

export default Home;
