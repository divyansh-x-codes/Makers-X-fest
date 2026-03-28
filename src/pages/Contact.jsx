import { useState } from 'react';
import Reveal from '../components/Reveal';
import { useToast } from '../components/ToastContext';

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

export default function Contact() {
  const showToast = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      showToast('error', 'All fields required', 'Please fill in all contact fields');
      return;
    }

    setIsSubmitting(true);
    try {
      if (SUPABASE_URL === 'YOUR_SUPABASE_URL') {
        await new Promise(r => setTimeout(r, 800));
        showToast('success', 'Message sent! ✅', 'Set up Supabase to save messages to your database');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({ name, email, message })
        });

        if (res.ok || res.status === 201) {
          showToast('success', 'Message sent! ✅', 'We\'ll get back to you shortly.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          showToast('error', 'Send failed', 'Please try again.');
        }
      }
    } catch (err) {
      showToast('error', 'Network error', 'Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="page-contact" className="page active" style={{ paddingTop: 0 }}>
      <div className="page-hero">
        <h1>GET IN <span style={{ color: 'var(--amber)' }}>TOUCH</span></h1>
        <p>Questions? We've got answers.</p>
      </div>
      <div className="contact-grid">
        <Reveal className="contact-info-section">
          <div className="section-label">Reach Us</div>
          <h2>LET'S <span style={{ color: 'var(--amber)' }}>TALK</span></h2>
          <div className="divider"></div>

          <div className="organizer-squad">
            <div className="organizer-card compact">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <img src="https://i.pinimg.com/736x/80/bd/1b/80bd1b85ef4bfc7c01423b20cf842835.jpg" alt="Adarsh Mishra" className="organizer-avatar" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--amber)' }}>Adarsh Mishra</div>
                  <div style={{ color: 'var(--grey)', fontSize: '0.85rem' }}>Outreach Member, Makers'X Fest</div>
                </div>
              </div>
              <div style={{ marginTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', }}>
                <a href="https://www.linkedin.com/in/adarsh-mishra09/" target="_blank" rel="noopener noreferrer" className="org-link linkedin-btn" style={{ width: 'fit-content' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="organizer-card compact">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <img src="https://i.pinimg.com/736x/04/35/39/04353933ca4ca372c931a74de90e6e4d.jpg" alt="Kavyansh Jain" className="organizer-avatar" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--amber)' }}>Kavyansh Jain</div>
                  <div style={{ color: 'var(--grey)', fontSize: '0.85rem' }}>Outreach Member, Makers'X Fest</div>
                </div>
              </div>
              <div style={{ marginTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="https://www.linkedin.com/in/kavyansh-jain-007b4b25b/" target="_blank" rel="noopener noreferrer" className="org-link linkedin-btn" style={{ width: 'fit-content' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <div className="section-label">Follow Rishihood</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.5rem' }}>
              <a href="https://www.linkedin.com/school/rishihood/" target="_blank" rel="noopener noreferrer" className="social-card linkedin" style={{ flex: 'none' }}>
                <svg className="social-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="rgba(0,255,209,0.1)" /><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" fill="#00FFD1" /><circle cx="4" cy="4" r="2" fill="#00FFD1" /></svg>
                <div className="social-card-text"><strong>LinkedIn</strong><span>Rishihood University</span></div>
              </a>
              <a href="https://www.instagram.com/rishihooduni?igsh=MWFsajloa3Z0M2lubA==" target="_blank" rel="noopener noreferrer" className="social-card instagram" style={{ flex: 'none' }}>
                <svg className="social-icon" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="rgba(245,166,35,0.1)" /><rect x="4" y="4" width="16" height="16" rx="5" stroke="#F5A623" strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke="#F5A623" strokeWidth="2" /><circle cx="16.5" cy="7.5" r="1" fill="#F5A623" /></svg>
                <div className="social-card-text"><strong>Instagram</strong><span>@rishihooduni</span></div>
              </a>
            </div>
          </div>

          <div className="address-card" style={{ marginTop: '2rem', width: '100%' }}>
            <div className="address-icon">📍</div>
            <div className="address-text">
              <strong>Rishihood University</strong>
              <span>NH-44, Sonipat, Haryana, India</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="section-label">Send a Message</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', letterSpacing: '3px', marginBottom: '2rem' }}>DROP US A <span style={{ color: 'var(--amber)' }}>NOTE</span></h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} disabled={isSubmitting} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} disabled={isSubmitting} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea style={{ minHeight: '150px' }} placeholder="Your message for the organising team..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} disabled={isSubmitting}></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '0.85rem', letterSpacing: '2px' }} disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
