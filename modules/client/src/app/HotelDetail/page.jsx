

"use client"


import React from 'react'
import { useSearchParams } from 'next/navigation'

function HotelDetail() {

    const searchParams = useSearchParams()
 
    const hotelid = searchParams.get('hotelId')
    const hotelname = searchParams.get('name')





  return (

    
    <div>{hotelid} {hotelname}</div>

  )
}

export default HotelDetail