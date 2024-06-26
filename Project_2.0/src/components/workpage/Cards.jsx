import Card from "./Card";

function Cards({title, matter, texts}){
    return(
        <div className="max-w-screen-xl mx-auto flex gap-1 pt-52">
            <Card width={"basis-1/3"} project={false} text={true} title={title ? title :  "Up Next: News"} matter={matter ? matter : "Insights and behind the scenes"} texts={texts ? texts : "Explore what drives our team."} />
            <Card width={"basis-2/3"} project={true} text={false} title={"Get In Touch"} matter={"Let's get to it, together."} hover= "true" />
        </div>
    )
}
export default Cards;