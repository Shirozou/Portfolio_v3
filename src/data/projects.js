
import teechImg from '../assets/teech.png';
import suepsImg from '../assets/SUEPS.png';
import mobaiImg from '../assets/MoBai.png';

export const projectsData = [
  {
    slug: 'teech',
    title: 'Teech',
    summary: 'Consultation booking app that lets students book time with their teachers without the back-and-forth messaging.',
    year: '2026',
    type: 'Group project',
    role: 'Team member',
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
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'Socket.io', 'Tailwind CSS', 'Cloudinary', 'Vercel'],
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
    slug: 'text-to-speech',
    title: 'MoBai Language',
    summary: 'MoBai Language reads your script aloud in the browser, highlighting each word as it is spoken.',
    year: '2026',
    type: 'Personal project',
    role: 'Solo: front end',
    timeline: '2 weeks',
    live: 'https://mo-bai-language.vercel.app/',
    repo: 'https://github.com/Shirozou/MoBai_Language.git',
    image: mobaiImg,
    stack: ['React', 'Vite', 'JavaScript', 'Web Speech API', 'Vercel'],
    overview:
      'Write or paste a script, pick a voice and listen to it read back, with each word highlighted as it is spoken. It runs entirely in the browser on the built-in Web Speech API, so there is no backend, no account and no text sent anywhere.',
    built: [
      'Text input with a word counter and a sample script to start from.',
      'Voice picker with the available voices grouped by language, your browser’s language first.',
      'Speak, pause, resume and stop controls, plus rate, pitch and volume sliders with a one-click reset.',
      'Live word highlighting, a progress indicator and a Standby / On air / Paused status.',
      'Ctrl/Cmd + Enter shortcut to start speaking, and a clear notice when the browser has no speech synthesis.',
    ],
    decisions: [
      {
        title: 'Browser speech instead of a speech API',
        detail: 'Using the Web Speech API keeps the app free to run and private, since nothing leaves the user’s device, and it needs no server or API key.',
      },
      {
        title: 'Handle missing support gracefully',
        detail: 'Available voices vary by browser and operating system, so the app lists whatever exists and shows a notice instead of breaking when speech synthesis is unavailable.',
      },
    ],
    results: [
      { value: '0', label: 'Backend or accounts needed' },
      { value: '3', label: 'Voice settings: rate, pitch, volume' },
    ],
  },
];
