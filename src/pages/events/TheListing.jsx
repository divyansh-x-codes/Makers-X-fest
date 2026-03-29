import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';

export default function TheListing() {
  return (
    <div id="page-the-listing" className="page active" style={{ paddingTop: 0 }}>
      {/* Event Hero */}
      <div className="event-detail-hero" style={{'--ev-glow':'rgba(57, 217, 106, 0.08)'}}>
        <span className="event-big-icon">📈</span>
        <h1 className="event-detail-title" style={{color:'var(--green)', textShadow:'0 0 15px rgba(57, 217, 106, 0.4)'}}>THE LISTING</h1>
        <div className="event-detail-meta">
          <span className="ev-meta-chip">Virtual Stock Market Simulation</span>
          <span className="ev-meta-chip">Rishihood University</span>
        </div>
      </div>

      <div className="event-body">
        <Reveal>
          <div className="event-section-h" style={{color:'var(--green)'}}>OVERVIEW</div>
          <p>A high-stakes virtual trading competition where participants trade shares of startups selected from Ignite. Experience a simulated IPO and compete to build the strongest portfolio in a live market environment.</p>
          <p>The Listing is where the startups from Ignite meet the "investors". It's a parallel simulation that tests your market intuition, financial analysis, and timing.</p>
        </Reveal>
    
        <Reveal>
          <div className="event-section-h" style={{color:'var(--green)'}}>⚙️ HOW IT WORKS</div>
          <div className="phase-card" style={{borderLeft:'4px solid var(--green)'}}>
            <ul style={{listStyleType:'none', padding:0}}>
              <li style={{marginBottom:'1rem'}}>• Trade startup shares on an in-house virtual platform.</li>
              <li style={{marginBottom:'1rem'}}>• Equal virtual capital allocated to all participants at start.</li>
              <li style={{marginBottom:'1rem'}}>• Live trading sessions only; no trades possible after market close.</li>
              <li>• Portfolios judged on total value, diversification, and strategy robustness.</li>
            </ul>
          </div>
        </Reveal>

       

        <Reveal style={{textAlign:'center', marginTop:'4rem'}}>
          <a className="event-register-btn" href="https://unstop.com/competitions/the-listing-virtual-stock-market-simulation-makersx-fest-rishihood-university-1667053" target="_blank" rel="noopener noreferrer" style={{background:'var(--green)', color:'#000', boxShadow:'0 0 25px rgba(57, 217, 106, 0.3)'}}>Register for The Listing →</a>
        </Reveal>
      </div>
    </div>
  );
}
