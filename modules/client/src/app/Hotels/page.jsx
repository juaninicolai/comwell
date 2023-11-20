'use client'
import React from 'react';
import Hotel from '@/components/Hotel';

// remove this code if the backend gets ready

const handleBooking=()=>{
   console.log("button clicked")
   
}
const hotelsData = [
  {
    id:1,
    img:'/room.jpg',
    name: 'Hotel One',
    location: 'Location One',
    price: '$100',
    handleBooking: handleBooking()
  },
  {
    id:2,
    img:'/room.jpg',
    name: 'Hotel Two',
    location: 'Location Two',
    price: '$200',
    handleBooking: handleBooking()
  },
  {
    id:3,
    img:'/room.jpg',
    name: 'Hotel One',
    location: 'Location One',
    price: '$100',
    handleBooking: handleBooking()
  },
  {
    id:4,
    img:'/room.jpg',
    name: 'Hotel Two',
    location: 'Location Two',
    price: '$200',
    handleBooking: handleBooking()
  },
  {
    id:5,
    img:'/room.jpg',
    name: 'Hotel One',
    location: 'Location One',
    price: '$100',
    handleBooking: handleBooking()
  },
  {
    id:6,
    img:'/room.jpg',
    name: 'Hotel Two',
    location: 'Location Two',
    price: '$200',
    handleBooking: handleBooking()
  },
  {
    id:7,
    img:'/room.jpg',
    name: 'Hotel One',
    location: 'Location One',
    price: '$100',
    handleBooking: handleBooking()
  },
  {
    id:8,
    img:'/room.jpg',
    name: 'Hotel Two',
    location: 'Location Two',
    price: '$200',
    handleBooking: handleBooking()
  },
  // Add more hotel data here
];

const App = () => {
  return (
    <div className='flex  flex-wrap mt-20'>
      
      {hotelsData.map((hotel, index) => (
        <div>
            <Hotel key={index} hotelData={hotel} />
        </div>
        
      ))}
    </div>
  );
};

export default App;