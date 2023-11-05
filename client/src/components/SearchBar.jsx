'use client'
import React, { useState } from 'react';

const SearchBar = () => {
  const [hotelName, setHotelName] = useState('');
  const [userType, setUserType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching...',hotelName,userType,startDate,endDate,promoCode);
    setHotelName('');
    setEndDate('');
    setUserType('');
    setPromoCode('');
    setStartDate('');

  };

  return (
    <div className="flex flex-col items-center space-y-4">
       <select
        value={userType}
        onChange={(e) => setHotelName(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gray-100 w-64"
      >
        <option value="">Select HotelName</option>
        <option value="Aarhus">Aarhus</option>
        <option value="Borupgaard">Borupgaard</option>
        <option value="Snekkersten">Snekkersten</option>
        <option value="Bygholm Park">Bygholm Park</option>
        <option value="Horsens">Horsens</option>
        <option value="Centralværkstedet">Centralværkstedet</option>
        <option value="Copenhagen Portside">Copenhagen Portside</option>
        <option value="Nordhavn">Nordhavn</option>
        <option value="H.C. Andersen Odense">H.C. Andersen Odense</option>
        <option value="Odense">Odense</option>
        <option value="Holte">Holte</option>
        <option value="CHvide Hus Aalborg">Hvide Hus Aalborg</option>
        <option value="BKellers Park">Kellers Park</option>
        <option value="Snekkersten">Snekkersten</option>
        <option value="Børkop">Børkop</option>
        <option value="Klarskovgaard">Klarskovgaard</option>
        <option value="Korsør">Korsør</option>
        <option value="Kolding">Kolding</option>
        <option value="Kongebrogaarden">Kongebrogaarden</option>
        <option value="Middelfart">Middelfart</option>
        <option value="Rebild Bakker">Rebild Bakker</option>
        <option value="Holte">Holte</option>
        <option value="Varbergs Kusthotell">Varbergs Kusthotell</option>
      </select>




      <select
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gray-100 w-64"
      >
        <option value="">Select User Type</option>
        <option value="child">Child</option>
        <option value="young">Young</option>
        <option value="old">Old</option>
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
      <input
        type="text"
        placeholder="Enter promo code"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gray-100 w-64"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 rounded-lg bg-blue-500 text-white"
      >
        Search Hotels
      </button>
    </div>
  );
};

export default SearchBar;