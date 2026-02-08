"use client"

import Link from "next/link";
import { useCart } from "../context/cartContext";

export default function Navbar() {
    const {cart} = useCart();
    return(
        <nav className="nav">
            <Link href='/'>Naksh Store</Link>
            <Link href='/cart'>Cart ({cart.length})</Link>
        </nav>
    )
}