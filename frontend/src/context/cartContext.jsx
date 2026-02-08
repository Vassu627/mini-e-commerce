"use client";

import { createContext, useContext, useEffect, useState } from "react";
import API from "../services/api";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const loadCart = async () => {
    try {
      const res = await API.get("/cart");
      setCart(res.data);
    } catch (err) {
      console.error("Cart load failed", err);
    }
  };

  
  useEffect(() => {
    let isMounted = true;

    const fetchCart = async () => {
      try {
        const res = await API.get("/cart");
        if (isMounted) setCart(res.data);
      } catch (err) {
        console.error("Cart load failed", err);
      }
    };

    fetchCart();

    // Cleanup to avoid updating state after unmount
    return () => {
      isMounted = false;
    };
  }, []);

  const addToCart = async (product) => {
    try {
      await API.post("/cart", {
        productId: product.id,
        quantity: 1,
      });
      loadCart(); // still safe to call after action
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete(`/cart/${id}`);
      loadCart();
    } catch (err) {
      console.error("Remove failed", err);
    }
  };

  const updateQty = async (id, quantity) => {
    if (quantity < 1) {
        await removeItem(id);
        return;
    }

    try {
      await API.put(`/cart/${id}`, { quantity });
      loadCart();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, updateQty }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
