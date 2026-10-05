// All résumé content lives here. Components only render what's in this file.
// Anything marked REPLACE is a placeholder — swap it for your real details before deploying.

export const profile = {
  name: 'Louis Caballero',
  role: 'Front-End & Back-End Developer',
  focus: 'React · Node.js · MongoDB',
  summary:
    'I build and ship production web apps end to end, from database schema to deployed UI. I care about fast, accessible interfaces and code the next developer can pick up without a walkthrough.',
  location: 'Iloilo, Philippines',
  availability: 'Open to full-time roles', // set to '' to hide the badge
  email: 'louiscaballero321@gmail.com',
  links: {
    github: 'https://github.com/Shirozou',
    linkedin: 'https://www.linkedin.com/in/REPLACE',
  },
  // Put your PDF in /public (e.g. /public/Louis-Caballero-Resume.pdf) and set this to '/Louis-Caballero-Resume.pdf'.
  // While empty, the Résumé button prints this page, which has a print layout.
  resumeUrl: '',
};

// The four numbers a recruiter reads first. Keep them honest and checkable.
export const highlights = [
  { value: '3+', label: 'Years building for the web' },
  { value: '10', label: 'Projects completed' },
  { value: '5', label: 'Apps deployed to production' },
  { value: 'Front & Back', label: 'React front end, Node back end' },
];

// Most recent first. Bullets: start with a verb, end with a result (a number if you have one).
export const experience = [
  {
    role: 'Roblox Game Developer',
    company: 'Roblox',
    url: '',
    period: 'Present', // add a start year, e.g. '2023 — Present'
    location: 'Remote',
    current: true,
    bullets: [
      'Build and script game systems in Roblox Studio using Luau.', // REPLACE with what you shipped
      'Add a result here: a game you released, player count, visits, or a system you designed.', // REPLACE
    ],
    stack: ['Luau', 'Roblox Studio'],
  },
  {
    role: 'Freelance Front-End & Back-End Developer',
    company: 'Self-employed',
    url: '',
    period: '2025 — 2026',
    location: 'Remote',
    current: false,
    bullets: [
      'Took on small web projects alongside my studies to learn how real apps are planned, built and shipped.',
      'Built front-end and back-end features with React and Node.js, picking up new tools whenever a project called for them.',
      'Deployed my work on Vercel and learned to debug, iterate and improve from real feedback.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Vercel'],
  },
];

export const education = [
  {
    degree: 'B.S. Information Technology',
    school: 'Western Institute of Technology',
    period: '2024 — Present',
    notes: '3rd-year student.',
  },
];

// Leave the array empty to hide the block.
export const certifications = [
  // { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2023', url: '' },
];

// level: 'core' = you use it daily and can be interviewed on it. 'familiar' = you've shipped with it but would ramp up.
export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript (ES6+)', level: 'core' },
      { name: 'HTML5', level: 'core' },
      { name: 'CSS3', level: 'core' },
      { name: 'Python', level: 'familiar' },
    ],
  },
  {
    category: 'Front end',
    items: [
      { name: 'React', level: 'core' },
      { name: 'Tailwind CSS', level: 'core' },
      { name: 'Vite', level: 'core' },
      { name: 'Bootstrap', level: 'familiar' },
    ],
  },
  {
    category: 'Back end & data',
    items: [
      { name: 'Node.js', level: 'core' },
      { name: 'Express', level: 'core' },
      { name: 'REST APIs', level: 'core' },
      { name: 'MongoDB', level: 'core' },
      { name: 'Firebase', level: 'familiar' },
    ],
  },
  {
    category: 'Tooling',
    items: [
      { name: 'Git & GitHub', level: 'core' },
      { name: 'Vercel', level: 'core' },
      { name: 'Postman', level: 'familiar' },
      { name: 'Figma', level: 'familiar' },
    ],
  },
];
