import { NavLink } from "react-router-dom";
import SetTitle from "../components/ReuserComponents/ReactHalmet";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import imgBg from "../assets/login.png";
const Login = () => {
  return (
    <div>
      <SetTitle title="Login" />
      <div>
        <SetTitle title="Register" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img
              className="w-full hidden lg:flex h-full object-cover"
              src={imgBg}
              alt=""
            />
          </div>
          <div className="bg-[#32251F] text-white">
            <div className="p-[50px]">
              <div className="flex">
                <NavLink to="/login">
                  <p className="p-[10px] border-[#ff8d28] text-white  border-b-2 ">
                    Login
                  </p>
                </NavLink>
                <NavLink to="/register">
                  <p className="p-[10px]  border-b-2 border-[#533E35]  text-white">
                    Register
                  </p>
                </NavLink>
              </div>
              <p className="my-[20px]"> Welcome Back!</p>
              <div>
                <h2 className="text-[25px] lg:text-[44px] text-white">Login With</h2>
                <div className="my-[20px]">
                  <button className="p-[10px] rounded-lg bg-[#C5331E] mx-[5px]">
                    <FaGoogle size={25} />
                  </button>
                  <button className="p-[10px] rounded-lg bg-[#55ACE3] mx-[5px]">
                    <FaTwitter size={25} />
                  </button>
                  <button className="p-[10px] rounded-lg bg-[#4E6297] mx-[5px]">
                    <FaFacebookF size={25} />
                  </button>
                </div>
                or
                <div>
                  <form className="my-[20px] space-y-[20px]">
                    <div>
                      <label htmlFor="email">Enter Email Adderse</label>
                      <input
                        className="w-full p-[15px] rounded-lg bg-transparent border focus:outline-none"
                        type="email"
                        placeholder="Enter Email Adderse"
                      />
                    </div>
                    <div>
                      <label htmlFor="password">Password</label>
                      <input
                        className="w-full p-[15px] rounded-lg bg-transparent border focus:outline-none"
                        type="email"
                        placeholder="******"
                      />
                    </div>
                    <div>
                      <NavLink to="">
                        <p className="text-right text-[#B46724]">
                          Forgate Password
                        </p>
                      </NavLink>
                    </div>
                    <div>
                      <button className="bg-[#FF8D28] w-full rounded-lg py-[10px] text-black">
                        Sign In
                      </button>
                    </div>
                  </form>
                  <p className="text-[14px]">
                    Already Have An Account?{" "}
                    <NavLink to="/login" className="text-[#ff8d28]">
                      Sign In Now
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
