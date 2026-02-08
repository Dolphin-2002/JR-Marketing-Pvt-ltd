import React from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import '../pages/Sales.css';

export const Users: React.FC = () => {
  const users = [
    { id: '1', name: 'Admin User', username: 'admin', role: 'Admin', email: 'admin@jrmarketing.com', status: 'Active' },
    { id: '2', name: 'Staff Member 1', username: 'staff1', role: 'Staff', email: 'staff1@jrmarketing.com', status: 'Active' },
    { id: '3', name: 'Reference User', username: 'ref1', role: 'Ref', email: 'ref1@jrmarketing.com', status: 'Active' },
  ];

  return (
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>User Management</h1>
          <p>Manage system users and access control</p>
        </div>
        <button className="btn-primary">
          <Plus size={20} />
          Add User
        </button>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td><strong>{user.name}</strong></td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`status-badge ${
                    user.role === 'Admin' ? 'status-overdue' :
                    user.role === 'Staff' ? 'status-partial' :
                    'status-paid'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className="status-badge status-paid">{user.status}</span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="icon-btn" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button className="icon-btn" title="Delete" style={{ color: '#ef4444' }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
