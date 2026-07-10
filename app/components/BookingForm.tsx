"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    address: "",
    brand: "",
    problem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log("✅ Button Clicked");

    if (loading) return;

    if (
      !form.name ||
      !form.phone ||
      !form.area ||
      !form.address ||
      !form.brand ||
      !form.problem
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      console.log("📤 Sending Data:", form);

      const response = await fetch(`${window.location.origin}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      console.log("📥 Response:", data);

      if (response.ok) {
        alert("✅ Booking Submitted Successfully!");

        setForm({
          name: "",
          phone: "",
          area: "",
          address: "",
          brand: "",
          problem: "",
        });

        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Server Error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          📅 Book a Technician
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="area"
            placeholder="Area in Bengaluru"
            value={form.area}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="address"
            placeholder="Complete Address"
            rows={3}
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <select
            name="brand"
            value={form.brand}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select Washing Machine Brand</option>
            <option>LG</option>
            <option>Samsung</option>
            <option>IFB</option>
            <option>Bosch</option>
            <option>Whirlpool</option>
            <option>Godrej</option>
            <option>Haier</option>
            <option>Panasonic</option>
            <option>Onida</option>
            <option>Other</option>
          </select>

          <textarea
            name="problem"
            placeholder="Describe the problem"
            rows={4}
            value={form.problem}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Book Technician"}
          </button>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <h3 className="font-semibold text-blue-800">
              ℹ️ Important Information
            </h3>

            <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-2">
              <li>No online payment is required while booking.</li>
              <li>Visiting / inspection charges may apply.</li>
              <li>The technician will inspect the washing machine first.</li>
              <li>Repair charges will be discussed before starting the repair.</li>
              <li>Service available across Bengaluru.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}