import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, AlertCircle, X } from 'lucide-react';
import { mockDashboardMetrics, mockAlerts } from '../data/mockData';
import './Dashboard.css';

export const Dashboard: React.FC = () => {
  const [showAlerts, setShowAlerts] = React.useState(false);
  const [dateRange, setDateRange] = React.useState('thisMonth');

  const metrics = mockDashboardMetrics;

  const metricCards = [
    { 
      title: 'Total Sales', 
      value: `₹${metrics.totalSales.toLocaleString()}`, 
      icon: TrendingUp, 
      color: '#10b981',
      trend: '+12.5%'
    },
    { 
      title: 'Invoice Due', 
      value: `₹${metrics.invoiceDue.toLocaleString()}`, 
      icon: AlertCircle, 
      color: '#f59e0b',
      trend: '-5.2%'
    },
    { 
      title: 'Total Purchase', 
      value: `₹${metrics.totalPurchase.toLocaleString()}`, 
      icon: ShoppingCart, 
      color: '#3b82f6',
      trend: '+8.3%'
    },
    { 
      title: 'Purchase Due', 
      value: `₹${metrics.purchaseDue.toLocaleString()}`, 
      icon: TrendingDown, 
      color: '#ef4444',
      trend: '-2.1%'
    },
    { 
      title: 'Expenses', 
      value: `₹${metrics.expenses.toLocaleString()}`, 
      icon: DollarSign, 
      color: '#8b5cf6',
      trend: '+3.8%'
    },
    { 
      title: 'Sales Return', 
      value: `₹${metrics.salesReturn.toLocaleString()}`, 
      icon: TrendingDown, 
      color: '#ec4899',
      trend: '-1.5%'
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's your business overview.</p>
        </div>
        <div className="header-actions">
          <select 
            value={dateRange} 
            onChange={(e) => setDateRange(e.target.value)}
            className="date-filter"
          >
            <option value="today">Today</option>
            <option value="thisWeek">This Week</option>
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="thisYear">This Year</option>
            <option value="custom">Custom Range</option>
          </select>
          <button className="alert-btn" onClick={() => setShowAlerts(true)}>
            <AlertCircle size={20} />
            Alerts ({mockAlerts.length})
          </button>
        </div>
      </div>

      <div className="metrics-grid">
        {metricCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="metric-card">
              <div className="metric-header">
                <span className="metric-title">{card.title}</span>
                <div className="metric-icon" style={{ background: `${card.color}20`, color: card.color }}>
                  <Icon size={24} />
                </div>
              </div>
              <div className="metric-value">{card.value}</div>
              <div className="metric-trend" style={{ color: card.trend.startsWith('+') ? '#10b981' : '#ef4444' }}>
                {card.trend} from last period
              </div>
            </div>
          );
        })}
      </div>

      <div className="dashboard-charts">
        <div className="chart-card">
          <h3>Sales Overview</h3>
          <div className="chart-placeholder">
            <p>📊 Sales chart visualization</p>
            <small>Integration with chart library can be added</small>
          </div>
        </div>
        <div className="chart-card">
          <h3>Top Products</h3>
          <div className="chart-placeholder">
            <p>📈 Top products chart</p>
            <small>Integration with chart library can be added</small>
          </div>
        </div>
      </div>

      {showAlerts && (
        <div className="alert-modal-overlay" onClick={() => setShowAlerts(false)}>
          <div className="alert-modal" onClick={(e) => e.stopPropagation()}>
            <div className="alert-modal-header">
              <h2>Alerts & Reminders</h2>
              <button onClick={() => setShowAlerts(false)} className="close-modal-btn">
                <X size={24} />
              </button>
            </div>
            <div className="alert-list">
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
                      {new Date(alert.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <span className={`alert-badge badge-${alert.priority}`}>
                    {alert.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
