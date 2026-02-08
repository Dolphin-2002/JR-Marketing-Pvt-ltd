import React from 'react';
import { Search, Plus, Edit, Upload } from 'lucide-react';
import { mockSuppliers } from '../data/mockData';
import '../pages/Sales.css';

export const Suppliers: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredSuppliers = mockSuppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Supplier Management</h1>
          <p>Manage supplier contacts and payments</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary">
            <Upload size={18} />
            Import
          </button>
          <button className="btn-primary">
            <Plus size={20} />
            Add Supplier
          </button>
        </div>
      </div>

      <div className="sales-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search suppliers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Supplier Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Balance Due</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSuppliers.map((supplier) => (
              <tr key={supplier.id}>
                <td><strong>{supplier.name}</strong></td>
                <td>{supplier.email}</td>
                <td>{supplier.phone}</td>
                <td>{supplier.address}</td>
                <td>
                  <span style={{ 
                    fontWeight: 600,
                    color: supplier.balance > 0 ? '#f59e0b' : '#10b981'
                  }}>
                    ₹{supplier.balance.toLocaleString()}
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
