const initialState = { loading: false, data: {}, error: {} };
const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_PRODUCTS_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducers;
