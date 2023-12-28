"use client"

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';
import { useCookies } from 'next-client-cookies';
function Pay() {
    const searchParams = useSearchParams();
    const[booking, setBooking] = useState();
    const amount  = searchParams.get('price');
    const id = searchParams.get('id');
    const roomType = searchParams.get('hotelname');
    const useremail = localStorage.getItem("username");
    const capacity = searchParams.get('capacity');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const hotelId = searchParams.get('hotelId');
    const idArray = hotelId.split("-");
    const hotelName = idArray[1];
    const cookies = useCookies();
    const token = cookies.get("jwt");
    console.log("token",token);
    let payLoad = undefined;

    const handleBooking = () =>{
    const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        headers.append("Content-Type", "application/json");

        payLoad = JSON.stringify({
          "roomType": roomType,
          "from": startDate,
          "to": endDate
});

    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: payLoad,
};

fetch(`http://localhost:3001/hotels/${id}/book`, requestOptions)
  .then(response => response.text())
  .then(result => setBooking(result))
  .catch(error => console.log('error', error));
    }
    

    

  return (
    <div className=" login flex flex-col items-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="mt-20 ml-20 search">
    
    <h1 className='p-3 text-decoration-line: underline text-slate-950	'>Your Booking  Details:</h1>
    
    <div className="borderbox">

    <h1>Email: <strong>{useremail}</strong></h1>
    <h1>Hotel: <strong>{hotelName}</strong></h1>
    <h1>Room Type: <strong>{roomType}</strong></h1>
    <h1>From: <strong>{startDate}</strong></h1>
    <h1>To: <strong>{endDate}</strong></h1>
    <h1>No of guest: <strong>{capacity}</strong></h1>
    <h1>Your payment amount is: <strong>{2000}DKK</strong></h1>
  
            
            <Link href={`/Final?id=${id}`}>
            <button className="w-50 h-20" onClick={() => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Crumb?"
    )
    if (confirmBox === true) {
      handleBooking()
    
    }
  }}>
    confirm
</button>
            </Link>


    
    
 



    </div>
    </div>
    </div>
  )
}

export default Pay