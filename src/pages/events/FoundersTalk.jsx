import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';

export default function FoundersTalk() {
  return (
    <div id="page-founders-talk" className="page active" style={{ paddingTop: 0 }}>
      {/* Event Hero */}
      <div className="event-detail-hero" style={{'--ev-glow':'rgba(245,166,35,0.08)'}}>
        <span className="event-big-icon">☕</span>
        <h1 className="event-detail-title" style={{color:'var(--orange)', textShadow:'var(--glow-amber)'}}>FOUNDERS TALK</h1>
        <div className="event-detail-meta">
          <span className="ev-meta-chip highlight">Day 2</span>
          <span className="ev-meta-chip highlight">Café Networking</span>
          <span className="ev-meta-chip">📍 Networking Lounge</span>
          <span className="ev-meta-chip">🤝 Co-hosted with E-Cell</span>
          <span className="ev-meta-chip">☕ Unlimited Coffee & Conversations</span>
        </div>
      </div>

      <div className="event-body">
        <Reveal>
          <div className="event-section-h" style={{color:'var(--orange)'}}>OVERVIEW</div>
          <p>Founders Talk is an intimate, café-style networking experience where student and aspiring entrepreneurs engage in candid conversations with real founders. Designed to break away from traditional speaker sessions, this event creates a relaxed, no-stage environment where ideas, experiences, and honest stories flow freely over coffee.</p>
          <p>Participants get the rare opportunity to interact directly with founders—asking questions, sharing their own journeys, and gaining insights into real-world challenges, failures, and breakthroughs. With a limited group size to ensure meaningful interaction, the session encourages genuine connections and peer-level dialogue.</p>
        </Reveal>
        
        <Reveal>
          <div className="event-section-h" style={{color:'var(--orange)'}}>THE EXPERIENCE</div>
          <div className="phase-card" style={{borderLeft:'4px solid var(--orange)', background:'rgba(245,166,35,0.03)'}}>
            <div className="phase-title">Direct Interaction</div>
            <p>No podiums. No microphones. Sit across from industry founders and ask the questions that matter to your startup journey.</p>
          </div>
          <div className="phase-card" style={{borderLeft:'4px solid var(--orange)', background:'rgba(245,166,35,0.03)'}}>
            <div className="phase-title">Entrepreneurial Ecosystem</div>
            <p>Co-hosted with the E-Cell of Rishihood University, this event fosters a collaborative ecosystem that extends beyond the classroom.</p>
          </div>
          <div className="phase-card" style={{borderLeft:'4px solid var(--orange)', background:'rgba(245,166,35,0.03)'}}>
            <div className="phase-title">Walk Out with Clarity</div>
            <p>Walk in with curiosity. Walk out with connections, clarity, and inspiration to kickstart your own entrepreneurial path.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="event-section-h" style={{color:'var(--orange)'}}>SESSION TOPICS</div>
          <ul style={{listStyleType:'square', paddingLeft:'20px', color:'rgba(255,255,255,0.7)'}}>
            <li>Zero-to-One: The first year of building.</li>
            <li>Navigating early failures and pivot points.</li>
            <li>Scaling with Purpose: Beyond profitability.</li>
            <li>Direct Q&A on your individual startup ideas.</li>
          </ul>
        </Reveal>

        <Reveal style={{textAlign:'center', marginTop:'40px'}}>
          <Link className="event-register-btn" to="/register" style={{background:'var(--orange)', boxShadow:'var(--glow-amber)'}}>Register — Join the Conversation →</Link>
        </Reveal>
      </div>
    </div>
  );
}
