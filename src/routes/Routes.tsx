import { Route, Routes } from "react-router-dom";

import Checkout from "../pages/checkout/Checkout";
import Products from "../pages/products/Products";
import SingleProduct from "../pages/single-product/SingleProduct";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/products/:category"} element={<Products />}></Route>
        <Route path={"/single-product/:id"} element={<SingleProduct />}></Route>
        <Route path={"/checkout"} element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
