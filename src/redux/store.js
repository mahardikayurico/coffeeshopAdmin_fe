import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import productReducers from "./reducers/products";
import thunk from "redux-thunk";

const reducer = combineReducers({
  products: productReducers,
  //users : usersReducers
});

const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk));
  return { store };
};

export default configureStore;
