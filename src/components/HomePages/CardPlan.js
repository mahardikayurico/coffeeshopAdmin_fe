import React from "react";
import product from "../../assets/img/product1.svg";
import checkproduct from "../../assets/img/checkproduct.svg";

function CardPlan({ title, price, features, isSelect }) {
  return (
    <div
      className={`bg-white rounded-md flex flex-col justify-between items-center  pt-16 pb-8 border ${
        isSelect ? "border-red-500" : "border-gray-300"
      }`}
    >
      <div className="space-y-5 flex flex-col justify-center items-center">
        <img src={product} alt="" className="w-24 h-24 rounded-full" />
        <h3>{title}</h3>
        <div className="space-y-2">
          {features.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-row mr-2 items-center space-x-2 "
              >
                <img
                  src={checkproduct}
                  alt="checkproduct"
                  className="w-3 h-2"
                />
                <div>
                  {val} <div />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-3">{price}</div>
        <button
          className={`border rounded-full py-1 px-10 border-amber-500 ${
            isSelect ? "bg-amber-500 text-white" : "bg-white text-amber-500"
          }`}
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default CardPlan;
