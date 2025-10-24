import "../../assets/styles/landingHeroSection.css"

import { Activity, Sparkles, Target, Zap, Clock, ArrowRight, Play, Shield, User } from "lucide-react"

interface HeroSectionProps {
  demoRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const LandingLayout = ({ demoRef, scrollToSection }: HeroSectionProps) => {
  const navigateToOnBoardingPage = () => {
    window.location.href = '/onboarding';
  }

  return (
    <>
    <div className="bg-decoration">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
    </div>

    {/* // Adaugă înainte de bg-decoration */}
    <nav className="landing-nav">
      <button className="nav-login-btn" onClick={() => window.location.href = '/login'}>
        <User size={18} />
        <span>Login</span>
      </button>
    </nav>

    {/* <!-- Hero Section --> */}
    <section className="hero">
      <div className="hero-content">
        {/* Logo */}
        <div className="logo-container">
          <div className="logo">
            <div className="logo-icon">
              <Activity size="40" strokeWidth="2.5" />
            </div>
            <div className="logo-text">
              <span className="logo-home">HomeFit</span>
              <span className="logo-ai">AI</span>
            </div>
          </div>
          <div className="ai-badge">
            <Sparkles size="16" />
            <span>AI-Powered Fitness Revolution</span>
          </div>
        </div>

        {/* <!-- Main Title --> */}
        <h1 className="hero-title">
          Your Personal AI Trainer,
          <span className="gradient-text">Always With You</span>
        </h1>

        {/* <!-- Subtitle --> */}
        <p className="hero-subtitle">
          Advanced computer vision and machine learning technology that watches your form, counts
          your reps, and guides you to perfect technique in real-time.
        </p>

        {/* <!-- Stats --> */}
        <div className="hero-stats">
          <div className="stat-item">
            <Target size="32" className="stat-icon" />
            <div className="stat-value">98%</div>
            <div className="stat-label">Accuracy Rate</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <Zap size="32" className="stat-icon" />
            <div className="stat-value">Real-time</div>
            <div className="stat-label">Feedback</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <Clock size="32" className="stat-icon" />
            <div className="stat-value">24/7</div>
            <div className="stat-label">Available</div>
          </div>
        </div>

        {/* <!-- CTA Buttons --> */}
        <div className="cta-buttons">
          <button className="cta-primary" onClick={() => navigateToOnBoardingPage()}>
            <span>Get Started Free</span>
            <ArrowRight size="20" />
          </button>
          <button className="cta-secondary" onClick={() => scrollToSection(demoRef)}>
            <Play size="20" />
            <span>See Demo</span>
          </button>
        </div>

        {/* // <!-- Trust Badge --> */}
        <div className="trust-badge">
          <Shield size="16" />
          <span>No credit card required • Privacy-first • Works in browser</span>
        </div>
      </div>
    </section>
    </>
  )
}

export default LandingLayout