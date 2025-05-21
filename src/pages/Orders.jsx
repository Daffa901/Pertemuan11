import { useState } from "react";
import orders from "../data/orders";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ id: "", customerName: "", status: "Pending", totalPrice: "", orderDate: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Order:", form);
    setShowForm(false);
  };

  return (
    <div id="dashboard-container">
      <PageHeader title="Orders" breadcrumb={["Dashboard /", " Orders List"]}>
        <button
          id="add-button"
          onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg mr-4 text-xl"
        >
          Add New Orders
        </button>
      </PageHeader>

      <h1 className="text-3xl font-semibold text-green-700 mb-6">Order List</h1>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="px-6 py-3 border-b">Order ID</th>
                <th className="px-6 py-3 border-b">Customer</th>
                <th className="px-6 py-3 border-b">Status</th>
                <th className="px-6 py-3 border-b">Total</th>
                <th className="px-6 py-3 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, index) => (
                <tr
                  key={o.id}
                  className={`hover:bg-green-50 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-6 py-4 border-b">{o.id}</td>
                  <td className="px-6 py-4 border-b">{o.customerName}</td>
                  <td className="px-6 py-4 border-b">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${o.status === "Completed" ? "bg-green-200 text-green-800" : o.status === "Pending" ? "bg-yellow-200 text-yellow-800" : "bg-red-200 text-red-800"}`}>{o.status}</span>
                  </td>
                  <td className="px-6 py-4 border-b font-medium">Rp {parseInt(o.totalPrice).toLocaleString()}</td>
                  <td className="px-6 py-4 border-b">{o.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Order ID" value={form.id} onChange={e => setForm({ ...form, id: e.target.value })} className="w-full border px-3 py-2 rounded" />
              <input type="text" placeholder="Customer Name" value={form.customerName} onChange={e => setForm({ ...form, customerName: e.target.value })} className="w-full border px-3 py-2 rounded" />
              <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className="w-full border px-3 py-2 rounded">
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <input type="number" placeholder="Total Price" value={form.totalPrice} onChange={e => setForm({ ...form, totalPrice: e.target.value })} className="w-full border px-3 py-2 rounded" />
              <input type="date" placeholder="Order Date" value={form.orderDate} onChange={e => setForm({ ...form, orderDate: e.target.value })} className="w-full border px-3 py-2 rounded" />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}