import { useState } from "react";

export default function Payments() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Payment processed successfully (mock)");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Payment</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-2 mb-3 border rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-2 mb-3 border rounded"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          className="w-full p-2 mb-3 border rounded"
          value={form.cardNumber}
          onChange={handleChange}
          required
        />

        <div className="flex gap-3">
          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            className="w-1/2 p-2 mb-3 border rounded"
            value={form.expiry}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="cvv"
            placeholder="CVV"
            className="w-1/2 p-2 mb-3 border rounded"
            value={form.cvv}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
