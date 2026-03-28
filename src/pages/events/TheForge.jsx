import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';

export default function TheForge() {
  return (
    <div id="page-the-forge" className="page active" style={{ paddingTop: 0 }}>
      <div className="event-detail-hero" style={{'--ev-glow':'rgba(0,255,209,0.07)'}}>
        <span className="event-big-icon">⚙️</span>
        <h1 className="event-detail-title" style={{color:'var(--teal)', textShadow:'var(--glow-teal)'}}>THE FORGE</h1>
        <div className="event-detail-meta">
          <span className="ev-meta-chip" style={{borderColor:'var(--teal)', color:'var(--teal)', background:'rgba(0,255,209,0.08)'}}></span>
 
          <span className="ev-meta-chip">👥 Teams of 2–4</span>
        </div>
      </div>
      <div className="event-body">
        <Reveal>
          <div className="event-section-h" style={{color:'var(--teal)'}}>OVERVIEW</div>
          <p>The Forge is a sprint-format innovation competition where teams must conceptualize, build, and present a working product prototype in a single high-pressure session. Digital, physical, or hybrid — the format is open. The standard is execution.</p>
          <p>No pre-built solutions. No unfair advantages. Everyone starts from the same blank page. What you build in that room is all that matters.</p>
        </Reveal>
        <Reveal>
          <div className="event-section-h" style={{color:'var(--teal)'}}>ROUNDS</div>
          <div className="phase-card" style={{borderColor:'rgba(0,255,209,0.15)'}}>
            <div className="phase-num" style={{background:'var(--teal)', color:'var(--black)'}}>PHASE 01</div>
            <div className="phase-title">Problem Drop & Build Sprint</div>
            <p>Teams receive the problem statement at the start of the event. They have a defined build window to create a working prototype — no prep allowed. Resourcefulness and speed are the core skills tested.</p>
          </div>
          <div className="phase-card" style={{borderColor:'rgba(0,255,209,0.15)'}}>
            <div className="phase-num" style={{background:'var(--teal)', color:'var(--black)'}}>PHASE 02</div>
            <div className="phase-title">Demo & Defend</div>
            <p>Teams demo their prototype live to the judges and must answer technical and strategic questions. Judged on innovation, problem-solution fit, execution quality, and presentation clarity.</p>
          </div>
        </Reveal>
        <Reveal style={{textAlign:'center'}}>
          <Link className="event-register-btn" to="/register" style={{background:'var(--teal)', boxShadow:'var(--glow-teal)', color:'var(--black)'}}>Register for The Forge →</Link>
        </Reveal>
      </div>
    </div>
  );
}
