import Button from "../workpage/Button";

function Forward({val}){
    return(
        <div className="max-w-screen-xl mx-auto flex ">
            <div className="w-1/2 flex flex-col">
                <div className="mt-[-6rem] z-10 ">
                    <h1 className="text-[10rem] font-medium ">{val.title}</h1>
                    <h1 className="text-[10rem] font-medium mt-[-6rem] ml-24">{val.subtitle}</h1>
                </div>
                <p className="text-lg ml-[5rem] w-[25vw] font-normal mb-10">{val.text}</p>
                <span className="ml-[5rem] font-semibold"><Button title="News & Insights"/></span>
            </div>
            <div className="w-1/2 z-auto">
                <video className="rounded-2xl w-[43vw] z-0" src={val.video} autoPlay muted loop></video>
                <p className="text-xl mt-6">{val.caption}</p>
            </div>
        </div>
    )
}
export default Forward;