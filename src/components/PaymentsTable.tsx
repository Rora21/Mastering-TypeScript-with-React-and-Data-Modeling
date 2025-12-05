import React from "react";
import { Payment, Project } from "../types/models";

interface PaymentsTableProps {
  payments: Payment[];
  projects: Project[];
}

const PaymentsTable: React.FC<PaymentsTableProps> = ({ payments, projects }) => {
  return (
    <div className="bg-amber-100 rounded-lg shadow-sm border p-4">
      <h3 className="font-semibold text-lg mb-3">Payment Records</h3>
      {payments.length === 0 ? (
        <p className="text-gray-500">No payments recorded</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Project</th>
                <th className="text-left py-2">Amount</th>
                <th className="text-left py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => {
                const project = projects.find(p => p.id === payment.projectId);
                return (
                  <tr key={index} className="border-b">
                    <td className="py-2">
                      {project ? project.title : "Project not found"}
                    </td>
                    <td className="py-2 font-medium">${payment.amount}</td>
                    <td className="py-2 text-gray-600">
                      {new Date(payment.date).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentsTable;