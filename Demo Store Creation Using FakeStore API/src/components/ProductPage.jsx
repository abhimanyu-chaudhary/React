import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import LoadingAnimation from "./Loading";
import { useParams } from "react-router-dom";
import axios from "../utils/AxiosHandler";

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  });

  return product ? (
    <div className="w-full flex justify-center items-center h-screen bg-slate-100 ">
      <div className="w-[293px] h-[360px] mx-5 pt-2 my-5 flex items-center flex-col mt-10 overflow-hidden">
        <img
          className="rounded-md w-[75%] h-[80%] mb-3 "
          src={product.image}
          alt=""
        />
      </div>
      <div className="relative flex flex-col m-0 w-[30%] items-start">
        <h1 className="text-xl font-semibold text-center">
          {product.title}
        </h1>
        <h2 className="text-xs font-semibold text-center my-3">
            {(product.category).toUpperCase()}
        </h2>
        <p className="text-sm italic">
          {product.description}
        </p>
        <p className="my-2 font-semibold text-xl mb-10">Price: Rs.{product.price}/-</p>
        <p className={`${product.rating.rate >= 4.0 ? "bg-green-500" : "bg-red-500"} px-1 py-1 font-semibold`}>
          {product.rating.rate} out of {product.rating.count} ratings.
        </p>
      </div>
    </div>
  ) : (
    <LoadingAnimation />
  );
}
export default ProductPage;
