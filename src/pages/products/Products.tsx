/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import CategorySection from "../../components/category-section/CategorySection";
import ThumbnailSection from "../../components/thumbnail-section/ThumbnailSection";

export type Product = {
  id: string;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: Gallery;
  others: OtherProduct[];
};

export type ImageSet = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type IncludeItem = {
  quantity: number;
  item: string;
};

export type Gallery = {
  first: ImageSet;
  second: ImageSet;
  third: ImageSet;
};

export type OtherProduct = {
  slug: string;
  name: string;
  image: ImageSet;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const params = useParams();
  //console.log(params);

  const getProducts = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    //console.log(data)
    setProducts(data);
  };
  //console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  

  return (
    <div>
      <CategorySection category={params.category} />
      {products
        ?.filter((product) => product.category === params.category)
        .map((product, index) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              flexDirection={index % 2 == 0 ? "row-reverse" : "row"}
            />
          );
        })}
        <ThumbnailSection />
    </div>
  );
};

export default Products;
