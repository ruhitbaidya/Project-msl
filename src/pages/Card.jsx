import { FaRegTrashAlt } from "react-icons/fa";
// import ProductQuantities from "../onlytext";
import { FaLongArrowAltRight } from "react-icons/fa";
import Purcess from "../components/ReuserComponents/Purcess";
import Choice from "../components/ReuserComponents/Choice";
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
        <div className="w-[80%] mx-auto">
          <div className="w-full">
            <div className="overflow-x-auto">
              <table className="table-fixed w-full min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-3 w-1/3 text-left whitespace-nowrap">
                      Product
                    </th>
                    <th className="p-3 w-1/3 text-center whitespace-nowrap">
                      Quantity
                    </th>
                    <th className="p-3 w-1/3 text-right whitespace-nowrap">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cardP.map((item, index) => (
                    <tr key={index} className="border-t-2 border-gray-300">
                      <td className="p-3 w-1/3">
                        <div className="flex items-center gap-4">
                          <img
                            className="object-contain w-[60px] h-[60px]"
                            src={item.image}
                            alt={item.name}
                          />
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">Push-button</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 w-1/3 text-center">
                        <div className="flex justify-center items-center gap-2">
                          <button className="w-[30px] h-[30px] rounded-full border text-lg leading-6 flex justify-center items-center">
                            +
                          </button>
                          <span className=" w-[30px] h-[30px] rounded-full border flex justify-center items-center">
                            {2}
                          </span>
                          <button className=" w-[30px] h-[30px] rounded-full border text-lg leading-6 flex justify-center items-center">
                            -
                          </button>
                          <button className="text-gray-400 ml-4">
                            <FaRegTrashAlt />
                          </button>
                        </div>
                      </td>
                      <td className="p-3 text-right text-gray-500 w-1/3">
                        ${item.price}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-300">
                    <td></td>
                    <td></td>
                    <td>
                      <div className="flex justify-end items-center gap-[40px] mt-[15px]">
                        <span className="text-gray-400">Total</span>
                        <span className="font-bold text-[#FF8D28]">$36</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end mt-[30px]">
            <button className="flex justify-between items-center gap-[20px] px-[40px] py-[10px] bg-[#FF8D28] rounded-lg text-gray-800">
              <span>CheckOut</span> <FaLongArrowAltRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <Purcess />
      </div>
      <div className="mt-[100px]">
        <Choice />
      </div>
    </div>
  );
};

export default Card;
