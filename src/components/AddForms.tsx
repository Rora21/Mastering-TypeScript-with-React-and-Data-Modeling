import React, { useState } from "react";
import { useDashboard } from "../context/DashboardContext";
import { ProjectStatus } from "../types/models";

export const AddClientForm: React.FC = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const { dispatch } = useDashboard();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CLIENT",
      payload: {
        id: Date.now().toString(),
        name,
        country,
        email: email || undefined,
      },
    });
    setName("");
    setCountry("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-amber-100 p-4 rounded-lg shadow-sm border space-y-3">
      <h3 className="font-semibold">Add New Client</h3>
      <input
        type="text"
        placeholder="Client Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        placeholder="Email (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Add Client
      </button>
    </form>
  );
};

export const AddProjectForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [clientId, setClientId] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState<ProjectStatus>("pending");
  const { state, dispatch } = useDashboard();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "ADD_PROJECT",
      payload: {
        id: Date.now().toString(),
        clientId,
        title,
        budget: Number(budget),
        status,
        paymentStatus: "unpaid",
      },
    });
    setTitle("");
    setClientId("");
    setBudget("");
    setStatus("pending");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-amber-100 p-4 rounded-lg shadow-sm border space-y-3">
      <h3 className="font-semibold">Add New Project</h3>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <select
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Client</option>
        {state.clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as ProjectStatus)}
        className="w-full p-2 border rounded"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit" className="w-full bg-amber-600 text-white p-2 rounded hover:bg-amber-700">
        Add Project
      </button>
    </form>
  );
};