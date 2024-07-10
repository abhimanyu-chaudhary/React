import Forward from "./Forward";

function Forwards(){
    const data = [{title: "Forward", subtitle: "Thinking", text: "Redefining the creative world with design, innovation, and forward-thinking as a leading Webflow Agency.", video: "https://cdn.refokus.com/website/people-short.webm", caption: "Refokus 2022 Offsite: Where Work Meets Play, Innovation, and Homemade Pasta."}]
    return(
        <div className="pb-20">
            {data.map((elem, index) => {
                return <Forward val={elem} />
            })}
        </div>
    )
}
export default Forwards;