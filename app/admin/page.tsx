"use client";

import { useEffect, useState } from "react";

interface Booking {
  id: number;
  fullName: string;
  phoneNumber: string;
  area: string;
  address: string;
  machineBrand: string;
  problem: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-700 text-white px-8 py-5 shadow">
        <h1 className="text-3xl font-bold">
          SN Appliances Admin Dashboard
        </h1>
        <p className="text-blue-100 mt-1">
          Manage customer bookings
        </p>
      </div>

      <div className="p-8">
        {loading ? (
          <p className="text-lg">Loading bookings...</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="min-w-full border-collapse">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Area</th>
                  <th className="p-3 text-left">Brand</th>
                  <th className="p-3 text-left">Problem</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b hover:bg-gray-100"
                  >
                    <td className="p-3">{booking.fullName}</td>
                    <td className="p-3">{booking.phoneNumber}</td>
                    <td className="p-3">{booking.area}</td>
                    <td className="p-3">{booking.machineBrand}</td>
                    <td className="p-3">{booking.problem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}