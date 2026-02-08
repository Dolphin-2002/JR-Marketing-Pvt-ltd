import React from 'react';
import { Search, Plus, Edit, Upload, AlertTriangle } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import '../pages/Sales.css';

export const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Product Management</h1>
          <p>Manage products, stock, and pricing</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary">
            <Upload size={18} />
            Import
          </button>
          <button className="btn-primary">
            <Plus size={20} />
            Add Product
          </button>
        </div>
      </div>

      <div className="sales-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td><strong>{product.name}</strong></td>
                <td>{product.category}</td>
                <td>{product.unit}</td>
                <td>₹{product.price.toLocaleString()}</td>
                <td>
                  <span style={{ fontWeight: 600 }}>{product.stock}</span> {product.unit}
                </td>
                <td>
                  {product.lowStockAlert && product.stock < product.lowStockAlert ? (
                    <span className="status-badge status-overdue">
                      <AlertTriangle size={14} style={{ marginRight: 4 }} />
                      Low Stock
                    </span>
                  ) : (
                    <span className="status-badge status-paid">In Stock</span>
                  )}
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
