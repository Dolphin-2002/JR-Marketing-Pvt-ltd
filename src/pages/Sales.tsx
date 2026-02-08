import React from 'react';
import { Search, Filter, Plus, Eye, Download } from 'lucide-react';
import { mockSales } from '../data/mockData';
import './Sales.css';

export const Sales: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState('all');
  const [filterPayment, setFilterPayment] = React.useState('all');

  const filteredSales = mockSales.filter(sale => {
    const matchesSearch = sale.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          sale.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || sale.paymentStatus === filterStatus;
    const matchesPayment = filterPayment === 'all' || sale.paymentMethod === filterPayment;
    return matchesSearch && matchesStatus && matchesPayment;
  });

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Paid': return 'status-paid';
      case 'Due': return 'status-due';
      case 'Partial': return 'status-partial';
      case 'Overdue': return 'status-overdue';
      default: return '';
    }
  };

  return (
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Sales Management</h1>
          <p>Manage all sales transactions and invoices</p>
        </div>
        <button className="btn-primary">
          <Plus size={20} />
          New Sale
        </button>
      </div>

      <div className="sales-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search by customer or invoice ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <div className="filter-item">
            <Filter size={18} />
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Due">Due</option>
              <option value="Partial">Partial</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>

          <div className="filter-item">
            <select value={filterPayment} onChange={(e) => setFilterPayment(e.target.value)}>
              <option value="all">All Payment Methods</option>
              <option value="Cash">Cash</option>
              <option value="Cheque">Cheque</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <button className="btn-secondary">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      <div className="sales-stats">
        <div className="stat-card">
          <h4>Total Sales</h4>
          <p className="stat-value">₹{mockSales.reduce((acc, sale) => acc + sale.total, 0).toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h4>Total Collected</h4>
          <p className="stat-value">₹{mockSales.reduce((acc, sale) => acc + sale.paid, 0).toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <h4>Outstanding</h4>
          <p className="stat-value text-warning">₹{mockSales.reduce((acc, sale) => acc + (sale.total - sale.paid), 0).toLocaleString()}</p>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Due</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSales.map((sale) => (
              <tr key={sale.id}>
                <td>
                  <span className="invoice-id">{sale.id}</span>
                  {sale.status === 'draft' && <span className="draft-badge">Draft</span>}
                </td>
                <td>{sale.customerName}</td>
                <td>{new Date(sale.date).toLocaleDateString()}</td>
                <td>₹{sale.total.toLocaleString()}</td>
                <td>₹{sale.paid.toLocaleString()}</td>
                <td>₹{(sale.total - sale.paid).toLocaleString()}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(sale.paymentStatus)}`}>
                    {sale.paymentStatus}
                  </span>
                </td>
                <td>{sale.paymentMethod}</td>
                <td>
                  <button className="icon-btn" title="View Details">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
