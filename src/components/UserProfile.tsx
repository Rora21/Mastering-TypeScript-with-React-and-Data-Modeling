import React from "react";
import { useDashboard } from "../context/DashboardContext";

const UserProfile: React.FC = () => {
  const { state, dispatch } = useDashboard();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  if (!state.user) return null;

  return (
    <div className="bg-stone-100 p-4 rounded-lg shadow-sm border flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{state.user.name}</h3>
        <p className="text-sm text-gray-600">{state.user.email}</p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;