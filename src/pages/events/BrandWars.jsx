import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';

export default function BrandWars() {
  return (
    <div id="page-brand-wars" className="page active" style={{ paddingTop: 0 }}>
      <div className="event-detail-hero" style={{'--ev-glow':'rgba(245,166,35,0.08)'}}>
        <span className="event-big-icon">⚔️</span>
        <h1 className="event-detail-title" style={{color:'var(--amber)', textShadow:'var(--glow-amber)'}}>BRANDWARS</h1>
        <div className="event-detail-meta">
          <span className="ev-meta-chip highlight"></span>

          <span className="ev-meta-chip">👥 Teams of 2–3</span>
        </div>
      </div>
      <div className="event-body">
        <Reveal>
          <div className="event-section-h">OVERVIEW</div>
          <p>BrandWars is a head-to-head brand strategy battle where teams go toe-to-toe defending, attacking, or repositioning brands in live competitive scenarios. Think fast, position smart, and out-maneuver your opponent in real-time branding challenges.</p>
          <p>Unlike traditional competitions, BrandWars is adversarial — your success depends not just on your own strategy, but on anticipating and countering your opponent's moves. Welcome to the arena.</p>
        </Reveal>
        <Reveal>
          <div className="event-section-h">ROUNDS</div>
          <div className="phase-card">
            <div className="phase-num">ROUND 01</div>
            <div className="phase-title">Brand Audit & Positioning</div>
            <p>Each team receives a brand dossier and must develop a repositioning strategy — identifying weakness, opportunity, and a new market angle. Presented in 6 minutes to judges.</p>
          </div>
          <div className="phase-card">
            <div className="phase-num">ROUND 02</div>
            <div className="phase-title">Head-to-Head Battle</div>
            <p>Shortlisted teams face off directly — one defending the existing brand, one challenging it. Judges evaluate persuasiveness, brand knowledge depth, and strategic clarity under live debate conditions.</p>
          </div>
        </Reveal>
        <Reveal style={{textAlign:'center'}}>
          <a className="event-register-btn" href="https://unstop.com/competitions/brand-wars-rishihood-university-1666907" target="_blank" rel="noopener noreferrer">Register for BrandWars →</a>
        </Reveal>
      </div>
    </div>
  );
}
