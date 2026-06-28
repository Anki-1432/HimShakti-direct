"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")

      .then((res) => res.json())

      .then((data) => {

        setProducts(data);
        setLoading(false);

      })

      .catch((err) => {

        console.log(err);
        setLoading(false);

      });

  }, []);

  return (

    <>

      <Navbar />

      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">

        {loading ? (

          <h2 className="text-center text-2xl">
            Loading...
          </h2>

        ) : (

          products.map((product) => (

            <Card

              key={product.id}

              title={product.name}

              description={`Category: ${product.category} | Price: ₹${product.price} | Stock: ${product.stock}`}

            />

          ))

        )}

      </div>

      <Footer />

    </>

  );

}