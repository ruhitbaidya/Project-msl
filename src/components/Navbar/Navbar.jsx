import { Link, NavLink } from "react-router-dom";
import { CiSearch, CiUser } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start w-[10%]">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="w-[50px] h-[50px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex w-[50%]">
          <ul className="menu menu-horizontal px-1 text-[18px]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">AboutUs</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">FAQS</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end w-[40%]">
          <div className="text-[30px] flex justify-between gap-[20px]">
            <button>
              <CiSearch />
            </button>
            <button>
              <MdOutlineShoppingCart />
            </button>
            <button>
              <CiUser />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
