"use client"

import ThemeToggle from "@/components/ThemeToggle";


export default function Navbar() {

  return (

    <nav className="
      flex 
      justify-between 
      items-center 
      p-5 
      shadow-md
    ">


      <h1 className="text-xl font-bold">
        HimShakti App
      </h1>



      <div className="
        flex 
        items-center 
        gap-5
      ">


        <a 
          href="/" 
          className="hover:text-blue-500"
        >
          Home
        </a>


        <a 
          href="/dashboard" 
          className="hover:text-blue-500"
        >
          Dashboard
        </a>


        <a 
          href="/about" 
          className="hover:text-blue-500"
        >
          About
        </a>


        <a 
          href="/login" 
          className="hover:text-blue-500"
        >
          Login
        </a>


        {/* Dark Light Toggle */}
        <ThemeToggle />


      </div>


    </nav>

  );

}