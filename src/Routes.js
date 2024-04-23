import React from "react";
import {
  BrowserRouter, Route, Routes, Outlet,
  Navigate,
} from "react-router-dom";
import { getFromLocalStorage } from "./utils/localStorage";
import AppContainer from "./containers/AppContainer/AppContainer";
import Login from "./Authentication/Login/Login";
import Signup from "./Authentication/SignUp/Signup";
import Home from "./pages/Home";
import CategoryListing from "./pages/CategoryListing";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import ListingInformation from "./pages/ListingInformation";
import FileUpload from "./pages/FileUpload";
const Router = () => {
  const userType = getFromLocalStorage("userType");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/FileUpload" element={<FileUpload />} />
          <Route exact path="/*" element={<AppContainer />}>
            <Route index element={<Home />} />
              <Route element={<PrivateRoutes />}>
                <Route path="categoryListing" element={<CategoryListing />} />
                <Route path="products" element={<Product />} />
          
                <Route path="productdetails" element={<ProductDetails />} />
                <Route path="listinginfo" element={<ListingInformation />} />
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
const PrivateRoutes = () => {
  const authToken = getFromLocalStorage("authToken");
  return authToken ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  );
};
export default Router;
