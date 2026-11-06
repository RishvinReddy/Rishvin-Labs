/**
 * Private Business Intelligence & Financial Ledger Engine
 * Enforces integer minor currency units (paise: 1 INR = 100 paise)
 * to prevent floating-point currency drift.
 * All customer, invoice, and payment data is kept strictly internal.
 */

export interface CustomerRecord {
  id: string;
  name: string;
  organization?: string;
  email: string;
  status: "active" | "completed" | "prospect";
  joinedDate: string;
  projectsCount: number;
  totalInvoicedPaise: number;
  totalPaidPaise: number;
}

export interface InternalProjectRecord {
  id: string;
  title: string;
  customerId: string;
  customerName: string;
  serviceCategory: string;
  status: "lead" | "active" | "completed" | "on_hold";
  startDate: string;
  completionDate?: string;
  contractValuePaise: number;
  amountReceivedPaise: number;
  outstandingBalancePaise: number;
  deliveryNotes?: string;
}

export interface InvoiceRecord {
  id: string;
  invoiceNumber: string;
  customerId: string;
  customerName: string;
  amountPaise: number;
  issuedDate: string;
  dueDate: string;
  status: "draft" | "issued" | "paid" | "partially_paid" | "void";
  paymentReference?: string;
}

export interface PaymentRecord {
  id: string;
  invoiceId: string;
  customerId: string;
  amountPaise: number;
  paymentDate: string;
  method: "Bank Transfer" | "UPI" | "Stripe" | "Other";
  referenceId: string;
  reconciled: boolean;
}

export interface ExpenseRecord {
  id: string;
  category: "Hosting & Cloud" | "Software Licenses" | "Hardware Prototyping" | "Office & Legal";
  description: string;
  amountPaise: number;
  date: string;
  vendor: string;
}

export interface BusinessAnalyticsSummary {
  totalCustomers: number;
  totalProjects: number;
  completedProjects: number;
  activeProjects: number;
  grossInvoicedPaise: number;
  totalCollectedPaise: number;
  outstandingPaise: number;
  totalRefundsPaise: number;
  totalDirectExpensesPaise: number;
  netRevenuePaise: number;
  grossProfitPaise: number;
  averageProjectValuePaise: number;
}

/**
 * Format integer paise into standard Indian Rupee representation.
 * Example: 15000000 paise -> ₹1,50,000.00
 */
export function formatPaiseToINR(paise: number, includeDecimals = true): string {
  const rupees = paise / 100;
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: includeDecimals ? 2 : 0,
    maximumFractionDigits: includeDecimals ? 2 : 0,
  }).format(rupees);
  return formatted;
}

/**
 * Calculate financial totals safely using integer arithmetic.
 */
export function calculateFinancialSummary(
  invoices: InvoiceRecord[],
  payments: PaymentRecord[],
  expenses: ExpenseRecord[],
  customers: CustomerRecord[],
  projects: InternalProjectRecord[]
): BusinessAnalyticsSummary {
  const totalCustomers = customers.length;
  const totalProjects = projects.length;
  const completedProjects = projects.filter((p) => p.status === "completed").length;
  const activeProjects = projects.filter((p) => p.status === "active").length;

  // Sum integers strictly
  const grossInvoicedPaise = invoices
    .filter((inv) => inv.status !== "void" && inv.status !== "draft")
    .reduce((acc, inv) => acc + inv.amountPaise, 0);

  const totalCollectedPaise = payments
    .filter((p) => p.reconciled)
    .reduce((acc, p) => acc + p.amountPaise, 0);

  const outstandingPaise = Math.max(0, grossInvoicedPaise - totalCollectedPaise);
  const totalRefundsPaise = 0; // Recorded as negative receipts or explicit refund records
  const totalDirectExpensesPaise = expenses.reduce((acc, e) => acc + e.amountPaise, 0);

  const netRevenuePaise = totalCollectedPaise - totalRefundsPaise;
  const grossProfitPaise = netRevenuePaise - totalDirectExpensesPaise;
  const averageProjectValuePaise =
    totalProjects > 0 ? Math.round(grossInvoicedPaise / totalProjects) : 0;

  return {
    totalCustomers,
    totalProjects,
    completedProjects,
    activeProjects,
    grossInvoicedPaise,
    totalCollectedPaise,
    outstandingPaise,
    totalRefundsPaise,
    totalDirectExpensesPaise,
    netRevenuePaise,
    grossProfitPaise,
    averageProjectValuePaise,
  };
}

/**
 * Clean baseline records for the founder's initial reconciliation ledger.
 * Note: Zero fabricated records. Invoices and payments reflect only reconciled entries.
 */
export const INITIAL_LEDGER = {
  customers: [] as CustomerRecord[],
  projects: [] as InternalProjectRecord[],
  invoices: [] as InvoiceRecord[],
  payments: [] as PaymentRecord[],
  expenses: [] as ExpenseRecord[],
};

