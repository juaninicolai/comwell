"use client";

import React from "react";
import Link from "next/link";


const Hotel = ({ hotelData }) => {
  return (
    <div className="flex  flex-grow max-w-full h-full">
      <div className=" flex hotel flex-col  p-2">
        <img
          className="rounded-sm"
          src={hotelData.img}
          alt={hotelData.name}
          style={{ width: "200px", height: "150px" }}
        />
        <h2>{hotelData.name}</h2>
        <p>Location: {hotelData.location}</p>
        <p>Price: {hotelData.price}</p>
        <div>
          
          {
            /* 
              <Link href={`/HotelDetail?hotelId=${hotelData.id}&name=${hotelData.name}&location=${hotelData.location}`}>
          <button onClick={hotelData.handleBooking} className="btn"> Book </button>
        </Link>
            
            */
          }
          <Link href={`/Search`}>
          <button onClick={hotelData.handleBooking} className="btn"> Book </button>
        </Link>
         
          
        </div>

        {/* Add more data fields as needed */}
      </div>
    </div>
  );
};

export default Hotel;
