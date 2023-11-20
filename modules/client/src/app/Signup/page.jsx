'use client'

import React from 'react'
import { useState } from 'react';

function Signup() {
      const [fullName, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [zipcode, setZipcode] = useState('');
      const [gender, setGender] = useState('');
      const [password, setPassword] = useState('');
      const [repassword, setRepassword] = useState('');
      const [birthdate, setBirthdate] = useState('');
    
      const handleSignup = (e) => {
        e.preventDefault();
        if (password === repassword){
          const signupdata = {
            fullName:fullName,
            email: email,
            zipcode: zipcode,
            gender: gender,
            password: password,
            birthdate: birthdate
          }
          console.log(signupdata);
          fetch('http:localhost:8000/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupdata),
          })

        }else{
          alert("password do not match")
          
        }
        


        

        
        
      };
    
      return (
        <div className=" signup flex h-screen">
      <form onSubmit={handleSignup} className="max-w-md ml-20  w-full">
        <h1 className="text-3xl font-bold mb-8 text-center ">Signup Page</h1>
        <div className="mb-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipcode">
            Zip Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zipcode"
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            Gender
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Repeat Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="repassword"
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthdate">
            Birthdate
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="birthdate"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" hover:bg-blue-700 text-white-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;






