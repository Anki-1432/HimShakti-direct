import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Dashboard(){

return(
<>
<Navbar/>

<div className="p-10">

<h1 className="text-4xl font-bold">
Dashboard Page
</h1>

<p className="mt-4">
Dashboard page for HimShakti application.
</p>

</div>

<Footer/>

</>
)

}