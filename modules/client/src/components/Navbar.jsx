"use client";
import Link from "next/link";
import React from "react";
function Navbar() {
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
            <Link href={"/Login"}>Profile</Link>{" "}
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
