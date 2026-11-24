/**
 * PORTFOLIO CONTENT
 * -----------------
 * All personal information lives here. Components read from this file,
 * so a new owner only needs to edit this file, projects.js,
 * technologies.js, the photo in /src/assets and the CV in /public/cv.
 *
 * Leave any link as null (or '') to hide it everywhere on the site.
 */
// Passport-style profile photo.
// For a transparent-background cut-out instead, import that file and set profileImageCutout to true.
import profileImage from '../assets/david-ayodele-passport.jpg'

const portfolio = {
  name: 'Ogunfadewo David Ayodele',
  brandName: 'Emini_David',
  firstName: 'Ogunfadewo',
  middleName: 'David',
  lastName: 'Ayodele',
  initials: 'DA',
  title: 'Full Stack MERN Developer',
  description:
    'I create end-to-end web products and APIs using React, Node.js, Express, and MongoDB, prioritizing readable code, fast performance, and practical value for users.',

  profileImage,
  profileImageCutout: false,
  profileImageAlt: 'Portrait of Ogunfadewo David Ayodele',

  email: 'davidayodele377@gmail.com',
  // International format without "+" or spaces, used for the WhatsApp link. Set to null to hide.
  whatsapp: '2348153709083',

  socialLinks: {
    github: 'https://github.com/Emini-David',
    linkedin: 'https://www.linkedin.com/in/david-ayodele-ogunfadewo-94b209375/',
    x: 'https://x.com/ayodele_da93794',
  },

  // "View More Projects" button destination
  moreProjectsUrl: 'https://github.com/Emini-David?tab=repositories',

  cv: {
    file: '/cv/David_Ayodele_CV.pdf',
    downloadName: 'David_Ayodele_CV.pdf',
    lastUpdated: null, // e.g. 'September 2026'
  },

  about: {
    statement: 'Creating dependable web solutions designed to grow with their users.',
    summary: [
      'As a Full Stack MERN Developer, I build across the stack—from responsive React interfaces to Node.js and Express APIs, backed by MongoDB data models.',
      'I value maintainable code, accessible experiences on any screen, and solutions shaped around each project’s real needs.',
    ],
    focus: [
      'Frontend development',
      'Backend development',
      'REST APIs',
      'Databases',
      'Responsive interfaces',
      'Clean code',
      'Real-world applications',
      'Problem solving',
    ],
    approach: [
      {
        title: 'Begin with the people who will use it',
        text: 'I learn what users need to accomplish, then shape the features, screens, and data to support those goals.',
      },
      {
        title: 'Bring the full stack together',
        text: 'I connect the database, API, and interface while keeping each part modular for easier testing and future updates.',
      },
      {
        title: 'Make it work on everyday devices',
        text: 'I check the experience on screens of different sizes and optimize pages to stay responsive, including on slower networks.',
      },
    ],
    education: [
      {
        school: 'Olabisi Onabanjo University',
        location: 'Ago-Iwoye, Ogun State, Nigeria',
        qualification: 'B.A. French',
        period: '2021–2024',
      },
      {
        school: 'Exquitec Education Technology',
        location: 'Igbeba, Ijebu-Ode, Ogun State, Nigeria',
        qualification: 'Frontend Development',
        period: '2025',
      },
      {
        school: 'SQI College of ICT',
        qualification: 'Professional Diploma in Software Engineering',
        period: 'Expected Graduation: December 2026',
      },
    ],
  },

  contact: {
    heading: "Let's Build Something Valuable",
    subheading: 'Have a project in mind?',
    text: 'Need a website, an API, or support refining an existing product? Tell me what you are working on, and I would be happy to discuss how I can help.',
  },

  seo: {
    siteName: 'Emini_David',
    defaultTitle: 'Ogunfadewo David Ayodele | Full Stack MERN Developer',
    defaultDescription:
      'Ogunfadewo David Ayodele creates web products and APIs with React, Node.js, Express, and MongoDB, with an emphasis on maintainable code, speed, and useful outcomes.',
  },
}

export default portfolio
