/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import {
  SelectedItem,
  SelectedProductsContext,
} from "../../context/SelectedProductsContext";
import styles from "./product-btn.module.css";
import { Product } from "../../pages/products/Products";

type Props = {
  product: Product | null;
  size?: "small" | "medium";
  count: number;
  setCount?: Dispatch<SetStateAction<number>>;
};

const ProductBtn = ({ product, size = "medium", count, setCount }: Props) => {
  const context = useContext(SelectedProductsContext);

  const item = context?.selectedItems?.find(
    (item) => item.product?.id === product?.id
  );
  // clicking on plus //
  const handleClickPlus = () => {
    if (!item) {
      addNewProduct();
    } else {
      IncreaseExistingProduct();
    }
  };
  // When amount > 0
  const IncreaseExistingProduct = () => {
    const newProducts = context?.selectedItems?.map((currItem) => {
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
      context?.setSelectedItems(newProducts);
    }
  };
  // When amount is 0
  const addNewProduct = () => {
    if (!product) return;

    const newItem: SelectedItem = {
      amount: 1,
      product: product,
    };

    context?.setSelectedItems([...(context.selectedItems || []), newItem]);
  };
  //
  // useEffect(() => {
  //   console.log(context?.selectedItems, item);
  // }, [context?.selectedItems, item]);

  /// clicking on minus

  const handleClickMinus = () => {
    if (!item) return;

    if (item.amount === 1) {
      removeProduct();
    } else {
      decreaseProductAmount();
    }
  };

  const removeProduct = () => {
    const newProducts = (context?.selectedItems || []).filter((currItem) => {
      if (currItem.product.id === item?.product.id) {
        return false;
      } else {
        return true;
      }
    });

    if (newProducts) {
      context?.setSelectedItems(newProducts);
    }
  };
  const decreaseProductAmount = () => {
    const newProducts = (context?.selectedItems || []).map((currItem) => {
      if (currItem.product.id === item?.product.id) {
        return {
          ...currItem,
          amount: currItem.amount - 1,
        };
      } else {
        return currItem;
      }
    });
    if (newProducts) {
      context?.setSelectedItems(newProducts);
    }
  };

  return (
    <div
      className={styles.btnContainer}
      style={{
        height: size === "small" ? "32px" : "48px",
      }}
    >
      <button
        onClick={() => {
          if (count <= 0) return;
          if (setCount) {
            setCount(count - 1);
          } else {
            handleClickMinus();
          }
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          if (setCount) {
            setCount(count + 1);
          } else {
            handleClickPlus();
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default ProductBtn;
