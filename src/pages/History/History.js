import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../assets/css/background.css";

const History = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="  mx-auto bg-history flex flex-col mt-4  ">
        <section className=" container max-w-5xl mx-auto ">
          <h1 className="text-center text-white font-bold text-3xl mt-12 ">
            Let’s see what you have bought!
          </h1>
          <h3 className="text-center text-white">Long press to delete item</h3>
        </section>

        <section className="container max-w-5xl mx-auto mt-10 grid grid-cols-3 gap-7 p-3">
          <div className="card card-side bg-base-100 shadow-xl ">
            <img
              className="mask mask-circle max-w-[20%]"
              src="https://placeimg.com/200/280/arch"
              alt="Movie"
            />

            <div className="ml-2 card-body p-0">
              <h2 className="card-title"> Veggie tomato mix</h2>
              <p>IDR 34.000</p>
              <p>Delivered</p>
            </div>
          </div>
          <div className=" card card-side bg-base-100 shadow-xl">
            <img
              className="mask mask-circle max-w-[20%]"
              src="https://placeimg.com/200/280/arch"
              alt="Movie"
            />

            <div className="ml-2 card-body p-0">
              <h2 className="card-title">Veggie tomato mix</h2>
              <p>IDR 34.000</p>
              <p>Delivered</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <img
              className="mask mask-circle max-w-[20%]"
              src="https://placeimg.com/200/280/arch"
              alt="Movie"
            />

            <div className="ml-2 p-0 card-body">
              <h2 className="card-title">Veggie tomato mix</h2>
              <p>IDR 34.000</p>
              <p>Delivered</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <img
              className="mask mask-circle max-w-[20%]"
              src="https://placeimg.com/200/280/arch"
              alt="Movie"
            />

            <div className="ml-2 p-0 card-body">
              <h2 className="card-title">Veggie tomato mix</h2>
              <p>IDR 34.000</p>
              <p>Delivered</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default History;
