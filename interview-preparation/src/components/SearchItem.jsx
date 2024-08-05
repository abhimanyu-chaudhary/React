import React, { useState } from 'react'

function SearchItem() {
    const data = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane", "Bhopal", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Pimpri-Chinchwad", "Kalyan-Dombivli", "Meerut", "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Howrah", "Gwalior", "Jabalpur", "Coimbatore", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubballi-Dharwad", "Tiruchirappalli", "Bareilly", "Mysore", "Tiruppur", "Gurgaon", "Aligarh", "Jalandhar", "Bhubaneswar", "Salem", "Mira-Bhayandar", "Warangal", "Jalgaon", "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai", "Cuttack", "Firozabad", "Kochi", "Bhavnagar", "Dehradun", "Durgapur", "Asansol", "Nanded", "Kolhapur", "Ajmer", "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Nellore", "Jammu", "Sangli-Miraj & Kupwad", "Belgaum", "Mangalore", "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Udaipur", "Maheshtala", "Davanagere", "Kozhikode", "Akola", "Kurnool", "Rajahmundry"]

    const [searchItems, setSearchItems] = useState('');

    const filteredItems = data.filter((item) => 
        item.toLowerCase().includes(searchItems.toLowerCase())
    )

  return (
    <div className='flex'>
        <div className='w-[40vw] items-center my-auto px-10'>
            <input className='w-72 h-10 border-2' type="text" onChange={(e) => setSearchItems(e.target.value)} />
        </div>
        <div className='flex flex-col flex-wrap w-[60vw] h-[100vh]'>
        {filteredItems.map((item, index) => (
            <div key={index} className=''> 
                <li>
                    {item}
                </li>
            </div>
        ))}
        </div>
    </div>
  )
}

export default SearchItem;
