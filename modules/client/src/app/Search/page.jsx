"use client";

import checkLoggedIn from "@/components/CheckLoggedIn";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CookieConsent from "@/components/CookieConsent";
import { useCookies } from "next-client-cookies";

const SearchBar = () => {
  const cookies = useCookies();

  const [hotelId, setHotelId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isInputOk, setIsInputOk] = useState(0);

 

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day = today.getDate().toString().padStart(2, "0");

  // Format the date as "yyyy-MM-dd"
  const formattedDate = year + "-" + month + "-" + day;
  const formattedDate1 = year + "-" + month + "-" + (Number(day)+1);

  const selectedhotel = JSON.stringify({
    hotelId,
    startDate,
    endDate,
  });

  const getCookie = () => {
    const token = cookies.get("jwt");
    return token;
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Hotel"
            >
              <strong>Search hotels</strong>
            </label>
            <select
              id="hotelname"
              value={hotelId}
              onChange={(e) => {
                setHotelId(e.target.value);
                setIsInputOk(isInputOk + 1);
                console.log(isInputOk);
              }}
              className="px-4 py-2 rounded-lg bg-gray-100 w-64"
            >
              <option value="" required>
                Select Hotel Name
              </option>
              <option value="65869d7e9e933cc0ccb4fb5c-Aarhus House ">
                Aarhus House
              </option>
              <option value="65869d7e9e933cc0ccb4fb5d-Odense House">
                Odense House
              </option>
              <option value="65869d7e9e933cc0ccb4fb5e-Copenhagen House">
                Copenhagen House
              </option>
            </select>

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="from"
            >
              Start Date
            </label>

        <input
          type="date"
          id="startDate"
          min={formattedDate}
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            setIsInputOk(isInputOk +1);
            console.log(isInputOk);


          
          }}


          className="px-4 py-2 rounded-lg bg-gray-100 w-64" require
        />

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="to"
            >
              End Date
            </label>
            <input
              type="date"
              min={formattedDate1}
              id="endDate"
              placeholder="End Date "
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setIsInputOk(isInputOk + 1);
                console.log(isInputOk);
              }}
              className="px-4 py-2 rounded-lg bg-gray-100 w-64"
              required
            />

            {isInputOk > 2 ? (
              // If the user is logged in, display their email
              <div>
                <Link
                  href={`/HotelDetail?hotelId=${hotelId}&startDate=${startDate}&endDate=${endDate}`}
                >
                  <button id="submit" className="btn">
                    Find
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <marquee behavior="" direction="">
                  <h1 className="t-white">All fields are mandatory</h1>
                </marquee>
              </div>
            )}

            <div></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
