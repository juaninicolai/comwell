

"use client"


import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';

function HotelDetail() {
  const [totalAmount,setTotalAmount] = useState(0)



    const searchParams = useSearchParams();
    const selectedhotel  = searchParams.get('selectedHotel');
    const bookingHotel = JSON.parse(selectedhotel);
    /*
    const startDate = selectedhotel.startDate;
    const endDate = selectedhotel.endDate;
    const type = selectedhotel.roomType;
    const arr = type.split(" ");
    const price = arr[0];

    
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);

  const diff = date2 - date1
  const days = diff / (24*60*60*1000);
  const finalPrice = Number(price) * days;

    console.log(selectedhotel);
    */
  return (

    <div className=" login flex flex-col items-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="mt-20 ml-20 search">
    <h1 className='text-decoration-line: underline text-slate-950	'>Your booking Details </h1>
    <div className="borderbox">
      
    <div>Hotel Name: {bookingHotel.hotelName}</div>
    <div>From: {bookingHotel.startDate}</div>
    <div>To: {bookingHotel.endDate}</div>
    <div>Price:{bookingHotel.roomType} DKK </div>


      </div>
      <Link href={`/Pay?amount=${totalAmount}`}>
              <button id="submit" className="btn">
            Pay
          </button>
        </Link>
    
    

    </div>
    </div>
  )
}

export default HotelDetail