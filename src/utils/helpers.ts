import { Client, Project, Payment, ID, ProjectStatus, PaymentStatus } from "../types/models";

// Count paid vs unpaid projects
export function countProjectsByPayment(projects: Project[]): { paid: number; unpaid: number } {
  return projects.reduce(
    (acc, p) => ({
      paid: acc.paid + (p.paymentStatus === "paid" ? 1 : 0),
      unpaid: acc.unpaid + (p.paymentStatus === "unpaid" ? 1 : 0),
    }),
    { paid: 0, unpaid: 0 }
  );
}

// Find client by ID safely
export function findClientById(clients: Client[], id: ID): Client | undefined {
  return clients.find(c => c.id === id);
}

// Record a new payment with validation
export function createPayment(projectId: ID, amount: number): Payment {
  if (amount <= 0) throw new Error("Amount must be positive");
  return {
    projectId,
    amount,
    date: new Date().toISOString(),
  };
}

// Filter projects by status
export function filterProjectsByStatus(projects: Project[], status: ProjectStatus): Project[] {
  return projects.filter(p => p.status === status);
}

// Filter projects by payment state
export function filterProjectsByPayment(projects: Project[], paymentStatus: PaymentStatus): Project[] {
  return projects.filter(p => p.paymentStatus === paymentStatus);
}

// Search clients by name
export function searchClients(clients: Client[], query: string): Client[] {
  const lower = query.toLowerCase();
  return clients.filter(c => c.name.toLowerCase().includes(lower));
}

// Search projects by title
export function searchProjects(projects: Project[], query: string): Project[] {
  const lower = query.toLowerCase();
  return projects.filter(p => p.title.toLowerCase().includes(lower));
}

// Calculate total revenue
export function calculateTotalRevenue(payments: Payment[]): number {
  return payments.reduce((sum, p) => sum + p.amount, 0);
}

// Get project statistics
export function getProjectStats(projects: Project[]) {
  const total = projects.length;
  const byStatus = projects.reduce((acc, p) => {
    acc[p.status] = (acc[p.status] || 0) + 1;
    return acc;
  }, {} as Record<ProjectStatus, number>);
  
  return { total, ...byStatus };
}