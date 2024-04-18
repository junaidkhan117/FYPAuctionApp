import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContainer from "./containers/AppContainer/AppContainer";
import Login from "./Authentication/Login/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import CategoryListing from "./pages/CategoryListing";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import ListingInformation from "./pages/ListingInformation";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/*" element={<AppContainer />}>
            <Route index element={<Home />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="categoryListing" element={<CategoryListing />} />
          <Route path="products" element={<Product />} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="listinginfo" element={<ListingInformation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
