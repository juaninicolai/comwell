
"use client"
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

function Navbar() {
  const [useremail, setUseremail]= useState("");
  //const cookies = useCookies();
  //const token = cookies.get("jwt");


  useEffect(()=>{
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      setUseremail(localStorage.getItem("username"));
    }

  },[])

  /*
  import { useCookies } from 'next-client-cookies';


  function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}
  const userDetails =parseJwt(token);
  console.log(userDetails);
  //"657dcfad74850362c8408ae7"

*/

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

            {useremail ? (
            // If the user is logged in, display their email
            <div>
               <span className="mr-5">{useremail}

                  </span>
                  <span>
                    <Link href={"/Logout"}>
                    Logout
                  </Link>
                  </span>
            </div>
           

          ) : (
            // If the user is not logged in, display the login button
            <div>
              <Link href={"/Login"}>
              Login
            </Link>
          
            </div>
            
            
          )
          }

            
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
