import { useState } from 'react';
import { useToast } from '../components/ToastContext';

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

export default function Register() {
  const showToast = useToast();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', college: '', 
    year: '', team: '', size: '1', message: '', events: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleEvent = (val) => {
    setFormData(prev => {
      const events = prev.events.includes(val) 
        ? prev.events.filter(e => e !== val)
        : [...prev.events, val];
      return { ...prev, events };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, college, year, team, size, message, events } = formData;
    
    if(!name) { showToast('error','Name is required','Please fill in your full name'); return; }
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('error','Invalid email','Please enter a valid email address'); return; }
    if(!phone || phone.length !== 10 || isNaN(phone)) { showToast('error','Invalid phone number','Please enter a 10-digit phone number'); return; }
    if(!college) { showToast('error','College name required','Please fill in your institution'); return; }
    if(events.length === 0) { showToast('error','Select at least one event','Please select the event(s) you want to register for'); return; }

    setIsSubmitting(true);
    const payload = { 
      full_name: name, email, phone, college, 
      year_of_study: year, events, 
      team_name: team || null, 
      team_size: parseInt(size) || 1, 
      message: message || null 
    };

    try {
      if(SUPABASE_URL === 'YOUR_SUPABASE_URL') {
        await new Promise(r => setTimeout(r, 1200));
        showToast('success','Registration Received! 🎉','Set up Supabase to save data to your database');
        setFormData({ name: '', email: '', phone: '', college: '', year: '', team: '', size: '1', message: '', events: [] });
      } else {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/registrations`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'apikey':SUPABASE_ANON_KEY,
            'Authorization':`Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer':'return=minimal'
          },
          body:JSON.stringify(payload)
        });
        
        if(res.ok || res.status === 201) {
          showToast('success','Registration Successful! 🎉','We\'ll confirm via email. See you at Makers\'X Fest!');
          setFormData({ name: '', email: '', phone: '', college: '', year: '', team: '', size: '1', message: '', events: [] });
        } else {
          showToast('error','Submission failed','Please try again or contact us directly.');
        }
      }
    } catch(err) {
      showToast('error','Network error','Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="page-register" className="page active" style={{ paddingTop: 0 }}>
      <div className="page-hero">
        <h1>REGISTER <span style={{color:'var(--amber)'}}>NOW</span></h1>
        <p>Secure your spot at Makers'X Fest 2026</p>
      </div>
      <div className="register-wrap">
        <div className="form-title">LET'S GO.</div>
        <div className="form-sub">Fill in your details below. We'll confirm your registration via email.</div>
        
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" placeholder="Your full name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" placeholder="you@college.edu" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" placeholder="10-digit mobile number" maxLength="10" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label>College Name *</label>
            <input type="text" placeholder="Your institution" required value={formData.college} onChange={e => setFormData({...formData, college: e.target.value})} disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label>Year of Study</label>
            <select value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} disabled={isSubmitting}>
              <option value="">Select year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
              <option>Postgraduate</option>
            </select>
          </div>
          <div className="form-group">
            <label>Team Name (optional)</label>
            <input type="text" placeholder="Your team name" value={formData.team} onChange={e => setFormData({...formData, team: e.target.value})} disabled={isSubmitting} />
          </div>
          <div className="form-group">
            <label>Team Size</label>
            <select value={formData.size} onChange={e => setFormData({...formData, size: e.target.value})} disabled={isSubmitting}>
              {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n === 1 ? 'Solo (1)' : `${n} Members`}</option>)}
            </select>
          </div>
          
          <div className="form-group full">
            <label>Select Event(s) *</label>
            <div className="events-checkboxes">
              {[
                { id: 'ignite', label: '🔥 Ignite' },
                { id: 'casehunt', label: '🧩 Case Hunt' },
                { id: 'founders-runway', label: '🚀 Founders\' Runway' },
                { id: 'ad-mania', label: '📣 Ad Mania' },
                { id: 'brand-wars', label: '⚔️ BrandWars' },
                { id: 'the-forge', label: '⚙️ The Forge' },
                { id: 'mokshapatram', label: '🎲 Mokshapatram' },
                { id: 'founders-talk', label: '☕ Founders Talk' }
              ].map(event => (
                <label key={event.id} className={`event-checkbox ${formData.events.includes(event.id) ? 'checked' : ''}`} onClick={(e) => { e.preventDefault(); toggleEvent(event.id); }}>
                  <input type="checkbox" value={event.id} checked={formData.events.includes(event.id)} readOnly />
                  <div className="check-box"></div>
                  <span>{event.label}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="form-group full">
            <label>Additional Message</label>
            <textarea placeholder="Any questions or notes for the organizing team..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} disabled={isSubmitting}></textarea>
          </div>
          
          <div className="form-group full" style={{ marginTop: '1rem' }}>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'SUBMITTING...' : 'REGISTER NOW — MAKERS\'X FEST 2026'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
