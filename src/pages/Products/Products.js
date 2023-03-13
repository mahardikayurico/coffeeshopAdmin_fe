import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardProducts from "../../components/Products/CardProducts";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container max-w-5xl mx-auto flex flex-row  ">
        {/* hero section start */}
        <section className=" basis-[30%] mt-3">
          <div>
            <div className="">
              <h1 className="text-center"> Promo For You </h1>
              <h5 className="text-center">
                Coupons will be updated every weeks. <br /> Check them out!
              </h5>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-7 p-3">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure>
              <div className="card-body p-0">
                <h2 className="card-title">HAPPY MOTHER’S DAY!</h2>
                <p>Get one of our favorite menu for free!</p>
              </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/200/280/arch" alt="Movie" />
              </figure>
              <div className="card-body p-0">
                <h2 className="card-title">HAPPY MOTHER’S DAY!</h2>
                <p>Get one of our favorite menu for free!</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary border border-black w-3/4 my-5   py-2 bg-amber-400 hover:bg-amber-200 text-[#6A4029]">
              Edit Promo
            </button>
            <button className="btn btn-primary border border-black w-3/4 my-5   py-2 bg-[#6A4029] hover:bg-amber-700 text-white">
              Add New Promo
            </button>
          </div>
        </section>
        <section className=" border-l-4 ml-3 basis-[70%] mt-3">
          <div className="flex-1 ">
            <ul className="flex flex-row space-x-6 justify-center">
              <li
                onClick={() => setSelectedCategory("all")}
                className="hover:cursor-pointer"
              >
                Favorite and Promo
              </li>
              <li
                onClick={() => setSelectedCategory("coffee")}
                className="hover:cursor-pointer"
              >
                Coffee
              </li>
              <li
                onClick={() => setSelectedCategory("non coffee")}
                className="hover:cursor-pointer"
              >
                Non Coffee
              </li>
              <li
                onClick={() => setSelectedCategory("food")}
                className="hover:cursor-pointer"
              >
                Food
              </li>
              <li
                onClick={() => setSelectedCategory("add-on")}
                className="hover:cursor-pointer"
              >
                add-on
              </li>
            </ul>
          </div>

          <CardProducts category={selectedCategory} />

          <h3 className="ml-3">
            *the price has been cutted by discount appears
          </h3>
          <div className="text-center">
            <button
              onClick={() => navigate("/newproduct")}
              className="btn btn-primary border border-black w-3/4 my-5   py-2 bg-[#6A4029] hover:bg-amber-700 text-white"
            >
              Add New Product
            </button>
          </div>
        </section>
        {/* hero section end */}
      </main>
      <Footer />
    </div>
  );
};

export default Products;
