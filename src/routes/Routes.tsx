import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import MainLayout from "../layouts/MainLayout";

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