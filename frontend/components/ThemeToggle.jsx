"use client"

import { useEffect, useState } from "react";


export default function ThemeToggle(){

  const [dark,setDark] = useState(false);


  useEffect(()=>{

    const saved = localStorage.getItem("theme");


    if(saved === "dark"){

      document.documentElement.classList.add("dark");

      setDark(true);

    }

  },[]);



  const toggleTheme = ()=>{


    const html = document.documentElement;


    if(html.classList.contains("dark")){


      html.classList.remove("dark");

      localStorage.setItem(
        "theme",
        "light"
      );

      setDark(false);


    }else{


      html.classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );

      setDark(true);


    }

  }



  return (

    <button

      onClick={toggleTheme}

      className="
      px-4
      py-2
      rounded-xl
      bg-white/20
      backdrop-blur-xl
      border
      border-white/30
      text-white
      hover:bg-white/30
      transition
      "

    >

      {dark ? "☀ Light" : "🌙 Dark"}

    </button>

  )

}