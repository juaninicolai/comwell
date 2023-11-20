"use client";

import React from "react";

const Hotel = ({ hotelData }) => {
  return (
    <div className="flex flex-grow max-w-full h-full">
      <div className=" flex flex-col hotel p-2">
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
          <button onClick={hotelData.handleBooking} className="btn">
            Book
          </button>
        </div>

        {/* Add more data fields as needed */}
      </div>
    </div>
  );
};

export default Hotel;
