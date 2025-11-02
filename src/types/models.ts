export type ID = string;

export interface Client {
  id: ID;
  name: string;
  country: string;
  email?: string;
}

export type ProjectStatus = "pending" | "in-progress" | "completed";
export type PaymentStatus = "paid" | "unpaid";

export interface Project {
  id: ID;
  clientId: ID;
  title: string;
  budget: number;
  status: ProjectStatus;
  paymentStatus: PaymentStatus;
}

export interface Payment {
  projectId: ID;
  amount: number;
  date: string; // ISO format
}
