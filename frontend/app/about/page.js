import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function About(){

return(
<>
<Navbar/>

<div className="p-10">

<h1 className="text-4xl font-bold">
About Page
</h1>

<p className="mt-4">
This is about page of our application.
</p>

</div>

<Footer/>

</>
)

}