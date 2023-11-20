"use client";

import React from "react";
import { useState } from "react";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password === repassword) {
      const signupdata = {
        name: fullName,
        email: email,
        password: password,
      };

      const response = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupdata),
      });

      if (!response.ok) {
        alert("Sign up failed");
        throw new Error("response is not ok");
      }

      let body;
      try {
        body = await response.json();
      } catch {
        alert("Sign up failed");
        throw new Error("can't decode json");
      }

      const { token } = body;
      sessionStorage.setItem("token", token);
      location.href = "/";
    } else {
      alert("password do not match");
    }
  };

  return (
    <div className=" signup flex h-screen">
      <form onSubmit={handleSignup} className="max-w-md ml-20  w-full">
        <h1 className="text-3xl font-bold mb-8 text-center ">Signup Page</h1>
        <div className="mb-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
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
        <button
          type="submit"
          className=" hover:bg-blue-700 text-white-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
