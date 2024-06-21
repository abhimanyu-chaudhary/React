import Card from "./Card";

function Cards(){
    return(
        <div className="max-w-screen-xl mx-auto flex gap-1 py-52">
            <Card width={"basis-1/3"} project={false} text={true} title={"Up Next: News"} matter={"Insights and behind the scenes"} hover={"bg-zinc-300"} />
            <Card width={"basis-2/3"} project={true} text={false} title={"Get In Touch"} matter={"Let's get to it, together."} hover={"bg-orange-600"} />
        </div>
    )
}
export default Cards;