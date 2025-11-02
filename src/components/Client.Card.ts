import React from "react";
import { Client } from "../types/models";

const ClientCard: React.FC<{ client: Client }> = ({ client }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-gray-800">{client.name}</h3>
      <p className="text-sm text-gray-500">{client.country}</p>
      <p className="text-sm text-gray-600">
        {client.email ?? <em className="text-gray-400">No email</em>}
      </p>
    </div>
  );
};

export default ClientCard;
