import React, { useState, useEffect } from 'react';

export default function Navbar({ schoolName }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About','News','Gallery','Contact'];
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 1000,
      background: scrolled ? '#1565C0' : '#2196F3',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,.25)' : 'none',
      transition: 'all .3s', padding: '0 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0' }}>
        <span style={{ fontSize: 28 }}>🌟</span>
        <div>
          <div style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, color: '#fff', fontSize: '1.05rem', lineHeight: 1.1 }}>
            {schoolName || 'Sunshine ABC Model School'}
          </div>
          <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.8)', fontWeight: 600 }}>Hyderabad, Telangana</div>
        </div>
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 4 }} className="nav-desktop">
        {links.map(l => (
          <button key={l} onClick={() => scrollTo(l)}
            style={{ background: 'none', border: 'none', color: '#fff', fontWeight: 700,
              fontSize: '.88rem', padding: '8px 16px', borderRadius: 20, cursor: 'pointer',
              transition: '.2s' }}
            onMouseOver={e => e.target.style.background = 'rgba(255,255,255,.2)'}
            onMouseOut={e => e.target.style.background = 'none'}>
            {l}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', background: 'none', border: 'none', color: '#fff', fontSize: 24 }}
        className="nav-mobile">☰</button>

      {menuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#1565C0', padding: '1rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: 'none', border: 'none', color: '#fff', fontWeight: 700,
                fontSize: '1rem', padding: '10px', textAlign: 'left', cursor: 'pointer' }}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
