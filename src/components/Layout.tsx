import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  ShoppingBag,
  DollarSign,
  FileText,
  Settings,
  Bell,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onLogout }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/users', icon: Users, label: 'Users' },
    { path: '/customers', icon: Users, label: 'Customers' },
    { path: '/suppliers', icon: ShoppingCart, label: 'Suppliers' },
    { path: '/products', icon: Package, label: 'Products' },
    { path: '/sales', icon: ShoppingBag, label: 'Sales' },
    { path: '/purchases', icon: ShoppingCart, label: 'Purchases' },
    { path: '/expenses', icon: DollarSign, label: 'Expenses' },
    { path: '/reports', icon: FileText, label: 'Reports' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="layout">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">JR</div>
            <span className="logo-text">JR Marketing</span>
          </div>
          <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={onLogout}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <div className="main-content">
        <header className="top-header">
          <button className="menu-toggle" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          
          <div className="header-right">
            <Link to="/notifications" className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge">4</span>
            </Link>
            <div className="user-info">
              <div className="user-avatar">A</div>
              <span className="user-name">Admin User</span>
            </div>
          </div>
        </header>

        <main className="content">
          {children}
        </main>
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
};
