import React from 'react';
import { Save } from 'lucide-react';
import '../pages/Sales.css';

export const Settings: React.FC = () => {
  return (
    <div className="sales-page">
      <div className="page-header">
        <div>
          <h1>System Settings</h1>
          <p>Configure application preferences</p>
        </div>
        <button className="btn-primary">
          <Save size={20} />
          Save Changes
        </button>
      </div>

      <div style={{ display: 'grid', gap: '24px', maxWidth: '800px' }}>
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0' }}>Company Information</h3>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Company Name</label>
              <input 
                type="text" 
                defaultValue="JR Marketing Pvt Ltd"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '14px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email</label>
              <input 
                type="email" 
                defaultValue="info@jrmarketing.com"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '14px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Phone</label>
              <input 
                type="tel" 
                defaultValue="+91 9876543210"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>
        </div>

        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0' }}>Notification Settings</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {['Sales Payment Alerts', 'Stock Alerts', 'Cheque Reminders', 'Daily Reports'].map((item, i) => (
              <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ margin: '0 0 16px 0' }}>SMS Templates</h3>
          <p style={{ color: '#6b7280', marginBottom: '16px' }}>Configure SMS notification templates for customers and staff</p>
          <button className="btn-secondary">Manage Templates</button>
        </div>
      </div>
    </div>
  );
};
