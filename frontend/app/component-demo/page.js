"use client";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader
} from "@/components/ui";

import { useState } from "react";

export default function ComponentDemo(){

const [open,setOpen]=useState(false);


return (

<div
className="
min-h-screen
bg-cover
bg-center
bg-fixed
"
style={{
backgroundImage:"url('/images/HimShakti.jpg')"
}}
>


{/* overlay */}
<div className="
min-h-screen
bg-black/30
p-10
">


{/* main glass container */}

<div className="
max-w-6xl
mx-auto
bg-white/20
backdrop-blur-xl
rounded-3xl
border
border-white/30
shadow-2xl
p-10
">


<h1 className="
text-5xl
font-bold
text-white
drop-shadow-lg
mb-12
">
Component Library
</h1>



{/* Button */}

<div className="
bg-white/20
backdrop-blur-lg
rounded-2xl
p-6
mb-8
border
border-white/30
">

<h2 className="
text-3xl
font-bold
text-white
mb-5
">
Button
</h2>


<div className="flex gap-5">

<Button variant="primary">
Primary
</Button>


<Button variant="secondary">
Secondary
</Button>


<Button variant="outline">
Outline
</Button>


</div>

</div>





{/* Input */}

<div className="
bg-white/20
backdrop-blur-lg
rounded-2xl
p-6
mb-8
border
border-white/30
">


<h2 className="
text-3xl
font-bold
text-white
mb-5
">
Input
</h2>


<Input
label="Email"
placeholder="Enter email"
/>


</div>





{/* Loader */}

<div className="
bg-white/20
backdrop-blur-lg
rounded-2xl
p-6
mb-8
border
border-white/30
">


<h2 className="
text-3xl
font-bold
text-white
mb-5
">
Loader
</h2>


<Loader/>


</div>





{/* Modal */}

<div className="
bg-white/20
backdrop-blur-lg
rounded-2xl
p-6
mb-8
border
border-white/30
">


<h2 className="
text-3xl
font-bold
text-white
mb-5
">
Modal
</h2>


<Button onClick={()=>setOpen(true)}>
Open Modal
</Button>


<Modal
isOpen={open}
onClose={()=>setOpen(false)}
title="Demo Modal"
>

<p className="text-black">
This is modal component working.
</p>


</Modal>


</div>





{/* Toast */}

<div className="
bg-white/20
backdrop-blur-lg
rounded-2xl
p-6
border
border-white/30
">


<h2 className="
text-3xl
font-bold
text-white
mb-5
">
Toast
</h2>


<Toast/>


</div>



</div>


</div>


</div>

)

}