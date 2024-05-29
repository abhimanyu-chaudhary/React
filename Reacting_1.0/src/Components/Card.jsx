import React from "react";

function Card() { 
  const data = [
        {name: "Amazon Basics", image: "https://images.unsplash.com/photo-1643208589889-faf52730d672?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Get the best amazing amazon deals available ever for you!", stock: true},
        {name: "Flipkart Deals", image: "https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Find your best iPhone at the most affordable price!", stock: false},
        {name: "Meesho Finds", image: "https://www.livemint.com/lm-img/img/2023/08/02/1600x900/1500x500_1690962412809_1690962437004.jpg", description: "All your daily use needs are available at one place!", stock: true}
  ]
  
  const buttonHandler = ()=>{alert("Click in Working")};

  return (
    <>
      <div className="w-full h-screen bg-zinc-400 flex justify-center gap-10 items-center">
            {data.map((elem, index) =>(
                <div key={index} className="w-52 h-62 bg-zinc-100 rounded-lg overflow-hidden cursor-pointer">
                    <div className="w-full h-32 bg-zinc-300">
                        <img className="w-full h-full object-cover" src={elem.image} alt=""/>
                    </div>
                    <div className="w-full py-4 px-3">
                        <h2 className=" font-medium ">{elem.name}</h2>
                        <p className="text-xs mt-2">
                            {elem.description}
                        </p>
                        <button onClick={buttonHandler} className={`mt-2 text-xs px-2 py-1 rounded ${elem.stock ? "bg-blue-600" : "bg-red-600" }`}>{elem.stock ? "Available" : "Out of Stock"}</button>
                    </div>
                    
                </div>
            ))}
      </div>
    </>
  );
}

export default Card;
