import { useContext, useEffect, useState } from "react";
import { Product } from "../../pages/products/Products";
import styles from "./product-info.module.css";
import ProductBtn from "../product-btn/ProductBtn";
import {
  SelectedItem,
} from "../../context/SelectedProductsContextProvider";
import { SelectedProductsContext } from "../../context/SelectedProductsContext";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product | null;
  category?: string;
};

const ProductInfo = ({ product, category }: Props) => {
  const context = useContext(SelectedProductsContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const item = context?.selectedItems?.find(
    (item) => item.product.id === product?.id
  );

  useEffect(() => {
    if (item?.amount) {
      setCount(item?.amount);
    }
  }, [item?.amount]);

  //add to cart
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

  // Function to format the price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };


  return (
    <section className={styles.section}>
      <div data-aos="fade-up" className={`${styles.infoContainer} container`}>
        <div className={styles.upperSection}>
          <button
            onClick={() => {
              navigate(`/products/${category}`);
            }}
            className={styles.backBtn}
          >
            Go Back
          </button>
          <img
            className={styles.img}
            src={`/${product?.image.desktop}`}
            alt="#"
          />
        </div>
        <div className={styles.info}>
          {product?.new && <span className={styles.newProduct}>New Product</span>}
          <h2 className={styles.heading}>{product?.name}</h2>
          <p className={styles.p}>{product?.description}</p>
          <h3>{formatPrice(product?.price ?? 0)}</h3>
          <div className={styles.btnContainer}>
            <ProductBtn
              product={product}
              count={count}
              setCount={setCount}
              size="medium"
            />
            <button
              onClick={addToCart}
              disabled={count === item?.amount}
              style={{
                background:
                  count === item?.amount
                    ? "var(--color-secondary)"
                    : "var(--color-primary)",
                cursor: count === item?.amount ? "not-allowed" : "pointer",
              }}
              className={styles.addToCartBtn}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
