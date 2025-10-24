import "../../assets/styles/landingDemoSection.css"

import { ArrowRight, Check, Gauge, Scan, Sparkles, User, Video } from "lucide-react"

interface DemoSectionProps {
  demoRef: React.RefObject<HTMLDivElement | null>;
}

const DemoSection = ({ demoRef }: DemoSectionProps) => {
  return (
    // <section className="demo-section" ref="demoSection">
    <section ref={demoRef} className="demo-section">
      <div className="demo-content">
        <div className="demo-text">
          <div className="demo-section-badge">
            <Video size="16" />
            <span>See It In Action</span>
          </div>
          <h2>AI That Actually Sees You</h2>
          <p>
            Our computer vision technology creates a real-time skeleton overlay of your body,
            analyzing joint angles, movement patterns, and exercise execution with incredible
            precision.
          </p>

          <div className="demo-features">
            <div className="demo-feature">
              <div className="demo-feature-icon">
                <Scan size="24" />
              </div>
              <div>
                <h4>33-Point Body Tracking</h4>
                <p>Tracks every major joint and body part in real-time</p>
              </div>
            </div>
            <div className="demo-feature">
              <div className="demo-feature-icon">
                <Gauge size="24" />
              </div>
              <div>
                <h4>Angle Measurement</h4>
                <p>Calculates joint angles to ensure perfect form</p>
              </div>
            </div>
            <div className="demo-feature">
              <div className="demo-feature-icon">
                <Sparkles size="24" />
              </div>
              <div>
                <h4>AI Coaching</h4>
                <p>Real-time audio and visual feedback on your technique</p>
              </div>
            </div>
          </div>

          <button className="demo-cta">
            <span>Try It Now</span>
            <ArrowRight size="20" />
          </button>
        </div>

        <div className="demo-visual">
          <div className="demo-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="mockup-title">Live Workout Session</span>
            </div>
            <div className="mockup-content">
              <div className="skeleton-demo">
                <User size="120" className="skeleton-icon" />
                <div className="skeleton-points">
                  <div className="point point-1"></div>
                  <div className="point point-2"></div>
                  <div className="point point-3"></div>
                  <div className="point point-4"></div>
                  <div className="point point-5"></div>
                </div>
              </div>
              <div className="demo-stats-overlay">
                <div className="stat-box">
                  <span className="stat-label">Reps</span>
                  <span className="stat-number">15</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Form</span>
                  <span className="stat-number good">96%</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Angle</span>
                  <span className="stat-number">87°</span>
                </div>
              </div>
              <div className="feedback-box">
                <Check size="16" />
                <span>Perfect form! Keep it up!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection