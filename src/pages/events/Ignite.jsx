import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';

export default function Ignite() {
  return (
    <div id="page-ignite" className="page active" style={{ paddingTop: 0 }}>
      <div className="event-detail-hero" style={{'--ev-glow':'rgba(245,166,35,0.08)'}}>
        <span className="event-big-icon">🔥</span>
        <h1 className="event-detail-title" style={{color:'var(--amber)', textShadow:'var(--glow-amber)'}}>IGNITE</h1>
  
   
      </div>
      <div className="event-body">
        <Reveal>
          <div className="event-section-h">OVERVIEW</div>
          <p>Ignite is a multi-phase entrepreneurship and finance simulation competition that bridges startup culture with real-world capital markets. The event is designed to give participants an immersive experience of the entire startup-to-IPO journey — from pitching a business idea to being listed on a virtual stock exchange and traded by fellow participants.</p>
          <p>Ignite brings together entrepreneurial thinking, financial literacy, and market strategy in one cohesive, high-energy competition unlike any standard business plan competition.</p>
        </Reveal>
        
        <Reveal>
          <div className="event-section-h">EVENT PHASES</div>
          <div className="phase-card">
            <div className="phase-num">PHASE 01</div>
            <div className="phase-title">Startup Pitch</div>
            <p>Startup teams develop and present a comprehensive business pitch covering their product/service, market opportunity, revenue model, projected financials, and growth roadmap before a panel of judges.</p>
            <ul>
              <li>Full business pitch: idea, market research, business model, financials, growth strategy</li>
              <li>Evaluated on a 15-point rubric by a panel of judges</li>
              <li>Criteria: clarity of idea, market viability, financial projections, team readiness, Q&A performance</li>
            </ul>
          </div>
          <div className="phase-card">
            <div className="phase-num">PHASE 02</div>
            <div className="phase-title">DRHP Filing & Virtual IPO</div>
            <p>Each startup submits a Draft Red Herring Prospectus (DRHP) using the template provided by Finanza — the Finance and Investment Club of Rishihood University — which acts as SEBI in this simulation.</p>
            <ul>
              <li>Submit DRHP using Finanza's standardized template</li>
              <li>Finanza reviews, approves, and lists startups on the virtual trading platform</li>
              <li>Trading participants receive virtual capital allocation and trade shares</li>
              <li>Startup with highest market cap earns 5 bonus points</li>
              <li>Best-performing, most diversified portfolio wins the trading prize pool</li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="event-section-h">EVENT FLOW</div>
          <div className="flow-steps">
            <span className="flow-step">Registrations</span><span className="flow-arrow">→</span>
            <span className="flow-step">Team Onboarding & DRHP Template</span><span className="flow-arrow">→</span>
            <span className="flow-step">Phase 1: Startup Pitches</span><span className="flow-arrow">→</span>
            <span className="flow-step">Judges' Evaluation</span><span className="flow-arrow">→</span>
            <span className="flow-step">DRHP Submission</span><span className="flow-arrow">→</span>
            <span className="flow-step">Finanza Review & Listing</span><span className="flow-arrow">→</span>
            <span className="flow-step">Phase 2: Virtual Trading</span><span className="flow-arrow">→</span>
            <span className="flow-step">Portfolio Evaluation</span><span className="flow-arrow">→</span>
            <span className="flow-step">Results & Prize Distribution</span>
          </div>
        </Reveal>
        
      
        
        <Reveal>
          <div className="event-section-h">POINT OF CONTACT</div>
          <div className="poc-card">
            <div className="poc-item"><strong>POC 1</strong><span>G.D. Siddhardha — <a href="tel:6303005396">6303005396</a></span></div>
            <div className="poc-item"><strong>POC 2</strong><span>Prabhav — <a href="tel:9855539056">9855539056</a></span></div>
          </div>
        </Reveal>
        

        
        <Reveal style={{textAlign:'center'}}>
          <a className="event-register-btn" href="https://unstop.com/college-fests/makersx-fest-rishihood-university-454805" target="_blank" rel="noopener noreferrer">Register for Ignite →</a>
        </Reveal>
      </div>
    </div>
  );
}
