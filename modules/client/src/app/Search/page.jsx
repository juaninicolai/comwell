"use client";

import checkLoggedIn from "@/components/CheckLoggedIn";
import React, { useState } from "react";
import Link from "next/link";

const SearchBar = () => {
  const [hotelName, setHotelName] = useState("");
  const [rooms, setRooms] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(0)

  const selectedhotel = JSON.stringify({
    hotelName,
    rooms,
    startDate,
    endDate
  })
  const handleSearch = async(e) => {
    e.preventDefault();
    
   
    const hotelid = hotelName.split(" ");
    const id = Number(hotelid[0])
    console.log(id);
    const response = await fetch(`http://localhost:3001/${id}hotels/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedhotel }),
    });


    console.log(selectedhotel);
    // Implement your search logic here

    if (checkLoggedIn) {
      console.log("if statement");
      return <Link href={"/Login"}> </Link>;
    } else {
      console.log("else is called");
    }

    /*
    console.log('Searching...',hotelName,userType,startDate,endDate,promoCode);
    setHotelName('');
    setEndDate('');
    setUserType('');
    setPromoCode('');
    setStartDate('');
*/

const Handlebooking = ()=>{

}
  };

  return (

    <div className=" login flex flex-col items-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="mt-20 ml-20">
    <div className="search">
      <form
        id="form"
        className=" m-20 flex flex-col justify-start space-y-4"
        action=""
      >
        <select
          id="hotelname"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64"
        >
          <option value="">Select HotelName</option>
          <option value="1 Aarhus">Aarhus</option>
          <option value="2 Borupgaard">Borupgaard</option>
          <option value="3 Snekkersten">Snekkersten</option>
          <option value="4 Bygholm Park">Bygholm Park</option>
          <option value="5 Horsens">Horsens</option>
          <option value="6 Centralværkstedet">Centralværkstedet</option>
          <option value="7 Copenhagen Portside">Copenhagen Portside</option>
          <option value="8 Nordhavn">Nordhavn</option>
          <option value="9 H.C. Andersen Odense">H.C. Andersen Odense</option>
          <option value="10 Odense">Odense</option>
          <option value="11 Holte">Holte</option>
          <option value="12 CHvide Hus Aalborg">Hvide Hus Aalborg</option>
          <option value="13 BKellers Park">Kellers Park</option>
          <option value="14 Snekkersten">Snekkersten</option>
          <option value="15 Børkop">Børkop</option>
          <option value="16 Klarskovgaard">Klarskovgaard</option>
          <option value="17 Korsør">Korsør</option>
          <option value="18 Kolding">Kolding</option>
          <option value="19 Kongebrogaarden">Kongebrogaarden</option>
          <option value="20 Middelfart">Middelfart</option>
          <option value="21 Rebild Bakker">Rebild Bakker</option>
          <option value="22 Holte">Holte</option>
          <option value="23 Varbergs Kusthotell">Varbergs Kusthotell</option>
        </select>
        <select
          id="rooms"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64"
        >
          <option value="">Select rooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64"
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64"
        />


              <Link href={`/HotelDetail?selectedHotel=${selectedhotel}`}>
              <button id="submit" className="btn">
            Book
          </button>
        </Link>
            
          



        <div>
          
        </div>
      </form>
    </div>
    </div>
    </div>

  );
};

export default SearchBar;
