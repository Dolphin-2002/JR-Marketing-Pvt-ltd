import React from 'react';
import { X } from 'lucide-react';
import { mockAlerts } from '../data/mockData';
import '../pages/Dashboard.css';

export const Notifications: React.FC = () => {
  return (
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Notifications & Alerts</h1>
          <p>Stay updated with important business alerts</p>
        </div>
      </div>

      <div className="alert-list" style={{ padding: 0 }}>
        {mockAlerts.map((alert) => (
          <div key={alert.id} className={`alert-item priority-${alert.priority}`}>
            <div className="alert-icon">
              {alert.type === 'payment' && '💰'}
              {alert.type === 'stock' && '📦'}
              {alert.type === 'cheque' && '💳'}
            </div>
            <div className="alert-content">
              <p className="alert-message">{alert.message}</p>
              <span className="alert-time">
                {new Date(alert.timestamp).toLocaleString()}
              </span>
            </div>
            <span className={`alert-badge badge-${alert.priority}`}>
              {alert.priority}
            </span>
            <button className="icon-btn" style={{ marginLeft: '8px' }}>
              <X size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
