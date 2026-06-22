"use client"

/**
 * Toast Component
 *
 * Props:
 * message : notification text
 * show : controls visibility
 * onClose : close function
 */


import { useEffect } from "react";


export default function Toast({
  message,
  show,
  onClose
}){


useEffect(()=>{

if(show){

const timer = setTimeout(()=>{
  onClose();
},3000);


return ()=>clearTimeout(timer);

}

},[show,onClose]);



if(!show) return null;



return (

<div className="
fixed
bottom-5
right-5
bg-black
text-white
px-5
py-3
rounded
shadow-lg
">

{message}

</div>

)

}