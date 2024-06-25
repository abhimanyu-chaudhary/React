import HomeCard from "./HomeCard";

function HomeCards(){
    const data = [{ img1: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/65493e5d5a9929dadf061029_Rectangle%252015006-p-500.png", cap1: "Why Refokus is the Best Partner to Build Your Venture Capital Website", img2: "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/661c1b5fd7aa742286c16467_webflow%20refokus%20(1).png", cap2: "Webflow Agency Case Study of Refokus as a leading Webflow Enterprise Partner"}]
    return(
        <div className="pb-20">
            {data.map((elem, index) => {
                return <HomeCard val={elem} />
            })}
            
        </div>
    )
}
export default HomeCards;