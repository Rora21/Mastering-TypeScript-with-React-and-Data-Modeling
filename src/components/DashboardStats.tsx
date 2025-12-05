import React from "react";
import { useDashboard } from "../context/DashboardContext";
import { countProjectsByPayment, calculateTotalRevenue } from "../utils/helpers";

const DashboardStats: React.FC = () => {
  const { state } = useDashboard();

  const total = state.projects.length;
  const { paid, unpaid } = countProjectsByPayment(state.projects);
  const revenue = calculateTotalRevenue(state.payments);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <Stat title="Projects" value={total} />
      <Stat title="Paid" value={paid} color="green" />
      <Stat title="Unpaid" value={unpaid} color="red" />
      <Stat title="Revenue" value={`$${revenue}`} color="blue" />
    </div>
  );
};

const Stat = ({ title, value, color = "gray" }: { title: string; value: string | number; color?: string }) => (
  <div className={`p-4 bg-${color}-50 border rounded-lg shadow-sm text-center`}>
    <p className="text-sm text-gray-500">{title}</p>
    <p className={`font-semibold text-xl text-${color}-800`}>{value}</p>
  </div>
);

export default DashboardStats;
