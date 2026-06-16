import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";


export default function Home() {

  return (

    <>

      <Navbar />

      <Hero />


      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">

        <Card
          title="React"
          description="Learn React components"
        />

        <Card
          title="Next.js"
          description="Build modern applications"
        />

        <Card
          title="Tailwind"
          description="Design beautiful UI"
        />


      </div>


      <Footer />

    </>

  );

}