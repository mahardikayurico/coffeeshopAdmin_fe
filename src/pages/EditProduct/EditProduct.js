import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const EditProduct = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container max-w-5xl mx-auto flex flex-row  ">
        <section className=" basis-[40%] mt-3">
          <div className="align-center">
            <img
              className="mask mask-circle max-w-[70%] mx-auto"
              src="https://placeimg.com/200/280/arch"
              alt="Shoes"
            />
          </div>
          <div className="text-center">
            <button className="btn btn-primary border border-black w-3/4 my-5   py-2 bg-[#0B132A] hover:bg-[#0e3097] text-white">
              Take a picture
            </button>
            <button className="btn btn-primary border border-black w-3/4 my-5   py-2 bg-[#FFBA33] hover:bg-amber-700 text-[#6A4029]">
              Choose from gallery
            </button>
          </div>
        </section>

        <section className="  ml-3 basis-[60%] mt-3">
          <form className="mt-10 ">
            <div className="flex flex-col py-2 w-3/4 mx-auto ">
              <label className="text-[#6A4029] font-bold">Name : </label>
              <input className="border rounded-lg p-2" type="text" />
            </div>
            <div className="flex flex-col py-2 w-3/4 mx-auto ">
              <label className="text-[#6A4029] font-bold">Price : </label>
              <input className="border rounded-lg p-2" type="number" />
            </div>
            <div className="flex flex-col py-2 w-3/4 mx-auto ">
              <label className="text-[#6A4029] font-bold">Category :</label>
              <input className="border rounded-lg p-2" type="text" />
            </div>
            <div className="flex flex-col py-2 w-3/4 mx-auto ">
              <label className="text-[#6A4029] font-bold">Description :</label>
              <input className="border rounded-lg p-2" type="text" />
            </div>
            <div className="text-center">
              <button className=" btn btn-primary border border-black w-3/4 my-5 mx-center  py-2 bg-[#6A4029] hover:bg-amber-700 text-white">
                Save Change
              </button>
              <button className=" btn btn-primary border border-black  w-3/4 my-5  py-2 bg-[#BABABA59]  hover:bg-gray-400 text-[#4F5665]">
                Cancel
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EditProduct;
