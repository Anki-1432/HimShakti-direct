/**
 * Modal Component
 *
 * Props:
 * isOpen : controls modal visibility
 * onClose : close modal function
 * title : modal heading
 * children : modal content
 */


"use client"


export default function Modal({
isOpen,
onClose,
title,
children
}){


if(!isOpen) return null



return (

<div className="
fixed inset-0
bg-black/50
flex justify-center items-center
">


<div className="
bg-white
p-5
rounded
">


<h2 className="text-xl">
{title}
</h2>


{children}


<button
onClick={onClose}
>
Close
</button>


</div>


</div>

)

}