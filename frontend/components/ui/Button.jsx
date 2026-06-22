/**
 * Button Component
 *
 * Props:
 * children : Button text/content
 * variant : primary | secondary | outline
 * size : sm | md | lg
 * disabled : disables button
 * onClick : click handler function
 */


export default function Button({
children,
variant="primary",
size="md",
disabled=false,
onClick
}){


const variants={
primary:"bg-black text-white",
secondary:"bg-gray-500 text-white",
outline:"border border-black"
}


const sizes={
sm:"px-3 py-1",
md:"px-5 py-2",
lg:"px-8 py-3"
}



return (

<button

onClick={onClick}

disabled={disabled}

className={`
${variants[variant]}
${sizes[size]}
rounded
`}

>

{children}

</button>

)

}