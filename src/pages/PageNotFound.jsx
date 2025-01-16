import SetTitle from "../components/ReuserComponents/ReactHalmet";

const PageNotFound = () => {
  return (
    <div className="container mx-auto px-[10px]">
      <SetTitle title="Page Not Found" />
      <div className="h-screen flex justify-center items-center">
        <div>
          <h2 className="text-[50px]">404 Page Not Found</h2>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
