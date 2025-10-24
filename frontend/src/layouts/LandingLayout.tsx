import { Outlet } from 'react-router-dom'
// import Footer from './Footer'

function LandingLayout() {
  return (
    <div className="landing-layout">
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default LandingLayout