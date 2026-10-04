// Each project renders as a card. Clicking it opens a case study built from the same object.
// The detail copy below is example text — REPLACE it with what you actually built.
//
//   live    → your Vercel URL, e.g. 'https://my-app.vercel.app' (the "Live site" button hides while empty)
//   repo    → GitHub URL (hidden while empty)
//   builtTitle → optional heading for the `built` list (defaults to 'What I built'; use 'What we built' for team projects)
//   image   → optional screenshot: put it in src/assets, import it below, and use the import (16:10 works best)

import teechImg from '../assets/teech.png';

export const projectsData = [
  {
    slug: 'teech',
    title: 'Teech',
    summary: 'Consultation booking app that lets students book time with their teachers without the back-and-forth messaging.',
    year: '2026',
    type: 'Group project',
    role: 'Team member', // REPLACE with the parts you owned, e.g. 'Front end & Supabase integration'
    timeline: '6 weeks',
    live: 'https://teech-app.vercel.app/',
    repo: 'https://github.com/Aelowww/Teech',
    image: teechImg,
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'CSS Modules', 'Gemini API', 'Vercel'],
    overview:
      'Booking a consultation at our school meant messaging a teacher, waiting for a reply, and starting over when the time no longer worked. Teech puts it in one place: faculty post when and where they’re free, students pick a slot and send a request, and faculty confirm or decline.',
    builtTitle: 'What we built',
    built: [
      'Booking flow: students pick a faculty member, an open date and a time slot, then track the request as pending, confirmed or closed.',
      'Faculty tools to publish available dates, time ranges and rooms, and to confirm, decline or cancel requests.',
      'Sign-up with email verification, plus an admin console that approves student and faculty IDs before they can book.',
      'In-app notifications whenever a request changes, using Supabase Realtime.',
      'Login streaks, points, a points shop and badges to keep students coming back.',
    ],
    decisions: [
      {
        title: 'Separate mobile and desktop layouts on the same URLs',
        detail: 'A Next.js proxy detects the device and serves the right layout, so each screen is designed for its device instead of squeezed to fit.',
      },
      {
        title: 'Verify users before they can book',
        detail: 'Students and faculty upload an ID photo and an admin approves it, so only real members of the school can request or accept consultations.',
      },
      {
        title: 'Database changes kept as migrations',
        detail: 'Every schema change is a dated SQL migration, so anyone on the team can rebuild the database from scratch.',
      },
    ],
    results: [
      { value: '3', label: 'User roles: student, faculty, admin' },
      { value: '2', label: 'Layouts: mobile and desktop' },
      { value: '38', label: 'Database migrations' },
    ],
  },
  {
    slug: 'task-manager',
    title: 'Task Management App',
    summary: 'Collaborative task board with real-time updates across users.',
    year: '2023',
    type: 'Personal project',
    role: 'Solo: front end, data model',
    timeline: '4 weeks',
    live: '',
    repo: '',
    image: '',
    stack: ['React', 'JavaScript', 'Firebase'],
    overview:
      'A shared board where changes from one teammate show up for everyone else without a refresh. The goal was to learn real-time data and the edge cases that come with it.',
    built: [
      'Kanban board with drag-and-drop between columns.',
      'Firestore listeners so every open client stays in sync.',
      'Firebase Auth with per-board access rules enforced in security rules, not just the UI.',
    ],
    decisions: [
      {
        title: 'Security rules over client checks',
        detail: 'Access control lives in Firestore rules, so a modified client still can’t read another team’s board.',
      },
    ],
    results: [{ value: 'Real-time', label: 'Sync across clients' }],
  },
  {
    slug: 'crypto-dashboard',
    title: 'Crypto Dashboard',
    summary: 'Live cryptocurrency prices with interactive charts and a watchlist.',
    year: '2023',
    type: 'Personal project',
    role: 'Solo: front end, API integration',
    timeline: '2 weeks',
    live: '',
    repo: '',
    image: '',
    stack: ['React', 'Tailwind CSS', 'REST API'],
    overview:
      'A dashboard over a public market-data API. The interesting part was staying inside the API’s rate limit while still feeling live.',
    built: [
      'Price table with sorting and a persistent watchlist.',
      'Interactive price-history charts with selectable time ranges.',
      'Request caching and polling backoff to stay under the API rate limit.',
    ],
    decisions: [
      {
        title: 'One poller, many components',
        detail: 'A single shared polling hook feeds every widget instead of each component fetching on its own.',
      },
    ],
    results: [{ value: '0', label: 'Rate-limit errors in normal use' }],
  },
];
