import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <>
      <div id="nav">
        <div className="container">
          <div className="z-50 hidden w-full py-6 lg:flex">
            <div className="flex items-center justify-between w-full">
              <div>
                <a href="/">
                  <img className="w-28" src={Logo} alt="Logo" />
                </a>
              </div>
              <div className="flex gap-8">
                <a className="link" href="/">
                  test
                </a>
                <a className="link" href="/">
                  test
                </a>
                <a className="link" href="/">
                  test
                </a>
              </div>
              <div className="flex items-center">
                <div className="flex items-center cursor-pointer">
                  <i className="text-2xl text-hoverColor">
                    <IoMdPerson />
                  </i>
                  <p className="ml-2">Login</p>
                </div>

                <div className="flex items-center cursor-pointer">
                  <i className="ml-4 text-2xl text-hoverColor">
                    <FaShoppingCart />
                  </i>
                  <p className="ml-2">Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container flex flex-row-reverse items-center justify-between lg:hidden">
            <div className={nav ? "visible lg:invisible" : "invisible"}>
              <img src={Logo} className="w-24" alt="Logo" />
            </div>
            <div>
              <div className="lg:hidden">
                <div className="cursor-pointer">
                  {nav ? (
                    <AiOutlineMenu className="w-6 h-6" onClick={navHandler} />
                  ) : (
                    <FaXmark className="w-6 h-6" onClick={navHandler} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className={
                nav
                  ? "absolute w-full rtl:left-[150%] opacity-0 ltr:left-[-150%] duration-500 z-50"
                  : "absolute w-full left-0 bg-grey opacity-100 shadow-2xl z-50 duration-500"
              }
            >
              <div className="flex flex-col px-8 py-16 gap-y-8">
                <a href="/">test</a>
                <a href="/">test</a>
                <a href="/">test</a>

                <div className="mx-auto mt-2 lg:hidden">
                  <img
                    className={nav ? "invisible w-24" : "visible w-24"}
                    src={Logo}
                    alt="Logo"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <i className="text-2xl">
                    <IoMdPerson />
                  </i>
                  <i className="ml-4 text-2xl">
                    <FaShoppingCart />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
