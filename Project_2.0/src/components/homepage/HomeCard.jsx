function HomeCard({val}){
    return(
        <div className="max-w-screen-xl mx-auto flex">
            <div className="w-1/2 flex flex-col items-center">
                <img className="w-[27vw] h-[70vh] rounded-xl" src={val.img1} alt="" />
                <p className="w-[27vw] text-[18px] mt-6">{val.cap1}</p>
            </div>
            <div className="w-1/2 flex flex-col items-center pt-[45vh]">
                <img className="w-[33vw] rounded-xl" src={val.img2} alt="" />
                <p className="w-[33vw] text-[18px] mt-6">{val.cap2}</p>
            </div>
        </div>
    )
}
export default HomeCard;