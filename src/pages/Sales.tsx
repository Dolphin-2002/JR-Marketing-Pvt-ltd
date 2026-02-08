import React from 'react';
import { Search, Filter, Plus, Eye, Download } from 'lucide-react';
import { mockSales } from '../data/mockData';
import { Modal } from '../components/Modal';
import type { Sale } from '../types';
import './Sales.css';

export const Sales: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState('all');
  const [filterPayment, setFilterPayment] = React.useState('all');
  const [showNewSaleModal, setShowNewSaleModal] = React.useState(false);
  const [showViewModal, setShowViewModal] = React.useState(false);
  const [selectedSale, setSelectedSale] = React.useState<Sale | null>(null);

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

  const handleViewSale = (sale: Sale) => {
    setSelectedSale(sale);
    setShowViewModal(true);
  };

  const handleNewSale = () => {
    alert('New sale created successfully! 🎉');
    setShowNewSaleModal(false);
  };

  const handleExport = () => {
    alert('Sales data exported successfully! 📊\n\nDownload: sales_report.xlsx');
  };

  return (
    <>
      <Modal
        isOpen={showNewSaleModal}
        onClose={() => setShowNewSaleModal(false)}
        title="Create New Sale"
        size="large"
      >
        <div>
          <div className="form-group">
            <label>Customer *</label>
            <select defaultValue="">
              <option value="" disabled>Select customer</option>
              <option value="1">ABC Traders</option>
              <option value="2">XYZ Corporation</option>
              <option value="3">DEF Company</option>
              <option value="4">GHI Enterprises</option>
            </select>
          </div>
          <div className="form-group">
            <label>Payment Method *</label>
            <select defaultValue="">
              <option value="" disabled>Select payment method</option>
              <option value="cash">Cash</option>
              <option value="cheque">Cheque</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </div>
          <div className="form-group">
            <label>Amount *</label>
            <input type="number" placeholder="Enter amount" />
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea placeholder="Add any notes or remarks..."></textarea>
          </div>
          <div className="form-actions">
            <button className="btn-cancel" onClick={() => setShowNewSaleModal(false)}>Cancel</button>
            <button className="btn-submit" onClick={handleNewSale}>Create Sale</button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        title={`Sale Details - ${selectedSale?.id}`}
        size="medium"
      >
        {selectedSale && (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{ marginBottom: '8px' }}><strong>Customer:</strong> {selectedSale.customerName}</p>
              <p style={{ marginBottom: '8px' }}><strong>Date:</strong> {new Date(selectedSale.date).toLocaleDateString()}</p>
              <p style={{ marginBottom: '8px' }}><strong>Payment Method:</strong> {selectedSale.paymentMethod}</p>
              <p style={{ marginBottom: '8px' }}>
                <strong>Status:</strong>{' '}
                <span className={`status-badge ${getStatusClass(selectedSale.paymentStatus)}`}>
                  {selectedSale.paymentStatus}
                </span>
              </p>
            </div>
            <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
              <h4 style={{ marginBottom: '12px' }}>Items</h4>
              {selectedSale.items.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>{item.productName} (x{item.quantity})</span>
                  <span>₹{item.total.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#eff6ff', padding: '16px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <strong>Total:</strong>
                <strong>₹{selectedSale.total.toLocaleString()}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Paid:</span>
                <span style={{ color: '#10b981' }}>₹{selectedSale.paid.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Due:</span>
                <span style={{ color: '#ef4444' }}>₹{(selectedSale.total - selectedSale.paid).toLocaleString()}</span>
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-cancel" onClick={() => setShowViewModal(false)}>Close</button>
              <button className="btn-submit" onClick={() => alert('Invoice printed! 🖨️')}>Print Invoice</button>
            </div>
          </div>
        )}
      </Modal>
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Sales Management</h1>
          <p>Manage all sales transactions and invoices</p>
        </div>
        <button className="btn-primary" onClick={() => setShowNewSaleModal(true)}>
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

          <button className="btn-secondary" onClick={handleExport}>
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
                  <button className="icon-btn" title="View Details" onClick={() => handleViewSale(sale)}>
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};
