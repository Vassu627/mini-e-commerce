"use client";

import Navbar from "../../components/Navbar";
import { useCart } from "@/context/cartContext";

export default function CartPage() {
  const { cart, removeItem, updateQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="cart">
        <h2>Your Cart</h2>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <div className="qty-controls">
                <button
                  onClick={() =>
                    updateQty(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQty(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="remove"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <h3 className="total">Total: ₹{total}</h3>
        )}
      </div>
    </>
  );
}
