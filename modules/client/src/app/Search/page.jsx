"use client";

import checkLoggedIn from "@/components/CheckLoggedIn";
import React, { useState } from "react";
import Link from "next/link";
import CookieConsent from "@/components/CookieConsent";
import { useCookies } from 'next-client-cookies';


const SearchBar = () => {
  const [hotelId, setHotelId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
 
  const cookies = useCookies();


  const selectedhotel = JSON.stringify({
    hotelId,
    startDate,
    endDate
  })

  




const getCookie = ()=> {
  
  const token = cookies.get("jwt");
  return token;
}

 


  return (
    <>
    <CookieConsent />
    <div className=" login flex flex-col items-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="mt-20 ml-20 search">
      <form
        id="form"
        className=" m-20 flex flex-col justify-start space-y-4"
        action=""
      >
        <select
          id="hotelname"
          value={hotelId}
          onChange={(e) => setHotelId(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64" required
        >
          <option value="">Select HotelName</option>
          <option value="65869d7e9e933cc0ccb4fb5c">Aarhus House</option>
          <option value="65869d7e9e933cc0ccb4fb5d">Odense House</option>
          <option value="65869d7e9e933cc0ccb4fb5e">Copenhagen House</option>
          
        </select>
        <input
          type="date"
          id="startDate"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64" required
        />
        <input
          type="date"
          id="endDate"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64" required
        />
          

              <Link href={`/HotelDetail?hotelId=${hotelId}&startDate=${startDate}&endDate=${endDate}`}>
              <button  id="submit" className="btn">
            Find
          </button>
        </Link>
            
        <div>
          
        </div>
      </form>
    </div>
    </div>
    </>


  );
};

export default SearchBar;
