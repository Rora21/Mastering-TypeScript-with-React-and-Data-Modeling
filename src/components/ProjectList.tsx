import React from "react";
import { Project, Client, ID } from "../types/models";
import { useDashboard } from "../context/DashboardContext";

const StatusBadge = ({ text, color }: { text: string; color: string }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${color}-100 text-${color}-800`}>
    {text}
  </span>
);

const ProjectList: React.FC<{ projects: Project[]; clients: Client[] }> = ({ projects, clients }) => {
  const { dispatch } = useDashboard();

  function markPaid(id: ID) {
    dispatch({ type: "MARK_PROJECT_PAID", payload: { projectId: id } });
  }

  return (
    <div className="space-y-3">
      {projects.map((p) => {
        const client = clients.find((c) => c.id === p.clientId);
        return (
          <div key={p.id} className="p-4 bg-white rounded-lg shadow-sm border flex justify-between items-center">
            <div>
              <h4 className="font-medium text-gray-800">{p.title}</h4>
              <p className="text-sm text-gray-500">
                Client: {client ? client.name : <em>Client not found</em>}
              </p>
              <p className="text-sm text-gray-500">Budget: ${p.budget}</p>
              <div className="mt-1 flex gap-2">
                <StatusBadge text={p.status} color={p.status === "completed" ? "green" : "blue"} />
                <StatusBadge text={p.paymentStatus} color={p.paymentStatus === "paid" ? "green" : "red"} />
              </div>
            </div>
            {p.paymentStatus === "unpaid" && (
              <button
                onClick={() => markPaid(p.id)}
                className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 text-sm"
              >
                Mark Paid
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
