// All school content lives here — edit this file to update the website.
// No backend or database needed; this is the single source of truth.

export const schoolInfo = {
  schoolName: 'Sunshine ABC Model School',
  tagline: 'Nurturing Young Minds, Building Bright Futures',
  establishedYear: '2005',
  totalStudents: '1200+',
  totalTeachers: '80+',
  classes: 'K–12',
  aboutUs: 'We believe every child is gifted. Our school provides a safe, joyful, and inspiring environment where curiosity leads to success.',
  phone: '+91 63002 08950',
  whatsapp: '+91 63002 08950',
  email: 'info@sunshineabcschool.edu.in',
  address: 'Hyderabad, Telangana',
  schoolTimings: 'Monday – Saturday, 8:00 AM – 4:30 PM',
  googleMapsLink: 'https://maps.app.goo.gl/iHXsgDiE6zmhzDnS9',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0!2d78.5583667!3d17.4750253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b83bae81e79%3A0x3000b4dd6500ac27!2sSUNSHINE%20ABC%20MODEL%20SCHOOL!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

// Category can be: ACHIEVEMENT, EVENT, ADMISSION, GENERAL, HOLIDAY
export const news = [
  {
    id: 1,
    title: 'Admissions Open for 2026–27',
    content: 'Admissions are now open for classes Nursery through Class 12. Visit the school office or contact us for enrollment details.',
    category: 'ADMISSION',
    createdAt: '2026-06-01',
  },
  {
    id: 2,
    title: 'Annual Sports Day',
    content: 'Join us for our Annual Sports Day featuring track events, team games, and a cultural showcase by our students.',
    category: 'EVENT',
    createdAt: '2026-07-10',
  },
];

// mediaType: 'PHOTO' or 'VIDEO'
// Place your image/video files in frontend/public/media/ and reference them here as /media/filename.jpg
export const gallery = [
  // Example:
  // { id: 1, title: 'Annual Day Celebration', mediaType: 'PHOTO', fileUrl: '/media/annual-day.jpg' },
  // { id: 2, title: 'Sports Day Highlights', mediaType: 'VIDEO', fileUrl: '/media/sports-day.mp4' },
];
