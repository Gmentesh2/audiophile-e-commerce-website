import { Dispatch, SetStateAction, useContext } from "react";
import { SelectedItem } from "../../context/SelectedProductsContextProvider";
import { SelectedProductsContext } from "../../context/SelectedProductsContext";
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

  const updateProductAmount = (amount: number) => {
    const newProducts = context?.selectedItems?.map((currItem) => {
      if (currItem.product.id === item?.product.id) {
        return {
          ...currItem,
          amount: currItem.amount + amount,
        };
      }
      return currItem;
    });
    if (newProducts) {
      context?.setSelectedItems(newProducts);
    }
  };

  const addNewProduct = () => {
    if (!product) return;

    const newItem: SelectedItem = {
      amount: 1,
      product: product,
    };

    context?.setSelectedItems([...(context.selectedItems || []), newItem]);
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

  // clicking on plus //
  const handleClickPlus = () => {
    if (!item) {
      addNewProduct();
    } else {
      updateProductAmount(1);
    }
  };

  /// clicking on minus

  const handleClickMinus = () => {
    if (!item) return;

    if (item.amount === 1) {
      removeProduct();
    } else {
      updateProductAmount(-1);
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
