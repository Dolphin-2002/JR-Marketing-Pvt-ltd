import React from 'react';
import { Search, Eye } from 'lucide-react';
import { mockPurchases } from '../data/mockData';
import '../pages/Sales.css';

export const Purchases: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPurchases = mockPurchases.filter(purchase =>
    purchase.supplierName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    purchase.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Purchase Management</h1>
          <p>Track all purchase orders and payments</p>
        </div>
      </div>

      <div className="sales-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search purchases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Purchase ID</th>
              <th>Supplier</th>
              <th>Date</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Due</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPurchases.map((purchase) => (
              <tr key={purchase.id}>
                <td><span className="invoice-id">{purchase.id}</span></td>
                <td>{purchase.supplierName}</td>
                <td>{new Date(purchase.date).toLocaleDateString()}</td>
                <td>₹{purchase.total.toLocaleString()}</td>
                <td>₹{purchase.paid.toLocaleString()}</td>
                <td>₹{(purchase.total - purchase.paid).toLocaleString()}</td>
                <td>
                  <span className={`status-badge ${purchase.status === 'returned' ? 'status-overdue' : 'status-paid'}`}>
                    {purchase.status}
                  </span>
                </td>
                <td>
                  <button className="icon-btn" title="View">
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
