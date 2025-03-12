/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../products/Products";
import ProductInfo from "../../components/product-info/ProductInfo";
import ThumbnailSection from "../../components/thumbnail-section/ThumbnailSection";
import YouMayLike from "../../components/you-may-like/YouMayLike";
import AboutProduct from "../../components/about-product/AboutProduct";
import ProductGallery from "../../components/single-product-gallery/ProductGallery";

const SingleProduct = () => {
  const [product, setProduct] = useState<null | Product>(null);
  const { id, slug } = useParams<{ id?: string; slug?: string }>();

  const getProduct = async () => {
    const identifier = id ?? slug;
    if (!identifier) return;
    try {
      const res = await fetch(`http://localhost:3000/products/${identifier}`);
      if (!res.ok) {
        throw new Error(`Product not found: ${res.statusText}`);
      }
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      alert("Failed to fetch product:" + error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [id, slug]);

  return (
    <div>
      <ProductInfo product={product} category={product?.category} />
      <AboutProduct product={product} />
      <ProductGallery product={product} />
      <YouMayLike product={product} />
      <ThumbnailSection />
    </div>
  );
};

export default SingleProduct;
