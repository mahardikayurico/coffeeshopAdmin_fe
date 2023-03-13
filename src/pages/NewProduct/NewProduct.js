import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    image: null,
  });
  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("category", formData.category);
    form.append("price", formData.price);
    form.append("image", formData.image);
    axios({
      url: "http://localhost:5000/api/v1/products",
      method: "POST",
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res.data.data);
        // navigate("/products");
      })
      .catch((err) => {
        setValidate({ error: true, message: err.response.data.message });
      });
  };
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
            <form onSubmit={handleSubmit}>
              <button
                onChange={handleFileChange}
                type="file"
                className="btn btn-primary border border-black w-3/4 my-5   py-2 bg-[#FFBA33] hover:bg-amber-700 text-[#6A4029]"
              >
                Choose from gallery
              </button>
            </form>
          </div>
        </section>

        <section className="  ml-3 basis-[60%] mt-3">
          <form className="mt-10 " onSubmit={handleSubmit}>
            <div className="flex flex-col py-2 w-3/4 mx-auto ">
              <label className="text-[#6A4029] font-bold">Title : </label>
              <input
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
                className="border rounded-lg p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2 w-3/4 mx-auto ">
              <label className="text-[#6A4029] font-bold">Price : </label>
              <input
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: e.target.value,
                  })
                }
                className="border rounded-lg p-2"
                type="number"
              />
            </div>
            <div className="flex flex-col py-2 w-3/4 mx-auto ">
              <label className="text-[#6A4029] font-bold">Category :</label>
              <input
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value,
                  })
                }
                className="border rounded-lg p-2"
                type="text"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                onClick={() => navigate("/products")}
                className=" btn btn-primary border border-black w-3/4 my-5 mx-center  py-2 bg-[#6A4029] hover:bg-amber-700 text-white"
              >
                Save Product
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

export default NewProduct;
