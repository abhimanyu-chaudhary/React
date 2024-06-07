import axios from "../Utlis/AxiosHandler";
import React from "react"; 
import { useEffect, useState } from "react";

function Products(){
    const [product, setProduct] = useState([]);

    const getProduct = () =>{
        const api = "/products";

        axios.get("/products").then((product)=>{
            // console.log(product);
            setProduct(product.data);
        }).catch((err)=> 
            console.log(err));
    };
    useEffect(()=>{
        getProduct();
    },[])
    

    return(
        
        <>
            <button onClick={getProduct} className="mx-auto ml-10 items-center text-xl font-semibold mt-10 px-3 py-2 bg-orange-500 rounded-md">
                GET PRODUCT
            </button>

            {product.length > 0 ? product.map((item)=>(
                <div key={item.id} className="bg-orange-300 ml-10 flex justify-center flex-wrap rounded-md gap-5 mt-2">
                            {item.title}
                </div>
            )): <h1 className="ml-10 mt-10">Loading...</h1>}

             
        </>
    )
}
export default Products;