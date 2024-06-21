import Button from "./Button";
function Product({val}){
    return(
        <div  className="w-full py-16 bg-slate-950 hover:bg-green-500 duration-700">
            <div className="max-w-screen-xl mx-auto flex w-full items-center justify-between">
                <h2 className="text-5xl font-semibold">{val.title}</h2>
                {/* <div className="relative w-[35%] h-72 bg-orange-800 left-[5vw] top-[5px] rounded-lg">

                </div> */}
                <div className="w-[45%] px-36 flex flex-col gap-3">
                    <p>{val.description}</p>
                    <div className="flex items-center gap-5">
                        {val.live && <Button title="Live Website" />}
                        {val.case && <Button title="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;