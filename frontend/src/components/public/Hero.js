import React from 'react';

export default function Hero({ info }) {
  const name = info?.schoolName || 'Sunshine ABC Model School';
  const tagline = info?.tagline || 'Nurturing Young Minds, Building Bright Futures';
  const year = info?.establishedYear || '2005';
  const students = info?.totalStudents || '1200+';
  const teachers = info?.totalTeachers || '80+';
  const classes = info?.classes || 'K–12';

  return (
    <section style={{ background: 'linear-gradient(135deg,#2196F3 0%,#1565C0 100%)',
      minHeight: 520, display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '4rem 2rem', textAlign: 'center' }}>
      {/* Decorative bubbles */}
      {[{w:180,h:180,c:'#FFD600',t:'-40px',l:'-40px'},{w:220,h:220,c:'#FF6B6B',b:'-70px',r:'-50px'},
        {w:90,h:90,c:'#00BCD4',t:'30%',l:'8%'},{w:60,h:60,c:'#7C4DFF',t:'15%',r:'12%'}].map((b,i)=>(
        <div key={i} style={{ position:'absolute', borderRadius:'50%', opacity:.13,
          width:b.w, height:b.h, background:b.c, top:b.t, left:b.l, bottom:b.b, right:b.r }} />
      ))}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, color: '#fff' }}>
        <div style={{ width:88, height:88, background:'#FFD600', borderRadius:'50%',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:42, margin:'0 auto 1.2rem', boxShadow:'0 4px 20px rgba(0,0,0,.2)' }}>🏫</div>
        <h1 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'2.6rem', fontWeight:800,
          lineHeight:1.15, marginBottom:'.5rem' }}>
          Welcome to <span style={{ color:'#FFD600' }}>{name}</span>
        </h1>
        <p style={{ fontSize:'1.05rem', opacity:.92, fontWeight:600, marginBottom:'.4rem' }}>{tagline}</p>
        <p style={{ fontSize:'.88rem', opacity:.75 }}>📍 Hyderabad, Telangana · Est. {year}</p>
        <div style={{ display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap', marginTop:'1.6rem' }}>
          {[{v:students,l:'Students'},{v:teachers,l:'Teachers'},{v:`${new Date().getFullYear()-parseInt(year)}+`,l:'Years of Excellence'},{v:classes,l:'All Classes'}].map((s,i)=>(
            <div key={i} style={{ background:'rgba(255,255,255,.16)', border:'2px solid rgba(255,255,255,.3)',
              borderRadius:30, padding:'8px 20px', textAlign:'center' }}>
              <strong style={{ display:'block', fontSize:'1.4rem', fontFamily:"'Baloo 2',cursive" }}>{s.v}</strong>
              <span style={{ fontSize:'.72rem', opacity:.85, fontWeight:600 }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
