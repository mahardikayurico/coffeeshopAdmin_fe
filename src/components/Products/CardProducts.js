import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardProducts = (props) => {
  const [data, setData] = React.useState([]);

  // const filteredData = data.filter((item) => item.category === props.category);
  const filteredData =
    props.category === "all"
      ? data
      : data.filter((item) => item.category === props.category);

  const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/products")
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mt-10 grid grid-cols-4 gap-7 p-3 mx-[1rem]">
      {filteredData.map((item) => (
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
