import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

function Nav(){
    const [product] = useContext(ProductContext);
    const [uniqueCategory, setUniqueCategory] = useState([]);

    useEffect(()=>{
        if(product.length > 0){
            const categories = product.map((product)=> product.category);
            const uniqueCategory = [...new Set(categories)];
            setUniqueCategory(uniqueCategory);
        }
    },[product])

    let color = () => {
        return `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}, 1)`;
    }

    
    return(
        <>
            <div className="py-5 pl-7 bg-zinc-100">
                    <img className="w-36 mx-10 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png" alt="" />
                    <button className="my-2 px-4 py-1 bg-slate-50 border border-slate-900 rounded-md">Add Product</button>
                    {uniqueCategory.map((category, index)=> (
                        <Link key={index} to={`/?category=${category}`} className=" flex items-center gap-2 mb-2" style={{ listStyleType: 'disc' }}>
                            <span style={{backgroundColor: color()}} className="rounded-lg h-4 w-4 bg-red-900"></span>{category.toUpperCase()}
                        </Link>
                    ))}
                                  
            </div>
        </>
    )
}
export default Nav;