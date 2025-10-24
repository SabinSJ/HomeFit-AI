import "../../assets/styles/landingFeaturesSection.css"

import { BarChart3, Brain, Check, Eye, Star, TrendingUp } from "lucide-react"

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-section-header">
        <div className="feature-section-badge">
          <Star size="16" />
          <span>Features</span>
        </div>
        <h2>Why Choose HomeFit AI?</h2>
        <p>Experience the future of home fitness with cutting-edge AI technology</p>
      </div>

      <div className="features-grid">
        {/* <!-- Feature 1 --> */}
        <div className="feature-card">
          <div className="feature-icon gradient-1">
            <Eye size="32" />
          </div>
          <h3>Real-Time Form Correction</h3>
          <p>
            AI watches every movement and instantly corrects your posture. Get feedback as you
            exercise, not after.
          </p>
          <ul className="feature-list">
            <li>
              <Check size="16" />
              <span>Instant posture analysis</span>
            </li>
            <li>
              <Check size="16" />
              <span>Visual and audio cues</span>
            </li>
            <li>
              <Check size="16" />
              <span>Prevent injuries before they happen</span>
            </li>
          </ul>
        </div>

        {/* <!-- Feature 2 --> */}
        <div className="feature-card">
          <div className="feature-icon gradient-2">
            <BarChart3 size="32" />
          </div>
          <h3>Automatic Rep Counting</h3>
          <p>
            Focus on your workout, not counting. AI accurately tracks every repetition and maintains
            your workout history.
          </p>
          <ul className="feature-list">
            <li>
              <Check size="16" />
              <span>Accurate motion detection</span>
            </li>
            <li>
              <Check size="16" />
              <span>Auto-logged workouts</span>
            </li>
            <li>
              <Check size="16" />
              <span>Progress tracking over time</span>
            </li>
          </ul>
        </div>

        {/* <!-- Feature 3 --> */}
        <div className="feature-card">
          <div className="feature-icon gradient-3">
            <Brain size="32" />
          </div>
          <h3>Personalized AI Programs</h3>
          <p>
            AI learns your fitness level, goals, and preferences to create custom workout plans that
            evolve with you.
          </p>
          <ul className="feature-list">
            <li>
              <Check size="16" />
              <span>Adaptive difficulty scaling</span>
            </li>
            <li>
              <Check size="16" />
              <span>Goal-oriented programming</span>
            </li>
            <li>
              <Check size="16" />
              <span>Smart rest day suggestions</span>
            </li>
          </ul>
        </div>

        {/* <!-- Feature 4 --> */}
        <div className="feature-card">
          <div className="feature-icon gradient-4">
            <TrendingUp size="32" />
          </div>
          <h3>Advanced Progress Analytics</h3>
          <p>
            Beautiful dashboards show your journey. Track strength gains, endurance improvements,
            and consistency streaks.
          </p>
          <ul className="feature-list">
            <li>
              <Check size="16" />
              <span>Detailed performance metrics</span>
            </li>
            <li>
              <Check size="16" />
              <span>Visual progress charts</span>
            </li>
            <li>
              <Check size="16" />
              <span>Achievement milestones</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection