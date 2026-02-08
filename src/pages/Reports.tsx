import React from 'react';
import { BarChart, Download, TrendingUp } from 'lucide-react';
import '../pages/Sales.css';

export const Reports: React.FC = () => {
  const reports = [
    { name: 'Profit & Loss Report', description: 'View detailed P&L statement', icon: TrendingUp, color: '#10b981' },
    { name: 'Sales Report', description: 'Analyze sales performance', icon: BarChart, color: '#3b82f6' },
    { name: 'Purchase Report', description: 'Track purchase trends', icon: BarChart, color: '#f59e0b' },
    { name: 'Stock Report', description: 'Monitor inventory levels', icon: BarChart, color: '#8b5cf6' },
    { name: 'Expense Report', description: 'View expense breakdown', icon: BarChart, color: '#ef4444' },
    { name: 'Customer Report', description: 'Customer transaction history', icon: BarChart, color: '#ec4899' },
  ];

  return (
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>Reports & Analytics</h1>
          <p>Generate comprehensive business reports</p>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '24px'
      }}>
        {reports.map((report, index) => {
          const Icon = report.icon;
          return (
            <div key={index} style={{
              background: 'white',
              padding: '24px',
              borderRadius: '16px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }}>
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `${report.color}20`,
                  color: report.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} />
                </div>
                <button className="icon-btn" onClick={() => alert(`Generating ${report.name}...\n\n✅ Report ready for download!`)}>
                  <Download size={18} />
                </button>
              </div>
              <h3 style={{ margin: '0 0 8px 0', color: '#1f2937' }}>{report.name}</h3>
              <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>{report.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
