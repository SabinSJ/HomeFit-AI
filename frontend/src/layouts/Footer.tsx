// import { NavLink, useLocation } from 'react-router-dom'
// import { navigationItems, type NavigationItem } from '../constants/navigation'
import '../assets/styles/footer.css'

import { Activity } from 'lucide-react'

const Footer = () => {
//   const location = useLocation()

  return (
       <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Activity size="24" />
          <span>HomeFit AI</span>
        </div>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>
        <p className="footer-copy">© 2025 HomeFit AI. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer