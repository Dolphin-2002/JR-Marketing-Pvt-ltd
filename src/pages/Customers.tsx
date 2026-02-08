import React from 'react';
import { Search, Plus, Edit, Upload } from 'lucide-react';
import { mockCustomers } from '../data/mockData';
import '../pages/Sales.css';

export const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Customer Management</h1>
          <p>Manage customer contacts and balances</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary">
            <Upload size={18} />
            Import
          </button>
          <button className="btn-primary">
            <Plus size={20} />
            Add Customer
          </button>
        </div>
      </div>

      <div className="sales-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Balance Due</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td><strong>{customer.name}</strong></td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>
                  <span style={{ 
                    fontWeight: 600,
                    color: customer.balance > 0 ? '#f59e0b' : '#10b981'
                  }}>
                    ₹{customer.balance.toLocaleString()}
                  </span>
                </td>
                <td>
                  <button className="icon-btn" title="Edit">
                    <Edit size={18} />
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
