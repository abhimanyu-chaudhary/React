function Footer(){
    return(
        <div className="w-full pb-10 pt-6 ">
            <div className="max-w-screen-xl mx-auto flex justify-between">
                <div className="flex text-sm gap-8 text-zinc-500">
                    {["Privacy Policy", "Cookie Policy", "Impressum", "Terms", "Webflow Agency"].map((item, index)=>{
                        return <a key={index} className="" href="#">{item}</a>
                    })}
                </div>
                <div>
                    <a href="#">
                        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;