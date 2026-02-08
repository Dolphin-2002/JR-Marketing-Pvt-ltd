import React from 'react';
import { Search, Plus, Edit, Upload, AlertTriangle } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { Modal } from '../components/Modal';
import '../pages/Sales.css';

export const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showImportModal, setShowImportModal] = React.useState(false);

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = () => {
    alert('Product added successfully! 🎉');
    setShowAddModal(false);
  };

  const handleImport = () => {
    alert('Products imported successfully! 📊\n\n5 products added from Excel file');
    setShowImportModal(false);
  };

  return (
    <>
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Product"
        size="medium"
      >
        <div>
          <div className="form-group">
            <label>Product Name *</label>
            <input type="text" placeholder="Enter product name" />
          </div>
          <div className="form-group">
            <label>Category *</label>
            <select defaultValue="">
              <option value="" disabled>Select category</option>
              <option value="electronics">Electronics</option>
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="form-group">
            <label>Unit *</label>
            <select defaultValue="">
              <option value="" disabled>Select unit</option>
              <option value="pcs">Pieces</option>
              <option value="box">Box</option>
              <option value="kg">Kilogram</option>
              <option value="liter">Liter</option>
            </select>
          </div>
          <div className="form-group">
            <label>Price (₹) *</label>
            <input type="number" placeholder="Enter price" />
          </div>
          <div className="form-group">
            <label>Stock Quantity *</label>
            <input type="number" placeholder="Enter initial stock" />
          </div>
          <div className="form-group">
            <label>Low Stock Alert</label>
            <input type="number" placeholder="Alert when stock falls below" />
          </div>
          <div className="form-actions">
            <button className="btn-cancel" onClick={() => setShowAddModal(false)}>Cancel</button>
            <button className="btn-submit" onClick={handleAddProduct}>Add Product</button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showImportModal}
        onClose={() => setShowImportModal(false)}
        title="Import Products from Excel"
        size="medium"
      >
        <div>
          <div style={{ background: '#eff6ff', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#1e40af' }}>
              <strong>📝 Format Requirements:</strong><br />
              Excel file should contain columns: Name, Category, Unit, Price, Stock
            </p>
          </div>
          <div className="form-group">
            <label>Select Excel File *</label>
            <input type="file" accept=".xlsx,.xls" />
          </div>
          <div className="form-actions">
            <button className="btn-cancel" onClick={() => setShowImportModal(false)}>Cancel</button>
            <button className="btn-submit" onClick={handleImport}>Import Products</button>
          </div>
        </div>
      </Modal>
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Product Management</h1>
          <p>Manage products, stock, and pricing</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary" onClick={() => setShowImportModal(true)}>
            <Upload size={18} />
            Import
          </button>
          <button className="btn-primary" onClick={() => setShowAddModal(true)}>
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
                  <button className="icon-btn" title="Edit" onClick={() => {
                    alert(`Editing ${product.name}`);
                  }}>
                    <Edit size={18} />
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
