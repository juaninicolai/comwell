
"use client"
import Link from "next/link";
import React from "react";
import { useCookies } from 'next-client-cookies';

function Navbar() {
  let useremail = "";
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    useremail = localStorage.getItem("username");
  }

  
  const cookies = useCookies();
  const token = cookies.get("jwt");

  function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}
  const userDetails =parseJwt(token);
  console.log(userDetails);
  //"657dcfad74850362c8408ae7"



  return (
    <header className="fixed top-0 w-full">
      <nav className="  navbar h-30 py-2 font-semibold px-3 flex justify-between  ">
        <div className="logo">
          {" "}
          <Link href={"/"}>
            <img src="Logo.png" alt="logo" />
          </Link>
        </div>

        <ul className="flex space-x-3">
          <li>
            {" "}
            <Link href={"/Search"}>Search Hotels</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/Hotels"}>Locations</Link>{" "}
          </li>
          <li>
            {" "}

            {useremail ? (
            // If the user is logged in, display their email
            <span>{useremail}
            <div>
            <Link href={"/Logout"}>
              Logout
            </Link>
            </div>
            
            </span>
            

          ) : (
            // If the user is not logged in, display the login button
            <Link href={"/Login"}>
              Login
            </Link>
          )}

            
          </li>
          <li>
            {" "}
            
            <Link href={"/"}>Menu</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
