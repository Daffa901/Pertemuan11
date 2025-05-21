import { useState } from "react";
import customers from "../data/customers";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ id: "", name: "", email: "", phone: "", loyalty: "Bronze" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan penyimpanan data di sini
    console.log("New Customer:", form);
    setShowForm(false);
  };

  return (
    <div id="dashboard-container">
      <PageHeader title="Customer" breadcrumb={["Dashboard /", " Customers List"]}>
        <button
          id="add-button"
          onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg mr-4 text-xl"
        >
          Add New Customer
        </button>
      </PageHeader>

      <h1 className="text-3xl font-semibold text-blue-700 mb-6">Customer List</h1>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-6 py-3 border-b">ID</th>
                <th className="px-6 py-3 border-b">Name</th>
                <th className="px-6 py-3 border-b">Email</th>
                <th className="px-6 py-3 border-b">Phone</th>
                <th className="px-6 py-3 border-b">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, index) => (
                <tr
                  key={c.id}
                  className={`hover:bg-blue-50 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="px-6 py-4 border-b">{c.id}</td>
                  <td className="px-6 py-4 border-b">{c.name}</td>
                  <td className="px-6 py-4 border-b">{c.email}</td>
                  <td className="px-6 py-4 border-b">{c.phone}</td>
                  <td className="px-6 py-4 border-b">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        c.loyalty === "Gold"
                          ? "bg-yellow-200 text-yellow-800"
                          : c.loyalty === "Silver"
                          ? "bg-gray-200 text-gray-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {c.loyalty}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Customer</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Enter Customer ID" value={form.id} onChange={e => setForm({ ...form, id: e.target.value })} className="w-full border px-3 py-2 rounded" />
              <input type="text" placeholder="Enter Customer Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border px-3 py-2 rounded" />
              <input type="email" placeholder="Enter Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border px-3 py-2 rounded" />
              <input type="text" placeholder="Enter Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border px-3 py-2 rounded" />
              <select value={form.loyalty} onChange={e => setForm({ ...form, loyalty: e.target.value })} className="w-full border px-3 py-2 rounded">
                <option>Gold</option>
                <option>Silver</option>
                <option>Bronze</option>
              </select>
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
