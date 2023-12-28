

"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'


function Final() {
const searchParams = useSearchParams();
const bookingId = searchParams.get("id");


  return (
    <div className="login flex flex-col items-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="mt-20 ml-20 flex  flex-wrap mt-20">
        <h1>Your booking confirmation id: {bookingId}</h1>
    </div>

    </div>
  )
}

export default Final