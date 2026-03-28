
// ============================================================
//  🔴 SUPABASE CONFIG — Replace with your actual credentials
//  Go to: supabase.com → Your Project → Settings → API
// ============================================================
const SUPABASE_URL = 'YOUR_SUPABASE_URL';       // 🔴 REPLACE
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // 🔴 REPLACE

// ============================================================
//  ROUTING
// ============================================================
const pageMap = {
  'home': 'page-home',
  'about': 'page-about',
  'events': 'page-events',
  'ignite': 'page-ignite',
  'casehunt': 'page-casehunt',
  'founders-runway': 'page-founders-runway',
  'ad-mania': 'page-ad-mania',
  'brand-wars': 'page-brand-wars',
  'the-forge': 'page-the-forge',
  'register': 'page-register',
  'team': 'page-team',
  'contact': 'page-contact'
};

function navigate(page, preselect) {
  const all = document.querySelectorAll('.page');
  all.forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageMap[page] || 'page-home');
  if (target) {
    target.classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  }
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  if (preselect) {
    setTimeout(() => {
      const cb = document.querySelector(`.event-checkbox input[value="${preselect}"]`);
      if (cb) {
        const label = cb.closest('.event-checkbox');
        if (!label.classList.contains('checked')) toggleCheck(label);
        label.scrollIntoView({behavior:'smooth', block:'center'});
      }
    }, 300);
  }
  initReveal();
}

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#','').split('?')[0];
  const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
  navigate(hash || 'home', params.get('event'));
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const hash = a.getAttribute('href').replace('#','').split('?')[0];
    if (pageMap[hash]) {
      e.preventDefault();
      window.location.hash = a.getAttribute('href');
    }
  });
});

// ============================================================
//  MOBILE MENU
// ============================================================
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ============================================================
//  CUSTOM CURSOR
// ============================================================
const cur = document.getElementById('cursor');
const curRing = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
function animateCursor() {
  cur.style.transform = `translate(${mx-6}px,${my-6}px)`;
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  curRing.style.transform = `translate(${rx-18}px,${ry-18}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();
document.querySelectorAll('a,button,.event-card,.event-checkbox').forEach(el => {
  el.addEventListener('mouseenter', () => { cur.style.transform += ' scale(2)'; curRing.style.width='60px'; curRing.style.height='60px'; curRing.style.borderColor='rgba(245,166,35,0.8)'; });
  el.addEventListener('mouseleave', () => { curRing.style.width='36px'; curRing.style.height='36px'; curRing.style.borderColor='rgba(245,166,35,0.5)'; });
});

// ============================================================
//  CANVAS PARTICLES
// ============================================================
(function(){
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  let W,H,particles=[];
  function resize(){ W=canvas.width=window.innerWidth; H=canvas.height=canvas.parentElement.offsetHeight; }
  resize();
  window.addEventListener('resize',resize);
  for(let i=0;i<80;i++){
    particles.push({
      x:Math.random()*2000,y:Math.random()*1000,
      vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3,
      r:Math.random()*2+0.5,
      o:Math.random()*0.5+0.1,
      c:Math.random()<0.6?'245,166,35':'0,255,209'
    });
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=W; if(p.x>W)p.x=0;
      if(p.y<0)p.y=H; if(p.y>H)p.y=0;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${p.c},${p.o})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r*3,0,Math.PI*2);
      ctx.fillStyle=`rgba(${p.c},${p.o*0.15})`;
      ctx.fill();
    });
    // draw connecting lines
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x;
        const dy=particles[i].y-particles[j].y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<120){
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle=`rgba(245,166,35,${0.06*(1-dist/120)})`;
          ctx.lineWidth=0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ============================================================
//  COUNTDOWN
// ============================================================
const target = new Date();
target.setDate(target.getDate()+30);
function updateCountdown(){
  const now=new Date();
  const diff=target-now;
  if(diff<=0){ document.getElementById('cd-days').textContent='00'; return; }
  const d=Math.floor(diff/864e5);
  const h=Math.floor((diff%864e5)/36e5);
  const m=Math.floor((diff%36e5)/6e4);
  const s=Math.floor((diff%6e4)/1e3);
  document.getElementById('cd-days').textContent=String(d).padStart(2,'0');
  document.getElementById('cd-hours').textContent=String(h).padStart(2,'0');
  document.getElementById('cd-mins').textContent=String(m).padStart(2,'0');
  document.getElementById('cd-secs').textContent=String(s).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown,1000);

// ============================================================
//  SCROLL REVEAL
// ============================================================
function initReveal(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:0.1});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>obs.observe(el));
}
initReveal();

// ============================================================
//  CHECKBOX TOGGLE
// ============================================================
function toggleCheck(label){
  const inp = label.querySelector('input[type="checkbox"]');
  inp.checked = !inp.checked;
  label.classList.toggle('checked', inp.checked);
}

// ============================================================
//  TOAST
// ============================================================
function showToast(type, msg, sub){
  const t=document.getElementById('toast');
  t.className='';
  t.classList.add('show',type);
  t.querySelector('.toast-icon').textContent = type==='success'?'✅':'❌';
  t.querySelector('.toast-msg').textContent = msg;
  t.querySelector('.toast-sub').textContent = sub||'';
  setTimeout(()=>t.classList.remove('show'),4500);
}

// ============================================================
//  REGISTRATION SUBMIT
// ============================================================
async function submitRegistration(){
  const name=document.getElementById('reg-name').value.trim();
  const email=document.getElementById('reg-email').value.trim();
  const phone=document.getElementById('reg-phone').value.trim();
  const college=document.getElementById('reg-college').value.trim();
  const year=document.getElementById('reg-year').value;
  const team=document.getElementById('reg-team').value.trim();
  const size=parseInt(document.getElementById('reg-size').value)||1;
  const msg=document.getElementById('reg-message').value.trim();
  const events=[...document.querySelectorAll('.event-checkbox.checked input')].map(i=>i.value);

  if(!name){showToast('error','Name is required','Please fill in your full name');return;}
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showToast('error','Invalid email','Please enter a valid email address');return;}
  if(!phone||phone.length!==10||isNaN(phone)){showToast('error','Invalid phone number','Please enter a 10-digit phone number');return;}
  if(!college){showToast('error','College name required','Please fill in your institution');return;}
  if(events.length===0){showToast('error','Select at least one event','Please select the event(s) you want to register for');return;}

  const btn=document.querySelector('.submit-btn');
  btn.disabled=true; btn.textContent='Submitting...';

  const payload={full_name:name,email,phone,college,year_of_study:year,events,team_name:team||null,team_size:size,message:msg||null};

  try{
    if(SUPABASE_URL==='YOUR_SUPABASE_URL'){
      await new Promise(r=>setTimeout(r,1200));
      showToast('success','Registration Received! 🎉','Set up Supabase to save data to your database');
    } else {
      const res=await fetch(`${SUPABASE_URL}/rest/v1/registrations`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'apikey':SUPABASE_ANON_KEY,
          'Authorization':`Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer':'return=minimal'
        },
        body:JSON.stringify(payload)
      });
      if(res.ok||res.status===201){
        showToast('success','Registration Successful! 🎉','We\'ll confirm via email. See you at Makers\'X Fest!');
        document.getElementById('reg-name').value='';
        document.getElementById('reg-email').value='';
        document.getElementById('reg-phone').value='';
        document.getElementById('reg-college').value='';
        document.getElementById('reg-message').value='';
        document.querySelectorAll('.event-checkbox.checked').forEach(el=>{
          el.classList.remove('checked');
          el.querySelector('input').checked=false;
        });
      } else {
        showToast('error','Submission failed','Please try again or contact us directly.');
      }
    }
  }catch(err){
    console.error(err);
    showToast('error','Network error','Please check your connection and try again.');
  }
  btn.disabled=false;
  btn.textContent='REGISTER NOW — MAKERS\'X FEST 2026';
}

// ============================================================
//  CONTACT SUBMIT
// ============================================================
async function submitContact(){
  const name=document.getElementById('c-name').value.trim();
  const email=document.getElementById('c-email').value.trim();
  const msg=document.getElementById('c-msg').value.trim();
  if(!name||!email||!msg){showToast('error','All fields required','Please fill in all contact fields');return;}

  try{
    if(SUPABASE_URL==='YOUR_SUPABASE_URL'){
      await new Promise(r=>setTimeout(r,800));
      showToast('success','Message sent! ✅','Set up Supabase to save messages to your database');
    } else {
      const res=await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'apikey':SUPABASE_ANON_KEY,
          'Authorization':`Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer':'return=minimal'
        },
        body:JSON.stringify({name,email,message:msg})
      });
      if(res.ok||res.status===201){
        showToast('success','Message sent! ✅','We\'ll get back to you shortly.');
        document.getElementById('c-name').value='';
        document.getElementById('c-email').value='';
        document.getElementById('c-msg').value='';
      } else {
        showToast('error','Send failed','Please try again.');
      }
    }
  }catch(err){
    showToast('error','Network error','Please try again.');
  }
}

// ============================================================
//  INIT
// ============================================================
(function(){
  const hash=window.location.hash.replace('#','').split('?')[0];
  const params=new URLSearchParams(window.location.hash.split('?')[1]||'');
  if(hash && pageMap[hash]) navigate(hash, params.get('event'));
  else navigate('home');
})();
