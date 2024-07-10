import React from "react";

function Menu(){
    const data = [
        {
            image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            restaurant: "Chinese Wok", 
            rating: 4.3, 
            time: "20-25", 
            category: "Chinese, Asian", 
            location: "Whitefield"},
        {   
            image: "https://images.unsplash.com/photo-1539755530862-00f623c00f52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            restaurant: "Barbeque Nation", 
            rating: 4.5, 
            time: "30-42", 
            category: "North India, Barbeques", 
            location: "Whitefield Road"},
        {
            image: "https://plus.unsplash.com/premium_photo-1683862104621-68905439b34f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            restaurant: "McDonald's",
            rating: 4.1,
            time: "18-22",
            category: "Burger, Beverages",
            location: "Brookefield"
        },
        {
            image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            restaurant: "Burger King",
            rating: 4.3,
            time: "10-22",
            category: "Burger, Fries",
            location: "Downtown"
        },
        {
            image: "https://images.unsplash.com/photo-1637290742802-3c8a0f5bd49b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            restaurant: "Starbucks",
            rating: 4.5,
            time: "6-20",
            category: "Coffee, Pastries",
            location: "City Center"
        },
        {
            image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            restaurant: "Subway",
            rating: 4.0,
            time: "11-21",
            category: "Sandwiches, Salads",
            location: "Market Street"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1684351369708-0eecc53e2691?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            restaurant: "KFC",
            rating: 4.2,
            time: "10-23",
            category: "Chicken, Beverages",
            location: "High Street"
        },
        {
            image: "https://images.unsplash.com/photo-1620174645265-05820da4ff20?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            restaurant: "Pizza Hut",
            rating: 4.4,
            time: "11-23",
            category: "Pizza, Sides",
            location: "Riverdale"
        },
        {
            image: "https://images.unsplash.com/photo-1533136872-c5d7b7b800ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            restaurant: "Dunkin' Donuts",
            rating: 4.1,
            time: "5-20",
            category: "Donuts, Coffee",
            location: "Main Avenue"
        },
        {
            image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            restaurant: "Taco Bell",
            rating: 4.0,
            time: "10-21",
            category: "Tacos, Burritos",
            location: "East Side"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661578560434-43909d3cc301?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            restaurant: "Chipotle",
            rating: 4.3,
            time: "11-22",
            category: "Mexican, Bowls",
            location: "West End"
        },
        {
            image: "https://images.unsplash.com/photo-1683214048601-73071d2d95e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            restaurant: "Five Guys",
            rating: 4.5,
            time: "11-23",
            category: "Burgers, Fries",
            location: "Uptown"
        }
    ]
    return(
        <>
            <div className="w-full h-full bg-slate-50 flex flex-wrap gap-4 p-20 items-center justify-center">
                {data.map((elem, index)=>(
                <div key={index} className="w-60 h-72 mt-5 cursor-pointer transform transition-transform duration-150 hover:scale-95">
                    <div className="w-full h-38 relative object-cover">
                        <img className="relative w-full h-44 object-cover rounded-2xl" src={elem.image} alt="" />
                        <p className="absolute bottom-0 w-full h-44 bg-gradient-to-t from-slate-950 to-white-300 rounded-2xl"></p>
                        <p className="text-white absolute bottom-1 left-2 font-extrabold text-2xl">50% OFF UPTO 100</p>
                    </div>
                    <div className="w-full flex flex-col mx-3 mt-2 gap-0 h-34">
                        <p className="text-base font-bold">{elem.restaurant}</p>
                        <div className="flex flex-row gap-1 items-center justify-start font-bold mt-[-5px]">
                            <p className="text-2xl text-green-900">&#10026;</p>
                            <p>{elem.rating}</p>
                            <p>-</p>
                            <p>{elem.time}</p> 
                            <p>mins</p>
                        </div>
                        <p>{elem.category}</p>
                        <p>{elem.location}</p>
                    </div>
                </div>
                ))}

            </div>

        </>
    )
}

export default Menu;