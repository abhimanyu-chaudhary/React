function ProductPage(){
    return(
        <div className="w-full flex justify-center items-center h-screen bg-slate-100 ">
            <div to="products/2" className="w-[293px] h-[360px] mx-5 pt-2 my-5 flex items-center flex-col mt-10">
                    <img className="rounded-md w-[75%] h-[80%] mb-3 " src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
            </div>
            <div className="relative flex flex-col m-0 w-[30%] items-start">
                <h1 className="text-xl font-semibold text-center my-3">Mens Casual Premium Slim Fit T-Shirts</h1>
                <p className="text-sm italic">Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                "category": "men's clothing</p>
                <p className="my-2 font-semibold text-xl mb-10">Price: Rs.22.3/-</p>
                <p className="  bg-red-500 px-1 py-1 font-semibold ">4.1 out of 259 ratings.</p>
            </div>
        </div>
    )
}
export default ProductPage;