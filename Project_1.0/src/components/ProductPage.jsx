function ProductPage(){
    return(
        <div className="flex flex-wrap">
            <div className="w-[210px] h-72 mx-5 pt-2 my-5 relative flex items-center border border-slate-500 rounded-md">
                <img className="rounded-md w-[75%] h-[80%] mb-3 " src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
                <h1 className="w-[80%] h-[80%] font-semibold text-sm text-center">Mens Casual Premium Slim Fit T-Shirts</h1>
                <p className="absolute bottom-[-10px] right-[-5px] px-2 py-1.5 bg-red-500 rounded-full font-semibold">4.1</p>
            </div>

        </div>
    )
}
export default ProductPage;