import { NavLink, useLocation } from 'react-router-dom'
import { navigationItems, type NavigationItem } from '../constants/navigation'
import '../assets/styles/sidebar.css'

const Sidebar = () => {
  const location = useLocation()

  return (
    <aside className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">💪</span>
          <span className="logo-text">
            <span className="logo-home">HomeFit</span>
            <span className="logo-ai">AI</span>
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navigationItems.map((navigationItem: NavigationItem) => (
          <NavLink
            key={navigationItem.label}
            to={navigationItem.path}
            className={({ isActive }: { isActive: boolean }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            <span className="nav-icon">{navigationItem.icon}</span>
            <span className="nav-label">{navigationItem.label}</span>

            {location.pathname === navigationItem.path && (
              <div className="active-bar"></div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <NavLink to="/settings" className="nav-link">
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Settings</span>
        </NavLink>

        <div className="user-profile">
          <div className="avatar">👤</div>
          <div className="user-info">
            <div className="user-name">Guest User</div>
            <div className="user-status">Setup profile →</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar