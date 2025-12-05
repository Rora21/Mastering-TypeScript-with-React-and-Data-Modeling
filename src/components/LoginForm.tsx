import React, { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { dispatch } = useDashboard();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      dispatch({ type: "LOGIN", payload: { email, name } });
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-amber-100 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Dashboard</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;