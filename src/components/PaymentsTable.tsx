import React from "react";
import { Payment, Project } from "../types/models";

const PaymentsTable: React.FC<{ payments: Payment[]; projects: Project[] }> = ({ payments, projects }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 border">
      <h4 className="font-semibold mb-2 text-gray-700">Payments</h4>
      <table className="w-full text-sm text-gray-700">
        <thead>
          <tr className="text-left border-b">
            <th>Project</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p, i) => {
            const proj = projects.find((x) => x.id === p.projectId);
            return (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td>{proj ? proj.title : "Project not found"}</td>
                <td>${p.amount}</td>
                <td>{new Date(p.date).toLocaleDateString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTable;
