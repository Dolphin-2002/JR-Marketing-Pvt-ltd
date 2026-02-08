import React from 'react';
import { Search, Plus } from 'lucide-react';
import { mockExpenses } from '../data/mockData';
import '../pages/Sales.css';

export const Expenses: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredExpenses = mockExpenses.filter(expense =>
    expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalExpenses = filteredExpenses.reduce((acc, exp) => acc + exp.amount, 0);

  return (
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Expense Management</h1>
          <p>Track business expenses and costs</p>
        </div>
        <button className="btn-primary">
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
  );
};
