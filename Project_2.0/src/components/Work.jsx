function Work(){
    const images = [
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "50%", left: "48%", isActive: false},
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "52%", left: "47%", isActive: false},
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "54%", left: "52%", isActive: false},
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "48%", left: "50%", isActive: false},
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "56%", left: "44%", isActive: false},
        {url: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "68%", left: "49%", isActive: false},
    ]

    return(
        <div className="w-full">
            <div className="relative max-w-screen-xl mx-auto text-center font-medium">
                <h1 className="text-[40vw] select-none leading-none">work</h1>
                <div className="absolute top-0 left-0 w-full h-full">
                    {images.map((elem, index)=>{
                       return (elem.isActive) && <img className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]" style={{top: elem.top, left: elem.left}} src={elem.url}  alt="" />
                    })}
                </div>
                <p className="text-zinc-500 pb-24 text-base">Web Design, Webflow Development, Creative Development</p>
            </div>
        </div>
    )
}
export default Work;