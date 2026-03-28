import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';

export default function FoundersRunway() {
  return (
    <div id="page-founders-runway" className="page active" style={{ paddingTop: 0 }}>
      <div className="event-detail-hero" style={{'--ev-glow':'rgba(155,89,255,0.07)'}}>
        <span className="event-big-icon">🚀</span>
        <h1 className="event-detail-title" style={{color:'var(--purple)', textShadow:'var(--glow-purple)'}}>FOUNDERS' RUNWAY</h1>
        <div className="event-detail-meta">
          <span className="ev-meta-chip" style={{borderColor:'var(--purple)', color:'var(--purple)', background:'rgba(155,89,255,0.08)'}}>Day 1</span>
          <span className="ev-meta-chip">🌐 Inter-College / Open</span>
          <span className="ev-meta-chip">👥 Solo or Team</span>
        </div>
      </div>
      <div className="event-body">
        <Reveal>
          <div className="event-section-h" style={{color:'var(--purple)'}}>OVERVIEW</div>
          <p>Founders' Runway is the premier startup pitch competition at Makers'X Fest. Whether you have a validated MVP or a compelling idea backed by rigorous market research, this is your stage. Present your startup to a panel of investors, entrepreneurs, and industry experts who will evaluate your vision, execution plan, and scalability.</p>
          <p>The runway is yours. Show them why your startup deserves to take off.</p>
        </Reveal>
        <Reveal>
          <div className="event-section-h" style={{color:'var(--purple)'}}>ROUNDS</div>
          <div className="phase-card" style={{borderColor:'rgba(155,89,255,0.15)'}}>
            <div className="phase-num" style={{background:'var(--purple)'}}>ROUND 01</div>
            <div className="phase-title">Elevator Pitch</div>
            <p>Each team delivers a 3-minute elevator pitch covering the problem, solution, target market, and business model. Judges shortlist top teams for the final round based on concept clarity and market potential.</p>
          </div>
          <div className="phase-card" style={{borderColor:'rgba(155,89,255,0.15)'}}>
            <div className="phase-num" style={{background:'var(--purple)'}}>ROUND 02</div>
            <div className="phase-title">Investor Deep-Dive</div>
            <p>Shortlisted teams present a full 10-minute pitch with financials, traction, and go-to-market strategy, followed by a 5-minute Q&A from the panel. The most fundable startup wins.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="event-section-h" style={{color:'var(--purple)'}}>PARTICIPATION</div>
          <p><strong style={{color:'var(--purple)'}}>Team Size:</strong> 1–4 members &nbsp;|&nbsp; <strong style={{color:'var(--purple)'}}>Audience:</strong> Inter-college / Open</p>
        </Reveal>
        <Reveal style={{textAlign:'center'}}>
          <Link className="event-register-btn" to="/register" style={{background:'var(--purple)', boxShadow:'var(--glow-purple)'}}>Register for Founders' Runway →</Link>
        </Reveal>
      </div>
    </div>
  );
}
