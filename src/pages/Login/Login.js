import React, { useEffect, useState } from "react";
import logocoffee from "../../assets/img/logo.svg";
import Footer from "../../components/Footer";
import "../../assets/css/background.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    axios({
      url: "http://localhost:5000/api/v1/auth/login",
      method: "POST",
      data: loginForm,
    })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("@userLogin", JSON.stringify(res.data.data));
        navigate("/products");
      })
      .catch((err) => {
        setValidate({ error: true, message: err.response.data.message });
      });
  };

  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      navigate("/products");
    }
  });
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto flex">
        <section className="flex-1 auth-bg"></section>
        <section className="flex-1 mt-8">
          <div className="flex flex-row">
            <div className="basis-1/2 ml-8">
              <img className="w-12" src={logocoffee} alt="logocoffee"></img>
            </div>
            <div className="basis-1/2 ml-36 mx-auto">
              <button
                className="mt-2 mx-auto border bg-amber-500 rounded-full py-2 px-6 text-amber-900"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="mt-16">
            <h1 className="text-center text-amber-900 font-bold  text-3xl">
              Login
            </h1>
          </div>
          <form onSubmit={handleLogin} className="mt-10 ">
            {validate.error && (
              <div className="alert alert-error shadow-lg w-3/4 mx-auto">
                <div>
                  <span>{validate.message}</span>
                </div>
              </div>
            )}
            <div className="flex flex-col py-2 w-3/4 mx-auto ">
              <label>Username</label>
              <input
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    username: e.target.value,
                  })
                }
                className="border rounded-xl p-2"
                type="text"
                placeholder="Input Your Username "
              />
            </div>
            <div className="flex flex-col py-2 w-3/4 mx-auto">
              <label>Password</label>
              <input
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    password: e.target.value,
                  })
                }
                className="border rounded-xl p-2"
                type="password"
                placeholder="Input Your Password"
              />
            </div>
            <div
              className="underline mx-auto w-3/4 hover:cursor-pointer"
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password ?{" "}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" btn btn-primary border border-black w-3/4 my-5 mx-center  py-2 bg-amber-500 hover:bg-amber-400 text-amber-900"
              >
                Login
              </button>
            </div>
          </form>
          <div className=" text-center">
            <button className=" btn btn-primary border border-black  w-3/4 my-5  py-2 bg-white  hover:bg-gray-400 text-black">
              Login With Google
            </button>
          </div>
          <div className="ml-4">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
