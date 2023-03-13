import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProductsDetails = () => {
  const [product, setProduct] = React.useState([]);
  const [image, setImage] = React.useState(null);
  const navigate = useNavigate();

  const { id } = useParams();

  const getProductById = (id) => {
    return axios.get(`http://localhost:5000/api/v1/products/${id}`);
  };

  React.useEffect(() => {
    getProductById(id)
      .then((response) => {
        // data yang diterima dari server
        setProduct(response.data.data);
        console.log(response.data.data);
        setImage(response.data.data.images[0].filename);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <div className="bg-gray-100">
        <Header />
        <main className="container max-w-5xl mx-auto flex flex-row mt-9  ">
          <section className=" basis-[40%] mt-3">
            <div className=" mx-auto">
              <img
                className="mask mask-circle max-w-[70%]  mx-auto"
                src={`http://localhost:5000/public/uploads/Images/${image}`}
                alt="Shoes"
              />
            </div>
            <h1 className="text-center font-extrabold text-5xl text-black">
              {product.title}
            </h1>
            <h3 className="text-center font-bold text-xl text-black">
              IDR {product.price}
            </h3>
            <div className="text-center">
              <button className="btn btn-primary border border-black w-3/4 my-5   py-2 bg-[#6A4029] hover:bg-amber-800 text-white">
                Add to Cart
              </button>
              <button
                onClick={() => navigate("/editproduct")}
                className="btn btn-primary border border-black w-3/4 my-5   py-2 bg-[#FFBA33] hover:bg-amber-700 text-[#6A4029]"
              >
                Edit Product
              </button>
              <button className="btn btn-primary border border-black w-3/4 my-5   py-2 bg-black hover:bg-gray-700 text-white">
                Delete Product
              </button>
            </div>
          </section>

          <section className="  ml-3 basis-[60%] mt-7 ">
            <div className="w-3/4 my-5 mx-auto y-2 bg-white rounded-xl">
              <h2 className="px-24 pt-4">
                Delivery only on <b className="font-bold">Monday to Friday </b>
                at <b className="font-bold"> 1 - 7 pm</b>
              </h2>
              <p className="mt-2 px-24">
                Cold brewing is a method of brewing that combines ground coffee
                and cool water and uses time instead of heat to extract the
                flavor. It is brewed in small batches and steeped for as long as
                48 hours.
              </p>
              <h3 className="font-bold text-center mt-4">Choose a size</h3>
              <div className="flex flex-row mt-4 justify-around mb-4">
                <button className="btn rounded-full border-[#9F9F9F] bg-[#FFBA33] text-[#000000] hover:bg-[#6A4029] hover:text-[#FFFFFF]">
                  R
                </button>
                <button className="btn rounded-full border-[#9F9F9F] bg-[#FFBA33] text-[#000000] hover:bg-[#6A4029] hover:text-[#FFFFFF]">
                  M
                </button>
                <button className="btn rounded-full border-[#9F9F9F] bg-[#FFBA33] text-[#000000] hover:bg-[#6A4029] hover:text-[#FFFFFF]">
                  XL
                </button>
              </div>
            </div>
            <h3 className="font-bold text-center mt-4">
              Choose Delivery Methodse
            </h3>
            <div className="flex flex-row mx-[8rem] mt-4">
              <button className="btn btn-primary mx-auto border-[#9F9F9F] bg-[#F4F4F8] text-[#9F9F9F] hover:bg-[#6A4029] hover:text-[#FFFFFF]">
                Dine in
              </button>
              <button className="btn btn-primary mx-auto border-[#9F9F9F] bg-[#F4F4F8] text-[#9F9F9F] hover:bg-[#6A4029] hover:text-[#FFFFFF]">
                Door Delivery
              </button>
              <button className="btn btn-primary mx-auto border-[#9F9F9F] bg-[#F4F4F8] text-[#9F9F9F] hover:bg-[#6A4029] hover:text-[#FFFFFF]">
                Pick up
              </button>
            </div>
            <div className="flex flex-row justify-around  mt-4">
              <h2 className="self-center"> Set Timer : </h2>
              <input
                type="text"
                placeholder="Enter the time you’ll arrived "
                className="input input-ghost w-full max-w-xs hover:border-b-black"
              />
            </div>
          </section>
        </main>
        <section className="container max-w-5xl mx-auto flex flex-row mt-4">
          <div className="basis-[70%]  flex flex-row bg-white justify-around m-[3rem] p-2 drop-shadow-xl rounded-xl">
            <div className="">
              <img
                className="mask mask-circle max-w-[30%]  p-0 mx-auto"
                src="https://placeimg.com/200/280/arch"
                alt="Shoes"
              />
            </div>
            <div classsName="flex flex-col">
              <h1 className="font-bold"> {product.title}</h1>
              <h2>x1 Medium</h2>
              <h2>x1 Reguler</h2>
            </div>
            <div className="">jumlah</div>
          </div>
          <div className="basis-[30%] m-auto">
            <button className="p-8 ml-10 mr-10  text-center bg-[#FFBA33] text-black rounded-xl">
              Check Out
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default ProductsDetails;
