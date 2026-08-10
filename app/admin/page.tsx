"use client";

import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface Booking {
  id: number;
  fullName: string;
  phoneNumber: string;
  area: string;
  address: string;
  machineBrand: string;
  problem: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedBooking, setSelectedBooking] =
  useState<Booking | null>(null);

  // Dashboard Statistics
  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const completedBookings = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  // Search Filter
  const filteredBookings = bookings.filter((booking) => {
  const matchesSearch =
    booking.fullName.toLowerCase().includes(search.toLowerCase()) ||
    booking.phoneNumber.includes(search) ||
    booking.area.toLowerCase().includes(search.toLowerCase());

  const matchesFilter =
    filter === "All" || booking.status === filter;

  return matchesSearch && matchesFilter;
});

  // Fetch Bookings
  useEffect(() => {
  fetch("/api/admin/bookings")
    .then((res) => res.json())
    .then((data) => {
      console.log("API Response:", data);
      console.log("Is Array:", Array.isArray(data));

      setBookings(data);

      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, []);

  // Update Booking Status
  const updateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/admin/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        alert("Failed to update booking");
        return;
      }

      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === id ? { ...booking, status } : booking
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Booking
  const deleteBooking = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/admin/bookings/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        alert("Failed to delete booking");
        return;
      }

      setBookings((prev) =>
        prev.filter((booking) => booking.id !== id)
      );

      alert("Booking deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  // Send Booking Details to WhatsApp
const sendToWhatsApp = (booking: Booking) => {
  const message = `*SN Appliances - Service Request*

👤 Customer: ${booking.fullName}

📞 Phone: ${booking.phoneNumber}

📍 Area: ${booking.area}

🏠 Address:
${booking.address}

🛠 Machine Brand:
${booking.machineBrand}

📝 Problem:
${booking.problem}

📌 Status:
${booking.status}

Please contact the customer before visiting.`;

  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

  // Export Bookings to Excel
const exportToExcel = () => {
  const exportData = bookings.map((booking) => ({
    Name: booking.fullName,
    Phone: booking.phoneNumber,
    Area: booking.area,
    Address: booking.address,
    Brand: booking.machineBrand,
    Problem: booking.problem,
    Status: booking.status,
    "Booked On": new Date(booking.createdAt).toLocaleString(),
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Bookings"
  );

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });

  saveAs(file, "SN_Appliances_Bookings.xlsx");
};

  // Logout
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });

      window.location.href = "/login";
    } catch (error) {
      console.error(error);
      alert("Logout failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-700 text-white px-8 py-5 shadow flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            SN Appliances Admin Dashboard
          </h1>

          <p className="text-blue-100 mt-1">
            Manage customer bookings
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold transition"
        >
          Logout
        </button>
      </div>

      {/* Body */}
      <div className="p-8">

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-gray-500 font-medium">
              Total Bookings
            </h2>

            <p className="text-4xl font-bold text-blue-700 mt-3">
              {totalBookings}
            </p>
          </div>

          <div className="bg-yellow-100 rounded-xl shadow-lg p-6">
            <h2 className="text-yellow-700 font-medium">
              Pending
            </h2>

            <p className="text-4xl font-bold text-yellow-600 mt-3">
              {pendingBookings}
            </p>
          </div>

          <div className="bg-green-100 rounded-xl shadow-lg p-6">
            <h2 className="text-green-700 font-medium">
              Completed
            </h2>

            <p className="text-4xl font-bold text-green-600 mt-3">
              {completedBookings}
            </p>
          </div>

        </div>

        {/* Search */}
        {/* Search + Filter */}
{/* Search + Filter + Export */}
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

  <input
    type="text"
    placeholder="🔍 Search by Name, Phone or Area..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full lg:w-96 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <div className="flex flex-wrap gap-2">

    <button
      onClick={() => setFilter("All")}
      className={`px-4 py-2 rounded-lg font-semibold ${
        filter === "All"
          ? "bg-blue-700 text-white"
          : "bg-gray-200"
      }`}
    >
      All
    </button>

    <button
      onClick={() => setFilter("Pending")}
      className={`px-4 py-2 rounded-lg font-semibold ${
        filter === "Pending"
          ? "bg-yellow-500 text-white"
          : "bg-gray-200"
      }`}
    >
      Pending
    </button>

    <button
      onClick={() => setFilter("Completed")}
      className={`px-4 py-2 rounded-lg font-semibold ${
        filter === "Completed"
          ? "bg-green-600 text-white"
          : "bg-gray-200"
      }`}
    >
      Completed
    </button>

    <button
      onClick={exportToExcel}
      className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-semibold"
    >
      📥 Export Excel
    </button>

  </div>

</div>

        {/* Table */}
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
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
  {filteredBookings.length > 0 ? (
    filteredBookings.map((booking) => (
      <tr
        key={booking.id}
        className="border-b hover:bg-gray-100"
      >
        <td className="p-3">{booking.fullName}</td>
        <td className="p-3">{booking.phoneNumber}</td>
        <td className="p-3">{booking.area}</td>
        <td className="p-3">{booking.machineBrand}</td>
        <td className="p-3">{booking.problem}</td>

        {/* Status */}
        <td className="p-3">
          {booking.status === "Pending" ? (
            <button
              onClick={() => {
  const confirmUpdate = window.confirm(
    "Are you sure you want to mark this booking as Completed?"
  );

  if (confirmUpdate) {
    updateStatus(booking.id, "Completed");
  }
}}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
            >
              Mark Completed
            </button>
          ) : (
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
              ✅ Completed
            </span>
          )}
        </td>

        {/* Actions */}
<td className="p-3">
  <div className="flex flex-wrap gap-2">
    <button
      onClick={() => setSelectedBooking(booking)}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
    >
      View
    </button>

    <button
      onClick={() => sendToWhatsApp(booking)}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
    >
      📲 WhatsApp
    </button>

    <button
      onClick={() => deleteBooking(booking.id)}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
    >
      Delete
    </button>
  </div>
</td>
      </tr>
    ))
  ) : (
    <tr>
      <td
        colSpan={7}
        className="text-center p-6 text-gray-500"
      >
        No bookings found.
      </td>
    </tr>
  )}
</tbody>
</table>

</div>
)}
        {/* Booking Details Modal */}

{selectedBooking && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">

      {/* Close Button */}
      <button
        onClick={() => setSelectedBooking(null)}
        className="absolute top-4 right-5 text-2xl font-bold text-gray-500 hover:text-red-500"
      >
        ✕
      </button>

      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        Booking Details
      </h2>

      <div className="space-y-4 text-gray-700">

        <p>
          <strong>👤 Name:</strong>{" "}
          {selectedBooking.fullName}
        </p>

        <p>
          <strong>📞 Phone:</strong>{" "}
          {selectedBooking.phoneNumber}
        </p>

        <p>
          <strong>📍 Area:</strong>{" "}
          {selectedBooking.area}
        </p>

        <p>
          <strong>🏠 Address:</strong>{" "}
          {selectedBooking.address}
        </p>

        <p>
          <strong>🛠 Brand:</strong>{" "}
          {selectedBooking.machineBrand}
        </p>

        <p>
          <strong>📝 Problem:</strong>{" "}
          {selectedBooking.problem}
        </p>

        <p>
          <strong>📌 Status:</strong>{" "}
          {selectedBooking.status}
        </p>

        <p>
          <strong>📅 Booked On:</strong>{" "}
          {new Date(selectedBooking.createdAt).toLocaleString()}
        </p>

      </div>

      <button
        onClick={() => setSelectedBooking(null)}
        className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold"
      >
        Close
      </button>

    </div>
  </div>
)}
      </div>
    </div>
  );
}