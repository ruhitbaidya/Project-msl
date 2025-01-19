import { FaRegTrashAlt } from "react-icons/fa";
// import ProductQuantities from "../onlytext";

const Card = () => {
  const cardP = [
    {
      id: "12456",
      name: "HeadPhone",
      price: "12",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "124567",
      name: "HeadPhone",
      price: "12",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "1256",
      name: "HeadPhone",
      price: "12",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // const products = cardP.reduce((acc, item)=> cardP[acc.name] ===  , 0)
  return (
    <div className="py-[30px] container mx-auto px-[10px]">
      <h3 className="text-center text-[30px]">
        Check Your Product And And CheckOut
      </h3>
      <div className="mt-[20px]">
        <div className="grid grid-cols-7">
          <div className="col-span-5">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Queantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cardP.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            className="object-contain w-[40px] h-[40px]"
                            src={item.image}
                            alt=""
                          />
                        </td>
                        <td>{item.name}</td>

                        <td>{item.price}</td>
                        <td className="flex justify-center items-center">
                          <button className="bg-[#D9D9D9] mx-[5px] w-[30px] block text-center h-[30px] rounded-full  text-[20px] disabled">
                            {2}
                          </button>
                          <button className="bg-[#FF8D28] mx-[5px] w-[30px] block text-center h-[30px] rounded-full  text-[25px]">
                            +
                          </button>

                          <button className="bg-[#FF8D28] mx-[5px] w-[30px] block text-center h-[30px] rounded-full  text-[25px]">
                            -
                          </button>
                        </td>
                        <td>
                          <FaRegTrashAlt />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
