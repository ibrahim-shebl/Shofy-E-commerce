import React, { useState, useEffect } from "react";
import { UserCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useSelector } from "react-redux";
import { FiShoppingBag, FiStar } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
export default function Header() {
  const [showMenu, setShowMenu]=useState(false)
  const { productData, favoriteData } = useSelector((state) => state.pro);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // تحقق مما إذا كان المستخدم مسجل الدخول
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);

     
  }, [localStorage.getItem("accessToken")]);  

  const handleCartClick = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/cart");
      setShowMenu(false)
    } else {
      navigate("/login");
    }
  };

  const handleFavouriteClick = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/favourite");
      setShowMenu(false);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user")
    setIsLoggedIn(false);  
    navigate("/");
  };

  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-65 backdrop-blur-2xl py-3 px-4 md:py-4 md:px-16 border-b flex items-center justify-between">
      <Link to="/">
        <img className="h-4 md:h-5" src={logo} alt="Logo" />
      </Link>
      <div className="hidden md:flex gap-2 items-center font-semibold">
        {menuList?.map((item) => {
          return (
            <Link to={item?.link} key={item.name}>
              <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
                {item?.name}
              </button>
            </Link>
          );
        })}
         
            <button onClick={handleCartClick} className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
            Cart
            </button>
                    
            <button onClick={handleFavouriteClick} className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
            Favourite
            </button>
          <Link to="/about">
            <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
            About
            </button>
          </Link>
          <Link to="/contact">
            <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
            Contact
            </button>
          </Link>
        {isLoggedIn && (
          <Link to="/information">
            <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
              My Account
            </button>
          </Link>
        )}
         
      </div>
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <button onClick={handleFavouriteClick} className="relative block mr-3">
            <FiStar className="hover:bg-gray-50 duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-[#E02B2B] text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              {favoriteData ? favoriteData.length : 0}
            </span>
          </button>
          <button
            onClick={handleCartClick}
            className="relative block"
          >
            <FiShoppingBag className="hover:bg-gray-50 duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-[#E02B2B] text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
              {productData ? productData.length : 0}
            </span>
          </button>
        </div>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            title="Logout"
            className="h-8 w-8 ml-5 flex justify-center items-center rounded-full hover:bg-gray-50"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              title="My Account"
              className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50 "
            >
              <UserCircle2 size={14} />
            </button>
          </Link>
        )}
      </div>
      <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl md:hidden bg-gray-200 w-10 h-10 inline-flex items-center justify-center rounded-full text-[#ff014f] cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <p className="text-sm text-gray-400 mt-2">
                Welcome to the Shofy Electrical Appliances website. You can buy the appliances you want.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
              {menuList?.map((item) => {
          return (
            <Link onClick={() => setShowMenu(false)} to={item?.link} key={item.name}>
              <button className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300">
                {item?.name}
              </button>
            </Link>
          );
        })}
         
            <button onClick={handleCartClick} className="text-base font-normal flex text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300">
            Cart
            </button>
                    
            <button onClick={handleFavouriteClick} className="text-base font-normal flex text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300">
            Favourite
            </button>
          <Link onClick={() => setShowMenu(false)} to="/about">
            <button className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300">
            About
            </button>
          </Link>
          <Link onClick={() => setShowMenu(false)} to="/contact">
            <button className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300">
            Contact
            </button>
          </Link>
        {isLoggedIn && (
          <Link onClick={() => setShowMenu(false)} to="/information">
            <button className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[#ff014f] duration-300">
              My Account
            </button>
          </Link>
        )}
         
              </ul>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-1 text-gray-400 hover:text-[#ff014f] duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
    </nav>
  );
}