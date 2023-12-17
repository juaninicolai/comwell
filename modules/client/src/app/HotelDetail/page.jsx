

"use client"


import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';

function HotelDetail() {
    const totalAmount = 100;

    const searchParams = useSearchParams();
    const selectedhotel  = searchParams.get('selectedHotel');
    const bookingHotel = JSON.parse(selectedhotel);
    console.log(selectedhotel);
  return (

    <div className=" login flex flex-col items-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="mt-20 ml-20">
    <div className="search">
    <h1 className='text-decoration-line: underline text-slate-950	'>Your booking Details </h1>
    <div className="borderbox">
      
    <div>Hotel Name: {bookingHotel.hotelName}</div>
    <div>Number of rooms: {bookingHotel.rooms}</div>
    <div>From: {bookingHotel.startDate}</div>
    <div>To: {bookingHotel.endDate}</div>

      </div>
      <Link href={`/Pay?amount=${totalAmount}`}>
              <button id="submit" className="btn">
            Pay
          </button>
        </Link>
    
    

    </div>
    </div>
    </div>
  )
}

export default HotelDetail