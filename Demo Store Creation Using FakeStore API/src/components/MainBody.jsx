import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import LoadingAnimation from "./Loading";
import axios from "../utils/AxiosHandler";


function MainBody(){
    const [products, setProducts] = useContext(ProductContext);

    const {search} = useLocation();
    const category = decodeURIComponent(search.split("=")[1]);

    const [filteredProduct, setFilteredProduct] = useState(null);

    const getProductCategory = async () => {
        try {
            const {data} = await axios.get(`/products/category/${category}`);  
            setFilteredProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(!filteredProduct || "undefined") setFilteredProduct(products);
        if (category != "undefined") getProductCategory();
    },[category, products]);


    const shortenTitle = (title) => {
        const maxLength = 40; 
        if (title.length > maxLength) {
          return title.slice(0, maxLength) + '...';
        }
        return title;
      };
    return products ? ( 


        <div className="w-screen flex ">
            <Nav className="w-[20%] " />
            <div className="w-[80%] flex flex-wrap">
              {filteredProduct && filteredProduct.map((item, index)=>(
                    <Link key={index} to={`products/${item.id}`} className="w-[210px] h-72 mx-5 pt-2 my-5 relative flex items-center flex-col justify-between border border-slate-500 rounded-md overflow-visible">
                        <img className="rounded-md max-w-[75%] max-h-[75%] mb-3" src={item.image} alt="" />
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="w-[80%] h-[80%] font-semibold text-sm text-center mt-[-100px]">{shortenTitle(item.title)} </h1>
                            <p className={`absolute bottom-[-10px] right-[-5px] px-2 py-1.5 ${item.rating.rate >= 4.0 ? "bg-green-500" : "bg-red-500"} rounded-full font-semibold`}>{item.rating.rate}</p>
                        </div>
                    </Link>
               ))}             
            </div>       
        </div>
        
    ) : (
        <LoadingAnimation />
    )
}
export default MainBody;