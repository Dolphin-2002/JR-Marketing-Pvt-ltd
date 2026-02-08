import React from 'react';
import { Search, Plus } from 'lucide-react';
import { mockExpenses } from '../data/mockData';
import { Modal } from '../components/Modal';
import '../pages/Sales.css';

export const Expenses: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showAddModal, setShowAddModal] = React.useState(false);

  const filteredExpenses = mockExpenses.filter(expense =>
    expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalExpenses = filteredExpenses.reduce((acc, exp) => acc + exp.amount, 0);

  const handleAddExpense = () => {
    alert('Expense recorded successfully! 💰');
    setShowAddModal(false);
  };

  return (
    <>
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Expense"
        size="medium"
      >
        <div>
          <div className="form-group">
            <label>Category *</label>
            <select defaultValue="">
              <option value="" disabled>Select category</option>
              <option value="rent">Rent</option>
              <option value="utilities">Utilities</option>
              <option value="salaries">Salaries</option>
              <option value="transport">Transport</option>
              <option value="marketing">Marketing</option>
              <option value="maintenance">Maintenance</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Amount (₹) *</label>
            <input type="number" placeholder="Enter amount" />
          </div>
          <div className="form-group">
            <label>Payment Method *</label>
            <select defaultValue="">
              <option value="" disabled>Select payment method</option>
              <option value="cash">Cash</option>
              <option value="bank">Bank Transfer</option>
              <option value="cheque">Cheque</option>
            </select>
          </div>
          <div className="form-group">
            <label>Description *</label>
            <textarea placeholder="Enter expense description"></textarea>
          </div>
          <div className="form-actions">
            <button className="btn-cancel" onClick={() => setShowAddModal(false)}>Cancel</button>
            <button className="btn-submit" onClick={handleAddExpense}>Add Expense</button>
          </div>
        </div>
      </Modal>
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Expense Management</h1>
          <p>Track business expenses and costs</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
          <Plus size={20} />
          Add Expense
        </button>
      </div>

      <div className="sales-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search expenses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="sales-stats">
        <div className="stat-card">
          <h4>Total Expenses</h4>
          <p className="stat-value text-warning">₹{totalExpenses.toLocaleString()}</p>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense) => (
              <tr key={expense.id}>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
                <td><strong>{expense.category}</strong></td>
                <td>{expense.description}</td>
                <td style={{ fontWeight: 600, color: '#ef4444' }}>
                  ₹{expense.amount.toLocaleString()}
                </td>
                <td>{expense.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};
