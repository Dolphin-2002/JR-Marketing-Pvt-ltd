export interface User {
  id: string;
  username: string;
  role: 'Admin' | 'Staff' | 'Ref';
  name: string;
}

export interface DashboardMetrics {
  totalSales: number;
  invoiceDue: number;
  totalPurchase: number;
  purchaseDue: number;
  expenses: number;
  salesReturn: number;
}

export interface Alert {
  id: string;
  type: 'payment' | 'stock' | 'cheque';
  message: string;
  timestamp: Date;
  priority: 'high' | 'medium' | 'low';
}

export interface Product {
  id: string;
  name: string;
  category: string;
  unit: string;
  price: number;
  stock: number;
  lowStockAlert?: number;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  balance: number;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  balance: number;
}

export interface Sale {
  id: string;
  customerId: string;
  customerName: string;
  date: Date;
  total: number;
  paid: number;
  paymentStatus: 'Paid' | 'Due' | 'Partial' | 'Overdue';
  paymentMethod: 'Cash' | 'Cheque' | 'Bank Transfer';
  items: SaleItem[];
  status: 'completed' | 'draft';
}

export interface SaleItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Purchase {
  id: string;
  supplierId: string;
  supplierName: string;
  date: Date;
  total: number;
  paid: number;
  status: 'completed' | 'returned';
}

export interface Expense {
  id: string;
  category: string;
  amount: number;
  date: Date;
  description: string;
  paymentMethod: string;
}
