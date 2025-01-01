/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Product } from "../../pages/Products";

import styles from "./product-info.module.css";
import ProductBtn from "../product-btn/ProductBtn";
import {
  SelectedItem,
  SelectedProductsContext,
} from "../../context/SelectedProductsContext";

type Props = {
  product: Product | null;
};

const ProductInfo = ({ product }: Props) => {
  const context = useContext(SelectedProductsContext);
  const [count, setCount] = useState(0);
  const item = context?.selectedItems?.find(
    (item) => item.product.id === product?.id
  );
  useEffect(() => {
    if (item?.amount) {
      setCount(item?.amount);
    }
  }, [item?.amount]);
  const addToCart = () => {
    if (count === 0) {
      // delete product
      removeItemFromCart();
    } else {
      // update product
      updateItemAmount();
    }
  };
  const updateItemAmount = () => {
    if (item) {
      changeItemAmount();
    } else {
      // add new item
      addNewProduct();
    }
  };
  const changeItemAmount = () => {
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
  const addNewProduct = () => {
    if (!product) return;
    const newItem: SelectedItem = {
      amount: count,
      product: product,
    };

    context?.setSelectedItems([...(context.selectedItems || []), newItem]);
  };
  const removeItemFromCart = () => {
    if (!item) return;
    const newProducts = context?.selectedItems?.filter((currItem) => {
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

  return (
    <section className={styles.section}>
      <div className={`${styles.infoContainer} container`}>
        <div>
          <img
            className={styles.img}
            src={`/${product?.image.desktop}`}
            alt="#"
          />
        </div>
        <div>
          <h2 className={styles.heading}>{product?.name}</h2>
          <p className={styles.p}>{product?.description}</p>
          <h3>$ {product?.price}</h3>
          <div>
            <ProductBtn product={product} count={count} setCount={setCount} />
            <button onClick={addToCart}
            disabled={count === item?.amount}
            style={{
              background: count === item?.amount ? "var(--color-secondary)" : "var(--color-primary)",
              cursor: count === item?.amount ? "default" : "pointer"
            }} >Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
