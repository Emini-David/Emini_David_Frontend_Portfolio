/**
 * PORTFOLIO CONTENT
 * -----------------
 * All personal information lives here. Components read from this file,
 * so a new owner only needs to edit this file, projects.js,
 * technologies.js, the photo in /src/assets and the CV in /public/cv.
 *
 * Leave any link as null (or '') to hide it everywhere on the site.
 */
// Profile photo (square crop of the original portrait).
// For a transparent-background cut-out instead, import that file and set profileImageCutout to true.
import profileImage from '../assets/david-ayodele-passport.jpg'

const portfolio = {
  name: 'David Ayodele',
  firstName: 'David',
  lastName: 'Ayodele',
  initials: 'DA',
  title: 'Full Stack MERN Developer',
  description:
    'I build modern web applications, APIs and digital solutions with React, Node.js, Express and MongoDB, with a focus on clean code, performance and real user impact.',

  profileImage,
  profileImageCutout: false,
  profileImageAlt: 'Portrait of David Ayodele',

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
    statement: 'Building reliable and scalable web applications.',
    summary: [
      'I am a Full Stack MERN Developer who works across the whole application: responsive interfaces in React, REST APIs in Node.js and Express, and data models in MongoDB.',
      'I care about clean, readable code, interfaces that work on every screen size, and solving the actual problem a project exists for.',
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
        title: 'Understand the problem first',
        text: 'I start from who will use the application and what they need to get done, then plan the data and screens around that.',
      },
      {
        title: 'Build end to end',
        text: 'From database schema to API to interface, I keep each layer clearly separated so it is easy to test, change and extend.',
      },
      {
        title: 'Ship for real devices',
        text: 'I test layouts from small phones to large screens and keep pages light so they load well on slower connections.',
      },
    ],
    education: [
      {
        school: 'SQI College of ICT',
        qualification: 'Professional Diploma in Software Engineering',
        period: 'Expected Graduation: December 2026',
      },
    ],
  },

  contact: {
    heading: "Let's Work Together",
    subheading: 'Have a project in mind?',
    text: 'Whether you need a web application, an API or help improving an existing product, send me a message and I will get back to you.',
  },

  seo: {
    siteName: 'David Ayodele',
    defaultTitle: 'David Ayodele | Full Stack MERN Developer',
    defaultDescription:
      'David Ayodele is a Full Stack MERN Developer building web applications, APIs and digital solutions with React, Node.js, Express and MongoDB.',
  },
}

export default portfolio
