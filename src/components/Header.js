import logocoffee from "../assets/img/logo.svg";
import React, { useEffect } from "react";
import MenuAuth from "./MenuAuth";
import MenuUnAuth from "./MenuUnAuth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <div>
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36 border-b-2">
        <div className="flex flex row">
          <img alt="logocoffee" src={logocoffee} className="w-12" />
        </div>
        <div className="flex-1 ">
          <ul className="flex flex-row space-x-6 justify-center">
            <li
              className="font-semibold hover:cursor-pointer hover:text-amber-900"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="font-semibold hover:cursor-pointer hover:text-amber-900"
              onClick={() => navigate("/products")}
            >
              Product
            </li>
            <li
              className="font-semibold hover:cursor-pointer hover:text-amber-900"
              onClick={() => navigate("/cart")}
            >
              Order
            </li>
            <li
              className="font-semibold hover:cursor-pointer hover:text-amber-900"
              onClick={() => navigate("/history")}
            >
              Dashboard
            </li>
          </ul>
        </div>
        {localStorage.getItem("@userLogin") ? <MenuAuth /> : <MenuUnAuth />}
      </header>
    </div>
  );
};

export default Header;
