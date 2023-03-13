import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getAllProducts from "../../redux/actions/products";

const CardProducts = (props) => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllProducts()), []);

  return (
    <div className="mt-10 grid grid-cols-4 gap-7 p-3 mx-[1rem]">
      {products.map((item) => (
        <div
          onClick={() => navigate(`/products/${item.id}`)}
          className="card bg-base-100 shadow-xl  hover:cursor-pointer "
        >
          <figure>
            <img
              className="rounded-full h-28 w-28 shadow-xl mt-2"
              src={`http://localhost:5000/public/uploads/Images/${item.images[0].filename}`}
              alt="Shoes"
            />
          </figure>
          <div className="card-body  items-center text-center p-1 mt-2 mb-2">
            <h2 className="card-title font-bold">{item.title}</h2>
            <p>IDR {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProducts;
