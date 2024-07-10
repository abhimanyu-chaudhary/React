import Button from "./../workpage/Button";

function Website({val}){
    return(
        <div style={{backgroundColor: val.color}} className="max-w-screen-xl mx-auto p-6 rounded-2xl flex gap-5">
            <div className="w-1/2 flex flex-col gap-5">
                <h1 className="text-3xl font-semibold leading-loose mb-7">{val.title}</h1>
                <img className="rounded-2xl w-[22rem] self-end" src={val.img1} alt="" />
                <img className="rounded-2xl" src={val.img2} alt="" />
            </div>
            <div className="w-1/2">
                <video className="rounded-2xl" src={val.video} autoPlay muted loop></video>
                <div className="p-6 mt-5 flex flex-col gap-4">
                    <p>{val.topic}</p>
                    <h2 className="font-semibold mb-3 text-lg">{val.matter}</h2>
                    <Button title="Visit Website" />
                </div>
            </div>
        </div>
    )
}
export default Website;