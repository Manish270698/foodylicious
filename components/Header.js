import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import moon from "../images/moon.png";
import light from "../images/light.png";
import cereal from "../images/cereal.png";
import OfflineAlert from "./OfflineAlert";
import github from "../images/github.png";
import useThemeContext from "../utils/useThemeContext";
import cart_light from "../images/cart-light.png";
import cart_dark from "../images/cart-dark.png";

const Header = ({ isThemeDark }) => {
  const [btnName, setBtnName] = useState("Login");
  const [imgSrc, setImgSrc] = useState(isThemeDark ? light : moon);
  const [cartImg, setCartImg] = useState(isThemeDark ? cart_dark : cart_light);

  const { setThemeName } = useContext(useThemeContext);

  const handleToggle = () => {
    if (imgSrc == moon) {
      setImgSrc(light);
      setCartImg(cart_dark);
      setThemeName("dark");
    } else {
      setThemeName("light");
      setCartImg(cart_light);
      setImgSrc(moon);
    }
  };

  return (
    <div className="font-bold fixed top-0 z-20 flex w-full justify-between  border-b-[0.01rem] border-[#a8a9aa] font-medium text-[#334155] shadow-lg backdrop-blur-3xl  dark:border-[#303235] dark:text-[#e2e8f0]">
      <OfflineAlert />
      <div className="logo">
        <Link to="/">
          <img
            className="m-3 h-14 w-14 hover:scale-105"
            alt="logo image"
            src={cereal}
          />
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <ul className="mr-3 flex items-center gap-5">
          <li className=" hover:scale-105">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:scale-105">
            <Link to="/contactus">Contact</Link>
          </li>
          <li className=" hover:scale-105">
            <Link to="/about">About</Link>
          </li>
          <li>
            <div className="relative">
              <Link to="/cart">
                <img
                  src={cartImg}
                  alt="cart"
                  className="h-5 w-5 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#33bd3c] text-xs">
                  2
                </div>
              </Link>
            </div>
          </li>
          <li className=" hover:scale-105">
            <div className="h-5 w-5">
              <a
                href="https://github.com/Manish270698/foodylicious"
                target="_blank"
              >
                <img src={github} alt="github" />
              </a>
            </div>
          </li>
          <li className=" hover:scale-105">
            <div title="theme" className="h-5 w-5">
              <img
                className="cursor-pointer"
                id="theme"
                src={imgSrc}
                alt="theme"
                onClick={(e) => handleToggle()}
              />
            </div>
          </li>
          <li className=" hover:scale-105">
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
