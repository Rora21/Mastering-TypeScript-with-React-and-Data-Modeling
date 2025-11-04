import React from "react";
import { DashboardProvider, useDashboard } from "./context/DashboardContext";
import ClientCard from "./components/ClientCard";
import ProjectList from "./components/ProjectList";
import DashboardStats from "./components/DashboardStats";
import PaymentsTable from "./components/PaymentsTable";

function Dashboard() {
  const { state } = useDashboard();

  return (
    <div className="min-h-screen bg-[#f7f6f2] p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Freelance Management Dashboard</h1>
      </header>

      <section className="mb-6">
        <DashboardStats />
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <aside className="space-y-3">
          {state.clients.map((c) => (
            <ClientCard key={c.id} client={c} />
          ))}
        </aside>
        <main className="col-span-2 space-y-3">
          <ProjectList projects={state.projects} clients={state.clients} />
          <PaymentsTable payments={state.payments} projects={state.projects} />
        </main>
      </section>

      <footer className="mt-6 text-center text-sm text-gray-500">
        &copy; 2025 Freelance Management Dashboard
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}
