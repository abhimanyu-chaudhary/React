import Banner from "./Banner";

function Banners(){
    const data = ["Webflow Development", "AI Strategy & Integration", "Creative Strategy", "Branding & Art Direction", "Web Design", "Creative Development", "2D/3D Animations"]
    return(
        <div className="flex items-center mt-[-129px] pb-52 overflow-hidden">
            {data.map((elem, index) => {
                return <Banner val={elem} />
            })}
        </div>
    )
}
export default Banners;