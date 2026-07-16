import React from 'react';

const DEFAULT_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.5583667!3d17.4750253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b83bae81e79%3A0x3000b4dd6500ac27!2sSUNSHINE%20ABC%20MODEL%20SCHOOL!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

export default function Contact({ info }) {
  const phone    = info?.phone    || '+91 63002 08950';
  const whatsapp = info?.whatsapp || '+91 63002 08950';
  const email    = info?.email    || 'info@sunshineabcschool.edu.in';
  const address  = info?.address  || 'Hyderabad, Telangana';
  const timings  = info?.schoolTimings || 'Monday – Saturday, 8:00 AM – 4:30 PM';
  const mapsLink = info?.googleMapsLink || 'https://maps.app.goo.gl/iHXsgDiE6zmhzDnS9';
  const embedUrl = info?.mapEmbedUrl || DEFAULT_EMBED;

  return (
    <div id="contact" style={{ background:'linear-gradient(135deg,#E8F5E9,#F1F8E9)', padding:'4rem 2rem' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#FFD600',
          color:'#1A1A2E', fontWeight:800, fontSize:'.72rem', padding:'4px 14px',
          borderRadius:20, marginBottom:'.8rem', textTransform:'uppercase' }}>
          📍 Find Us
        </div>
        <h2 style={{ fontFamily:"'Baloo 2',cursive", fontSize:'1.9rem', fontWeight:800, color:'#1A1A2E', marginBottom:'.4rem' }}>
          Contact & Location
        </h2>
        <p style={{ color:'#666', fontSize:'.92rem', marginBottom:'2rem' }}>We'd love to hear from you. Visit us or reach out anytime.</p>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2.5rem', alignItems:'start' }}>
          {/* Contact Details */}
          <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
            {[
              { icon:'📍', bg:'#E3F2FD', label:'Address', value: address + ', Hyderabad, Telangana' },
              { icon:'📞', bg:'#E8F5E9', label:'Phone', value: phone },
              { icon:'💬', bg:'#E8F5E9', label:'WhatsApp', value: whatsapp, link:`https://wa.me/${whatsapp.replace(/\D/g,'')}` },
              { icon:'✉️', bg:'#FFFDE7', label:'Email', value: email },
              { icon:'🕐', bg:'#E3F2FD', label:'School Timings', value: timings },
            ].map((r,i) => (
              <div key={i} style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
                <div style={{ width:46, height:46, borderRadius:12, background:r.bg,
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, flexShrink:0 }}>
                  {r.icon}
                </div>
                <div>
                  <div style={{ fontWeight:800, fontSize:'.88rem', color:'#1A1A2E', marginBottom:2 }}>{r.label}</div>
                  {r.link
                    ? <a href={r.link} target="_blank" rel="noreferrer"
                        style={{ fontSize:'.84rem', color:'#2196F3', fontWeight:600 }}>{r.value}</a>
                    : <div style={{ fontSize:'.84rem', color:'#666', lineHeight:1.5 }}>{r.value}</div>
                  }
                </div>
              </div>
            ))}

            <a href={mapsLink} target="_blank" rel="noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#2196F3',
                color:'#fff', fontWeight:800, padding:'12px 24px', borderRadius:24,
                fontSize:'.88rem', marginTop:8, width:'fit-content' }}>
              🗺️ Get Directions on Google Maps
            </a>
          </div>

          {/* Google Maps Embed */}
          <div style={{ borderRadius:20, overflow:'hidden', boxShadow:'0 4px 18px rgba(0,0,0,.1)' }}>
            <iframe
              title="School Location"
              src={embedUrl}
              width="100%" height="350"
              style={{ border:0, display:'block' }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div style={{ background:'#fff', padding:'1rem 1.2rem', display:'flex',
              alignItems:'center', justifyContent:'space-between' }}>
              <span style={{ fontSize:'.84rem', color:'#666', fontWeight:600 }}>
                📍 Sunshine ABC Model School, Hyderabad
              </span>
              <a href={mapsLink} target="_blank" rel="noreferrer"
                style={{ background:'#2196F3', color:'#fff', borderRadius:16, padding:'6px 16px',
                  fontWeight:800, fontSize:'.78rem' }}>
                Open ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}