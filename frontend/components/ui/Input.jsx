/**
 * Input Component
 *
 * Props:
 * label : input label
 * placeholder : placeholder text
 * type : input type
 * value : input value
 * onChange : change handler
 * error : error message
 */


export default function Input({
label,
placeholder,
type="text",
value,
onChange,
error
}){


return (

<div className="flex flex-col gap-2">


<label>{label}</label>


<input

type={type}

placeholder={placeholder}

value={value}

onChange={onChange}

className="border p-2 rounded"

/>


{
error &&
<p className="text-red-500">
{error}
</p>
}


</div>

)

}