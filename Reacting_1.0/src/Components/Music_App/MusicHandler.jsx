import React, { useState } from "react";
import Music from "./Music";
import Navbar from "./Navbar";

function MusicHandler(){
    const playList = [
        {song: "Sajni Re", artist: "Arijit Singh", image: "https://pngimg.com/d/audio_cassette_PNG92159.png", favourite: false},
        {song: "Kun Faya Kun", artist: "Mohit Chauhan", image: "https://pngimg.com/d/audio_cassette_PNG92159.png", favourite: false},
        {song: "Chal Chaiya Chaiya", artist: "Sukwinder Singh", image: "https://pngimg.com/d/audio_cassette_PNG92159.png", favourite: false},
        {song: "Jal Pari", artist: "Atif Aslam", image: "https://pngimg.com/d/audio_cassette_PNG92159.png", favourite: false},
        {song: "Chandi Jaisa Rang", artist: "Pankaj Udas", image: "https://pngimg.com/d/audio_cassette_PNG92159.png", favourite: false},
        {song: "Maan Ki Lagal", artist: "Rahat Fateh Ali Khan", image: "https://pngimg.com/d/audio_cassette_PNG92159.png", favourite: false},
        {song: "Saathi", artist: "Yama Buddha", image: "https://pngimg.com/d/audio_cassette_PNG92159.png", favourite: false},
    ]
    const [data, setData] = useState(playList);

    const handleClick = (changingIndex, val)=>{
        setData((prev)=>{
            return prev.map((item, index)=>{
                if(index === changingIndex) return (
                    {...item, favourite: !item.favourite}
                    
                ) 
                return item;
            })
        })
    }

    return(
        <>  
            <Navbar data={data} />
            <div className="flex flex-wrap justify-center items-center m-5">
                {data.map((item, index)=>(
                    <Music key={index} index= {index} handleClick={handleClick} song={item.song} artist={item.artist} image={item.image} favourite= {item.favourite} />
                ))}
            </div>
        </>
    )
}
export default MusicHandler;