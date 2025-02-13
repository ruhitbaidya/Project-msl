import { NavLink, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import "./Nav.css";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
const Navbar = () => {
  const [userTogle, setUserTogle] = useState(false);
  const [menus, setMenus] = useState(false);
  const [togleMenu, setTogleMenu] = useState(false);
  const navigate = useNavigate();
  const handelRedirct = () => {
    navigate("/card");
  };
  return (
    <div>
      <div className="container mx-auto py-[10px] border-b-2 mb-[10px] text-gray-600 relative dark:bg-white">
        <div className="grid grid-cols-3 lg:grid-cols-8 items-center">
          <div className="col-span-1">
            <img src={logo} alt="" />
          </div>
          <div className="hidden lg:flex col-span-6">
            <ul className="flex gap-[40px] text-[18px]">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="relative">
                <button
                  className="flex justify-center items-center gap-[5px]"
                  onClick={() => setTogleMenu(!togleMenu)}
                >
                  Products{" "}
                  {togleMenu ? (
                    <IoIosArrowForward />
                  ) : (
                    <IoIosArrowForward className="rotate-90" />
                  )}
                </button>
                {togleMenu ? (
                  <>
                    <div className="bg-white shadow-lg absolute z-10 rounded-lg p-[20px] w-[250px]">
                      <ul>
                        <li onClick={() => setTogleMenu(!togleMenu)}>
                          <NavLink to="products/adfadf">List 1</NavLink>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </li>
              <li>
                <NavLink to="/aboutus">About us</NavLink>
              </li>
              <li>
                <NavLink to="/faqs">FAQs</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contacts</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <div className="flex justify-between items-center">
              <div>
                <IoIosSearch size={30} />
              </div>
              <div>
                <button onClick={() => handelRedirct()}>
                  <CiShoppingCart size={30} />
                </button>
              </div>
              <div className="relative">
                <button
                  onClick={() => {
                    setUserTogle(!userTogle), setTogleMenu(false);
                  }}
                >
                  {" "}
                  <CiUser size={30} />
                </button>
                {userTogle ? (
                  <>
                    <div className="absolute z-10 right-0 top-[100%] bg-[#32251F] text-white w-[200px] p-[20px] rounded-lg border border-[#FF8D28]">
                      <p onClick={() => setUserTogle(!userTogle)}>
                        <NavLink to="/login">Login</NavLink>
                      </p>
                      <p onClick={() => setUserTogle(!userTogle)}>
                        <NavLink to="/register">Register</NavLink>
                      </p>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end lg:hidden col-span-1 mr-[10px]">
            <button
              onClick={() => setMenus(!menus)}
              className="p-[10px] border"
            >
              <IoMenu size={30} />
            </button>
            {menus ? (
              <>
                {" "}
                <div className="absolute top-0 z-10 bg-white w-[100%] p-[20px]">
                  <div className="text-right">
                    <button
                      onClick={() => setMenus(false)}
                      className="text-gray-800"
                    >
                      <RiCloseLargeLine size={30} />
                    </button>
                  </div>
                  <ul className=" text-[18px]">
                    <li onClick={() => setMenus(!menus)}>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="relative">
                      <button
                        className="flex justify-center items-center gap-[5px]"
                        onClick={() => setTogleMenu(!togleMenu)}
                      >
                        Products{" "}
                        {togleMenu ? (
                          <IoIosArrowForward />
                        ) : (
                          <IoIosArrowForward className="rotate-90" />
                        )}
                      </button>
                      {togleMenu ? (
                        <>
                          <div className="bg-white rounded-lg p-[20px] w-[250px]">
                            <ul>
                              <li onClick={() => setTogleMenu(!togleMenu)}>
                                <NavLink to="products/adfadf">List 1</NavLink>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </li>
                    <li onClick={() => setMenus(!menus)}>
                      <NavLink to="/aboutus">About us</NavLink>
                    </li>
                    <li onClick={() => setMenus(!menus)}>
                      <NavLink to="/faqs">FAQs</NavLink>
                    </li>
                    <li onClick={() => setMenus(!menus)}>
                      <NavLink to="/contact">Contacts</NavLink>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
