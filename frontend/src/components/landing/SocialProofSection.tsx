import "../../assets/styles/landingSocialProofSection.css"

import { Award, Dumbbell, Heart, Users } from "lucide-react"

function SocialProofSection() {
  return (
    <section className="social-proof-section">
      <div className="section-header">
        <div className="social-proof-section-badge">
          <Users size="16" />
          <span>Trusted by Athletes</span>
        </div>
        <h2>Join Thousands Getting Stronger</h2>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <Users size="40" className="stat-card-icon" />
          <div className="stat-card-value">10,000+</div>
          <div className="stat-card-label">Active Users</div>
        </div>
        <div className="stat-card">
          <Dumbbell size="40" className="stat-card-icon" />
          <div className="stat-card-value">500K+</div>
          <div className="stat-card-label">Workouts Completed</div>
        </div>
        <div className="stat-card">
          <Award size="40" className="stat-card-icon" />
          <div className="stat-card-value">98%</div>
          <div className="stat-card-label">Success Rate</div>
        </div>
        <div className="stat-card">
          <Heart size="40" className="stat-card-icon" />
          <div className="stat-card-value">4.9/5</div>
          <div className="stat-card-label">User Rating</div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection