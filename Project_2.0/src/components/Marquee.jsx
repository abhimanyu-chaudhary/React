function Marquee({imagesUrl}){
    return(
        <div className="flex w-full py-7 gap-20">
            {imagesUrl.map(url => <img className="" src={url} alt="" />)}
        </div>
    )
}

export default Marquee;