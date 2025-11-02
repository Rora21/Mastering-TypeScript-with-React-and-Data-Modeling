import React, { createContext, useContext, useReducer } from "react";
import { Client, Project, Payment, ID, ProjectStatus } from "../types/models";

/* ==== Example Data ==== */
const initialClients: Client[] = [
  { id: "c1", name: "Amani Designs", country: "Rwanda", email: "amani@rw.com" },
  { id: "c2", name: "Kivu Tech", country: "Kenya" },
];

const initialProjects: Project[] = [
  { id: "p1", clientId: "c1", title: "Brand Design", budget: 1200, status: "in-progress", paymentStatus: "unpaid" },
  { id: "p2", clientId: "c2", title: "Website", budget: 800, status: "completed", paymentStatus: "paid" },
];

const initialPayments: Payment[] = [
  { projectId: "p2", amount: 800, date: new Date().toISOString() },
];

/* ==== State + Actions ==== */
interface State {
  clients: Client[];
  projects: Project[];
  payments: Payment[];
}

export type Action =
  | { type: "MARK_PROJECT_PAID"; payload: { projectId: ID } }
  | { type: "ADD_PAYMENT"; payload: Payment }
  | { type: "ADD_CLIENT"; payload: Client }
  | { type: "ADD_PROJECT"; payload: Project }
  | { type: "UPDATE_PROJECT_STATUS"; payload: { projectId: ID; status: ProjectStatus } };

const initialState: State = {
  clients: initialClients,
  projects: initialProjects,
  payments: initialPayments,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "MARK_PROJECT_PAID":
      return {
        ...state,
        projects: state.projects.map((p) =>
          p.id === action.payload.projectId ? { ...p, paymentStatus: "paid" } : p
        ),
      };

    case "ADD_PAYMENT":
      return {
        ...state,
        payments: [...state.payments, action.payload],
        projects: state.projects.map((p) =>
          p.id === action.payload.projectId ? { ...p, paymentStatus: "paid" } : p
        ),
      };

    case "ADD_CLIENT":
      return { ...state, clients: [...state.clients, action.payload] };

    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };

    case "UPDATE_PROJECT_STATUS":
      return {
        ...state,
        projects: state.projects.map((p) =>
          p.id === action.payload.projectId ? { ...p, status: action.payload.status } : p
        ),
      };

    default:
      return state;
  }
}

/* ==== Context ==== */
const DashboardContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);

export const useDashboard = () => {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
};

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <DashboardContext.Provider value={{ state, dispatch }}>{children}</DashboardContext.Provider>;
};
