import React from 'react'

function List() {
    const data = [ "Abhimanyu Chaudhary", "Manisha Chaudhary", "Abhijeet Chaudhary", "Romit Chaudhary", "Aadarsh Chaudhary",  "Aarushi Chaudhary", "Jayanti Chaudhary"]
  return (
    
    <ul>
        
      {data.map((data, index) => {
        return <li key={index}>{data}</li>
      })}
      
    </ul>
    
  )
}

export default List
