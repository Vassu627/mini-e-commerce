// src/app/page.tsx
"use client"
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.error(err))
  }, [])

  return (
    <>
    <Navbar/>
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p}/>
      ))}
    </div>
    </>
  )
}
