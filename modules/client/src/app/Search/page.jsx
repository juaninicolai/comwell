"use client";

import checkLoggedIn from "@/components/CheckLoggedIn";
import React, { useState } from "react";
import Link from "next/link";
import CookieConsent from "@/components/CookieConsent";
import { useCookies } from 'next-client-cookies';


const SearchBar = () => {
  const [hotelName, setHotelName] = useState("");
  const [roomType, setRoomType] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [days, setDays] = useState(0)
  const [flag, setFlag] = useState(true);
  const [price, setPrice] = useState(0)
  const cookies = useCookies();

  const selectedhotel = JSON.stringify({
    hotelName,
    roomType,
    startDate,
    endDate
  })

  
const handleIt = () =>{
  
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);

  const diff = date2 - date1
  const days = diff / (24*60*60*1000);
  
  if(roomType === "normal"){
    setPrice(1000)
  }
  if(roomType === "standard"){
    setPrice(1500)
  }
  if(roomType === "deluxe"){
    setPrice(2000)
  }

const mycookie = getCookie();
console.log(mycookie);
  

  var headers = new Headers();
  headers.append("Cookie",`jwt=${mycookie}`)
  headers.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("name", hotelName);
  urlencoded.append("price", price);
  urlencoded.append("category",roomType);
  urlencoded.append("from",startDate);
  urlencoded.append("to",endDate);

  const bookingOptions = {
    method: 'POST',
    headers: headers,
    body: urlencoded
  }

  console.log(urlencoded);
  console.log(bookingOptions);
  fetch("http://localhost:3001/hotel/booking", bookingOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}


const getCookie = ()=> {
  
  const token = cookies.get("jwt");
  return token;
}

  /*
  function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}
*/
//console.log(parseJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'))


  const handleSearch = async(e) => {
    e.preventDefault();
    
   
    const hotelid = hotelName.split(" ");
    const id = Number(hotelid[0])
    console.log(id);
    const response = await fetch(`http://localhost:3001/hotel/booking`, {
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

  

const Handlebooking = ()=>{

}
  };

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
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64" required
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
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64" required
        >
          <option value="">Select Category</option>
          <option value="normal">Normal</option>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
        </select>
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64" required
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-100 w-64" required
        />
          

              <Link href={`/HotelDetail?selectedHotel=${selectedhotel}`}>
              <button onClick={handleIt} id="submit" className="btn">
            Book
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
