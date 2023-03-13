import React from "react";
import logocoffee from "../../assets/img/logo.svg";
import Footer from "../../components/Footer";

import "../../assets/css/background.css";

function ForgotPassword() {
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto flex">
        <section className="flex-1 fp-bg"></section>
        <section className="flex-1 mt-8">
          <div className="flex flex-row">
            <div className="basis-1/2 ml-8 align-center">
              <img className="w-12" src={logocoffee}></img>
            </div>
          </div>
          <div className="mt-16">
            <h1 className="text-center text-black font-bold  text-3xl">
              Forgot your password?
            </h1>
            <h3 className="text-center text-black font-bold  text-l">
              Don’t worry, we got your back!
            </h3>
          </div>
          <form className="mt-10 ">
            <div className="flex flex-col py-2 w-3/4 mx-auto ">
              <input
                className="border p-2 rounded-md"
                type="email"
                value="Enter your email adress to get link"
              />
            </div>
            <div className="text-center">
              <button className=" btn btn-primary border border-black w-3/4 my-5 mx-center  py-2 bg-amber-500 hover:bg-amber-400 text-white">
                Send
              </button>
            </div>
          </form>
          <div className="text-center">
            <h2 className="underline mx-auto w-3/4">
              Click here if you didn’t receive any link in 2 minutes
            </h2>
            <h2 className="font-bold mx-auto w-3/4">01:52</h2>
            <button className="btn btn-primary border border-black  w-3/4 my-5  py-2 bg-white  hover:bg-gray-400 text-black">
              Resend Link
            </button>
          </div>

          <Footer />
        </section>
      </main>
    </div>
  );
}

export default ForgotPassword;
