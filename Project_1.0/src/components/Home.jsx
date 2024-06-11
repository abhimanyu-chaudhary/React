import Nav from "./Nav";

function Home(){
    return(
        <div className="flex ">
            <div className=" w-[20%] h-screen bg-zinc-300">
                <Nav />
            </div>
            <div className=" w-[80%] h-screen bg-red-300">
                <h1></h1>
            </div>
        </div>
    )
}
export default Home;