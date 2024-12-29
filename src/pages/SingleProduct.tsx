import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product } from "./Products"
import ProductInfo from "../components/product-info/ProductInfo"
import ThumbnailSection from "../components/thumbnail-section/ThumbnailSection"
import YouMayLike from "../components/you-may-like/YouMayLike"

const SingleProduct = () => {
  const [product, setProduct] = useState<null | Product>(null)
    const params = useParams()
    //console.log(params)

    
  const getProduct = async () => {
    const res = await fetch("http://localhost:3000/products/" + params.id);
    const data = await res.json();
    //console.log(data)
    setProduct(data)
  };
  useEffect(() => {
    getProduct()
  })

    // http://localhost:3000/products + params.id
  return (
    <div>
      <ProductInfo product={product} />
      <YouMayLike product={product} />
      <ThumbnailSection />
    </div>
  )
}

export default SingleProduct