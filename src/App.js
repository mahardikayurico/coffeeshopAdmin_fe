import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePages,
  Login,
  SignUp,
  ForgotPassword,
  Products,
  NewProduct,
  EditProduct,
  ProductsDetails,
  User,
  Message,
  Cart,
  History,
} from "./pages";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  const { store } = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/editproduct" element={<EditProduct />} />
          <Route path="/user" element={<User />} />
          <Route path="/message" element={<Message />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
