import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Footer from './Footer'
import '../assets/styles/mainLayout.css'

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      
      <div className="main-wrapper">
        <main className="main-content">
          <Outlet />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout