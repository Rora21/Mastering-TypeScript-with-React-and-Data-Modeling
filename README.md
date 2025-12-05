# Freelance Dashboard (React + TypeScript)

## Introduction & Purpose

Freelancers and developers often manage multiple clients and projects simultaneously, requiring tools that ensure organization and accuracy.

In this project, you will build a Freelance Management Dashboard using React and TypeScript that allows users to view and manage clients, projects, and payment information.

This assignment focuses on applying strong typing, creating reusable and type-safe React components, and managing global state using Context API with Reducer – all while modeling real-world data with TypeScript.

By completing this assignment, you will strengthen your understanding of:
- Defining and enforcing TypeScript interfaces and data models
- Building type-safe React components
- Managing global state with Context API + useReducer
- Using discriminated unions, optional properties, and type narrowing
- Applying TypeScript for real-world relationships between data

## Learning Objectives

By the end of this assignment, you should be able to:
- Define typed models for real-world entities such as Clients, Projects, and Payments
- Use TypeScript interfaces, union types, and optional properties effectively
- Build functional React components with fully typed props and state
- Implement a Context API + useReducer system with type-safe actions and state
- Apply type narrowing and discriminated unions to safely handle different action types
- Demonstrate how TypeScript prevents runtime errors and improves maintainability

## Technologies Used

- **React + TypeScript** - For type-safe component development
- **Context API + useReducer** - For global state management
- **Tailwind CSS** - For styling and responsive design

## Main Features

- **Type-safe React components** with fully typed props and state
- **Context state management** using useReducer with discriminated union actions
- **Client, Project, and Payment data models** with TypeScript interfaces
- **Utility functions** for data manipulation and type narrowing
- **Interactive dashboard** with ability to mark projects as paid
- **Responsive design** with clean, modern UI

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ClientCard.tsx   # Displays client information
│   ├── ProjectList.tsx  # Lists projects with status
│   ├── DashboardStats.tsx # Shows dashboard statistics
│   └── PaymentsTable.tsx # Payment records table
├── context/             # Global state management
│   └── DashboardContext.tsx # Context + useReducer setup
├── types/               # TypeScript type definitions
│   └── models.ts        # Data models and interfaces
├── utils/               # Utility functions
│   └── helpers.ts       # Type-safe helper functions
└── App.tsx             # Main application component
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Mastering-TypeScript-with-React-and-Data-Modeling
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the project locally**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the dashboard

## Assignment Requirements Fulfilled

### A. Dashboard Sections
- **Client List** - Displays client name, country, and optional email address
- **Project List** - Shows project title, linked client name, project status ("pending" | "in-progress" | "completed"), and payment status ("paid" | "unpaid")
- **Payment Management** - Displays payment records with project ID, amount, and date (ISO format)
- **Interactive Features** - Users can mark unpaid projects as paid, updating state in a type-safe way
- **Error Handling** - Gracefully handles missing data (e.g., "Client not found")

### B. TypeScript Modeling & State Management
- **Client Model** - id: string, name: string, country: string, email?: string (optional)
- **Project Model** - id: string, clientId: string, title: string, budget: number, status: union type, paymentStatus: union type
- **Payment Model** - projectId: string, amount: number, date: string (ISO format)
- **Context & Reducer** - useReducer with discriminated union actions (ADD_PAYMENT, MARK_PROJECT_PAID, etc.)
- **Type Safety** - Full type safety enforced for state and dispatch
- **Sample Data** - Includes 2 clients, 2 projects, and 1 payment

### C. Utility Functions (All Fully Typed)
- ✅ Count paid vs unpaid projects
- ✅ Find client by ID safely with type narrowing
- ✅ Record new payment with validation
- ✅ Filter projects by status or payment state
- ✅ Search clients and projects by name
- ✅ Display dashboard statistics
- ✅ Conditional styling for project/payment status
- ✅ Type-safe helper functions

### D. Component & Props Requirements
- **ClientCard** - Displays client information with typed props
- **ProjectList** - Lists projects with status and payment state
- **DashboardStats** - Summarizes totals and counts
- **PaymentsTable** - Shows payment records
- All components use typed props and state, handle optional properties safely, and are modular and reusable

## Key TypeScript Features Demonstrated

- **Interfaces and Type Definitions** - Client, Project, Payment models
- **Discriminated Union Types** - Action types for useReducer
- **Optional Properties** - Client email field with safe handling
- **Type Narrowing** - Safe client lookup and data handling
- **Generic Functions** - Reusable utility functions
- **Typed Props and State** - All components use proper TypeScript typing
- **Union Types** - Project status and payment status
- **Type Safety** - Prevents runtime errors and improves maintainability

## Dashboard Sections

### Client List
- Displays client name, country, and optional email
- Handles missing email gracefully with fallback text

### Project List
- Shows project title, linked client, status, and payment status
- Interactive "Mark Paid" button for unpaid projects
- Color-coded status badges for visual clarity

### Payment Management
- Table view of all payment records
- Links payments to their respective projects
- Displays formatted dates and amounts

### Dashboard Statistics
- Total project count
- Paid vs unpaid project counts
- Total revenue calculation
- Color-coded statistics cards

## Live Demo

[Add your deployment link here - Vercel/Netlify/GitHub Pages]