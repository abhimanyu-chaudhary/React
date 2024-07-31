import React, { useEffect, useState } from 'react'

function Fetch() {
    const [data, setData] = useState();
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/14")
        .then(response => response.json())
        .then((data) => setData(data));
    });

  return (
    <div className='items-center flex flex-col px-20 py-5'>
      {data ? 
      <div>
        <h2>{data.title}</h2>
        <img src={data.image} className='w-[40rem]' />
        <h2>{data.category}</h2>
        <h1>{data.price}</h1>
        <p>{data.description}</p>
      </div> 
       : 
      <h1>Loading...</h1>
    
      }
      
    </div>
  );
}

export default Fetch;
