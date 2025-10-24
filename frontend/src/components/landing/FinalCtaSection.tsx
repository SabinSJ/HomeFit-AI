

import "../../assets/styles/landingFinalCtaSection.css"

import { ArrowRight, Sparkles } from "lucide-react"

function FinalCtaSection() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-content">
        <Sparkles size="48" className="cta-sparkle" />
        <h2>Ready to Transform Your Fitness?</h2>
        <p>Start your journey with AI-powered training. No equipment needed, no gym required.</p>
        <button className="cta-final">
          <span>Create Your Free Profile</span>
          <ArrowRight size="20" />
        </button>
        <p className="cta-subtext">Takes less than 2 minutes • 100% free forever</p>
      </div>
    </section>
  )
}

export default FinalCtaSection