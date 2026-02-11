
import React from 'react';

export const MOCK_USER: any = {
  id: 'u1',
  name: 'Dr. Sarah Cellulose',
  email: 'sarah.c@university.edu',
  role: 'ADMIN',
  avatar: 'https://picsum.photos/seed/sarah/100/100'
};

export const MOCK_INSTRUMENTS: any[] = [
  { id: 'i1', name: 'Field Emission SEM', location: 'Lab 402', status: 'available', description: 'High-resolution surface imaging.' },
  { id: 'i2', name: 'Tensile Tester', location: 'Lab 105', status: 'busy', description: 'Mechanical properties testing for composites.' },
  { id: 'i3', name: 'Rheometer', location: 'Lab 303', status: 'maintenance', description: 'Viscoelastic property measurement.' },
  { id: 'i4', name: 'Atomic Force Microscope', location: 'Lab 405', status: 'available', description: 'Nanoscale surface topography.' },
];

export const MOCK_MEETINGS: any[] = [
  { id: 'm1', title: 'Weekly Progress Review', date: '2024-05-20', time: '10:00 AM', location: 'Room 202 / Zoom', description: 'Monthly group updates.' },
  { id: 'm2', title: 'Journal Club: Nanocellulose', date: '2024-05-22', time: '02:00 PM', location: 'Seminar Hall', description: 'Discussion of recent papers in Nature Nanotech.' },
];

export const MOCK_ANNOUNCEMENTS: any[] = [
  { id: 'a1', title: 'New Safety Protocol', content: 'All members must re-complete the solvent handling certification by Friday.', authorId: 'u1', date: '2024-05-18', category: 'safety' },
  { id: 'a2', title: 'Grant Success!', content: 'We received the NSF Composite Research Grant. Celebration on Monday!', authorId: 'u1', date: '2024-05-17', category: 'achievement' },
];

export const Icons = {
  Home: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Beaker: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  ShoppingCart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  CloudUpload: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  ),
  Chat: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
};
