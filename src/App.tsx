/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import RoutesConfig from "./routes/Routes";
import SelectedProductsContextProvider from "./context/SelectedProductsContext";

function App() {
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const response = await fetch("http://localhost:3000/products/");
  //   const products = await response.json();
  //   //console.log(products);

  //   setProducts(products);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      <SelectedProductsContextProvider>
        <RoutesConfig />
      </SelectedProductsContextProvider>
    </>
  );
}

export default App;
