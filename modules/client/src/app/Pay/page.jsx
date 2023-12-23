"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'

function Pay() {
    const searchParams = useSearchParams();
    const amount  = searchParams.get('amount');

  return (
    <div className=" login flex flex-col items-start  px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="mt-20 ml-20 search">
    
    <h1 className='p-3 text-decoration-line: underline text-slate-950	'>Your Payment Details </h1>
    
    <div className="borderbox">

    <h1>Your payment amount is: <strong>${amount}</strong></h1>

    </div>
    </div>
    </div>
  )
}

export default Pay