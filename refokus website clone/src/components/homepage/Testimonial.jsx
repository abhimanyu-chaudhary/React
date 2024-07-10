function Testimonial({val, show}){
    return(
        <div style={{display: show  ? "flex" : "none"}} className="max-w-screen-md mx-auto gap-10 items-center">
            <div className="1/3">
                <img className="w-64 h-64 rounded-xl object-cover" src={val.image} alt="" />
            </div>
            <div className="flex flex-col w-2/3 gap-5 ">
                <p className="text-base">{val.matter}</p>
                <div>
                    <p className="font-semibold text-sm">{val.name}</p>
                    <span className="text-xs text-zinc-400">{val.role}</span>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;