import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
            <div className="w-full h-screen py-4 pl-7">
                    <img className="w-36 mx-10 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png" alt="" />
                    <button className="my-2 px-4 py-1 bg-slate-50 border border-slate-900 rounded-md">Add Product</button>
                    <ul className="mx-5" style={{ listStyleType: 'disc' }}>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                        <li>Category 4</li>
                        <li>Category 5</li>
                    </ul>              
            </div>
        </>
    )
}
export default Nav;