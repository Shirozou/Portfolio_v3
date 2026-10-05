// Each project renders as a card. Clicking it opens a case study built from the same object.
// The detail copy below is example text — REPLACE it with what you actually built.
//
//   live    → your Vercel URL, e.g. 'https://my-app.vercel.app' (the "Live site" button hides while empty)
//   repo    → GitHub URL (hidden while empty)
//   builtTitle → optional heading for the `built` list (defaults to 'What I built'; use 'What we built' for team projects)
//   image   → optional screenshot: put it in src/assets, import it below, and use the import (16:10 works best)

import teechImg from '../assets/teech.png';
import suepsImg from '../assets/SUEPS.png';

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
    slug: 'Uniform Exchange Platform',
    title: 'Student Uniform Exchange Platform',
    summary: 'Marketplace where students buy, sell and swap school uniforms, with built-in chat and admin moderation.',
    year: '2026',
    type: 'Personal project',
    role: 'Solo: front end, back end',
    timeline: '4 weeks',
    live: 'https://school-uniform-exchange-platform.vercel.app/',
    repo: 'https://github.com/anniesrdnl/School-Uniform-Exchange-Platform.git',
    image: suepsImg,
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'Socket.io', 'Tailwind CSS', 'Cloudinary', 'Vercel', 'Render'],
    overview:
      'Uniforms are outgrown long before they wear out, yet families keep buying new ones. SUEPS gives students one place to list a uniform, find the right size, message the owner and arrange the exchange. It runs on desktop and phones from a single codebase.',
    built: [
      'Listings with photo uploads, plus search and filters by category, size, condition and price.',
      'Exchange flow with clear states: a buyer sends a request, the seller accepts, they meet up and the seller marks it completed.',
      'Real-time chat between buyer and seller, with photo sharing, built on Socket.io.',
      'JWT authentication, reviews after each exchange, and a report button for flagging content.',
      'Admin dashboard to review stats and moderate users, listings and reports.',
    ],
    decisions: [
      {
        title: 'A status flow instead of free-form chat deals',
        detail: 'A request moves pending → accepted → completed. Accepting reserves the listing and completing marks it sold, so two buyers can’t claim the same uniform.',
      },
      {
        title: 'Access rules enforced on the server',
        detail: 'JWT middleware and admin-only routes live in the Express API, and the database tables use row-level security, so a modified client can’t reach other users’ data.',
      },
      {
        title: 'One responsive codebase',
        detail: 'The navbar switches to a bottom bar on mobile, so students can list and chat from their phones without a separate app.',
      },
    ],
    results: [
      { value: '3', label: 'User flows: buyer, seller, admin' },
      { value: 'Real-time', label: 'Chat between buyer and seller' },
      { value: '1', label: 'Codebase for desktop and mobile' },
    ],
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
