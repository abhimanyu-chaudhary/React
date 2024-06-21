function Stripe({val}){
    return(
        <div className="w-full">
            <div className="w-[20vw] py-5 px-6 flex justify-between items-center border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-400">
                <img src={val.url} alt="" />
                <p>{val.number}</p>
            </div>
        </div>
        
    )
}

export default Stripe;