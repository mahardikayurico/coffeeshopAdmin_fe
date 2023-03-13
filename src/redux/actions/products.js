import axios from "axios";

const getAllProductsLoading = () => {
  return {
    type: "GET_PRODUCTS_LOADING",
  };
};

const getAllProductsSuccess = (data) => {
  return {
    type: "GET_PRODUCTS_SUCCESS",
    payload: data,
  };
};
const getAllProductsFail = (err) => {
  return {
    type: "GET_PRODUCTS_FAIL",
    payload: err,
  };
};

const getAllProducts = () => {
  return (dispatch) => {
    dispatch(getAllProductsLoading());
    return axios
      .get("http://localhost:5000/api/v1/products")
      .then((res) => {
        dispatch(getAllProductsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getAllProductsFail(err.response.data));
      });
  };
};

export default getAllProducts;
