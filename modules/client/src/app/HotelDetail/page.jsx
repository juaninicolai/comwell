

"use client"


import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import Hotel from '@/components/Hotel';

function HotelDetail() {
  
  const [hotelDetail, setHotelDetail] = useState([])
  const searchParams = useSearchParams();
  const hotelId  = searchParams.get('hotelId');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  //const bookingHotel = JSON.parse(selectedhotel);
  
  //console.log(hotelId);
  //console.log(startDate);
  //console.log(endDate);
  useEffect(()=>{
    const requestOptions = {
      method: 'GET'
    };
    
    fetch(`http://localhost:3001/hotels/${hotelId}/rooms?from=${startDate}&to=${endDate}`, requestOptions)
      .then(response => response.json())
      .then(result => setHotelDetail(result))
      .catch(error => console.log('error', error));

  },[])

  
   console.log(hotelDetail);
    

    

  
  return (

    <div className="login flex flex-col items-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="mt-20 ml-20 flex  flex-wrap mt-20">
      
    {hotelDetail.map((hotel, index) => (
        <div>


              <Hotel key={index} hotelData={hotel} />
            
          
        </div>
      ))}


      </div>


    </div>
  )
}

export default HotelDetail