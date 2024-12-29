/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect } from "react";
import {
  SelectedItem,
  SelectedProductsContext,
} from "../../context/SelectedProductsContext";
import styles from "./product-btn.module.css";
import { Product } from "../../pages/Products";

type Props = {
  product: Product | null;
};

const ProductBtn = ({ product }: Props) => {
  const context = useContext(SelectedProductsContext);

  const item = context?.selectedProducts?.find(
    (item) => item.product?.id === product?.id
  );
  // clicking on plus //
  const handleClickPlus = () => {
    if (!item) {
      addNewProduct();
    } else {
      UpdateExistingProduct();
    }
  };
  // When amount > 0
  const UpdateExistingProduct = () => {
    const newProducts = context?.selectedProducts?.map((currItem) => {
      if (currItem.product.id === item?.product.id) {
        return {
          ...currItem,
          amount: currItem.amount + 1,
        };
      } else {
        return currItem;
      }
    });
    if (newProducts) {
      context?.setSelectedProducts(newProducts);
    }
  };
  // When amount is 0
  const addNewProduct = () => {
    if (!product) return;

    const newItem: SelectedItem = {
      amount: 1,
      product: product,
    };

    context?.setSelectedProducts([newItem]);
  }
  //
  useEffect(() => {
    console.log(context?.selectedProducts, item);
  }, [context?.selectedProducts, item]);

  return (
    <div className={styles.btnContainer}>
      <button onClick={() => {}}>-</button>
      <span>{item?.amount || 0}</span>
      <button
        onClick={() => {
          handleClickPlus();
        }}
      >
        +
      </button>
    </div>
  );
}



export default ProductBtn;
