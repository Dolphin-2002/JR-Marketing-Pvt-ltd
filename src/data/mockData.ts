import type { User, DashboardMetrics, Alert, Product, Customer, Supplier, Sale, Purchase, Expense } from '../types';

// Mock data for demo purposes
export const mockUser: User = {
  id: '1',
  username: 'admin',
  role: 'Admin',
  name: 'Admin User'
};

export const mockDashboardMetrics: DashboardMetrics = {
  totalSales: 1250000,
  invoiceDue: 350000,
  totalPurchase: 850000,
  purchaseDue: 125000,
  expenses: 180000,
  salesReturn: 45000
};

export const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'payment',
    message: 'Payment due from ABC Traders - ₹50,000',
    timestamp: new Date(),
    priority: 'high'
  },
  {
    id: '2',
    type: 'stock',
    message: 'Low stock alert: Product XYZ - Only 5 units left',
    timestamp: new Date(),
    priority: 'high'
  },
  {
    id: '3',
    type: 'cheque',
    message: 'Cheque payment reminder: DEF Company - ₹25,000 due tomorrow',
    timestamp: new Date(),
    priority: 'medium'
  },
  {
    id: '4',
    type: 'payment',
    message: 'Partial payment received from GHI Enterprises - ₹30,000',
    timestamp: new Date(),
    priority: 'low'
  }
];

export const mockProducts: Product[] = [
  { id: '1', name: 'Product A', category: 'Electronics', unit: 'pcs', price: 5000, stock: 150, lowStockAlert: 20 },
  { id: '2', name: 'Product B', category: 'Hardware', unit: 'box', price: 1200, stock: 8, lowStockAlert: 10 },
  { id: '3', name: 'Product C', category: 'Software', unit: 'license', price: 15000, stock: 50, lowStockAlert: 5 },
  { id: '4', name: 'Product D', category: 'Electronics', unit: 'pcs', stock: 200, price: 3500, lowStockAlert: 30 },
  { id: '5', name: 'Product E', category: 'Accessories', unit: 'pcs', price: 800, stock: 300, lowStockAlert: 50 }
];

export const mockCustomers: Customer[] = [
  { id: '1', name: 'ABC Traders', email: 'abc@example.com', phone: '9876543210', address: '123 Main St, City', balance: 50000 },
  { id: '2', name: 'XYZ Corporation', email: 'xyz@example.com', phone: '9876543211', address: '456 Park Ave, City', balance: 0 },
  { id: '3', name: 'DEF Company', email: 'def@example.com', phone: '9876543212', address: '789 Business Rd, City', balance: 25000 },
  { id: '4', name: 'GHI Enterprises', email: 'ghi@example.com', phone: '9876543213', address: '321 Commerce St, City', balance: 15000 }
];

export const mockSuppliers: Supplier[] = [
  { id: '1', name: 'Supplier One', email: 'sup1@example.com', phone: '9876543220', address: '111 Supply St, City', balance: 75000 },
  { id: '2', name: 'Supplier Two', email: 'sup2@example.com', phone: '9876543221', address: '222 Vendor Ave, City', balance: 0 },
  { id: '3', name: 'Supplier Three', email: 'sup3@example.com', phone: '9876543222', address: '333 Wholesale Rd, City', balance: 50000 }
];

export const mockSales: Sale[] = [
  {
    id: 'S001',
    customerId: '1',
    customerName: 'ABC Traders',
    date: new Date('2026-02-05'),
    total: 125000,
    paid: 75000,
    paymentStatus: 'Partial',
    paymentMethod: 'Bank Transfer',
    status: 'completed',
    items: [
      { productId: '1', productName: 'Product A', quantity: 10, price: 5000, total: 50000 },
      { productId: '3', productName: 'Product C', quantity: 5, price: 15000, total: 75000 }
    ]
  },
  {
    id: 'S002',
    customerId: '2',
    customerName: 'XYZ Corporation',
    date: new Date('2026-02-07'),
    total: 45000,
    paid: 45000,
    paymentStatus: 'Paid',
    paymentMethod: 'Cash',
    status: 'completed',
    items: [
      { productId: '4', productName: 'Product D', quantity: 10, price: 3500, total: 35000 },
      { productId: '5', productName: 'Product E', quantity: 12, price: 800, total: 9600 }
    ]
  },
  {
    id: 'S003',
    customerId: '3',
    customerName: 'DEF Company',
    date: new Date('2026-01-30'),
    total: 60000,
    paid: 0,
    paymentStatus: 'Overdue',
    paymentMethod: 'Cheque',
    status: 'completed',
    items: [
      { productId: '1', productName: 'Product A', quantity: 12, price: 5000, total: 60000 }
    ]
  },
  {
    id: 'D001',
    customerId: '4',
    customerName: 'GHI Enterprises',
    date: new Date('2026-02-08'),
    total: 28000,
    paid: 0,
    paymentStatus: 'Due',
    paymentMethod: 'Cash',
    status: 'draft',
    items: [
      { productId: '2', productName: 'Product B', quantity: 10, price: 1200, total: 12000 },
      { productId: '5', productName: 'Product E', quantity: 20, price: 800, total: 16000 }
    ]
  }
];

export const mockPurchases: Purchase[] = [
  {
    id: 'P001',
    supplierId: '1',
    supplierName: 'Supplier One',
    date: new Date('2026-02-01'),
    total: 250000,
    paid: 175000,
    status: 'completed'
  },
  {
    id: 'P002',
    supplierId: '2',
    supplierName: 'Supplier Two',
    date: new Date('2026-02-03'),
    total: 180000,
    paid: 180000,
    status: 'completed'
  },
  {
    id: 'P003',
    supplierId: '3',
    supplierName: 'Supplier Three',
    date: new Date('2026-02-06'),
    total: 95000,
    paid: 45000,
    status: 'completed'
  }
];

export const mockExpenses: Expense[] = [
  { id: '1', category: 'Rent', amount: 50000, date: new Date('2026-02-01'), description: 'Office rent for February', paymentMethod: 'Bank Transfer' },
  { id: '2', category: 'Utilities', amount: 8000, date: new Date('2026-02-02'), description: 'Electricity bill', paymentMethod: 'Cash' },
  { id: '3', category: 'Salaries', amount: 120000, date: new Date('2026-02-05'), description: 'Staff salaries', paymentMethod: 'Bank Transfer' },
  { id: '4', category: 'Transport', amount: 5000, date: new Date('2026-02-07'), description: 'Delivery charges', paymentMethod: 'Cash' }
];

export const expenseCategories = ['Rent', 'Utilities', 'Salaries', 'Transport', 'Marketing', 'Maintenance', 'Other'];
export const productCategories = ['Electronics', 'Hardware', 'Software', 'Accessories', 'Other'];
export const productUnits = ['pcs', 'box', 'kg', 'liter', 'meter', 'license'];
