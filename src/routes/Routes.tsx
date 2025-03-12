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
      <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/single-product/:slug" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
