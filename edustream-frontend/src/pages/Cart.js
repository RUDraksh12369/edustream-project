import React, { useEffect, useState } from "react";
import { fetchCart, checkoutCart } from "../api/api";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) fetchCart(token).then((data) => setCart(data.courses || []));
  }, [token]);

  const handleCheckout = () => {
    checkoutCart(token).then(() => {
      alert("Checked out!");
      setCart([]);
    });
  };

  if (!token) return <p className="p-8">Please login first!</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No courses in cart.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((c) => (
            <div key={c} className="border p-4 rounded shadow">
              <p>Course ID: {c}</p>
            </div>
          ))}
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
