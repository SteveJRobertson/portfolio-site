import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Steve Robertson',
  title: 'Contract front-end developer based in Edinburgh, Scotland',
  description:
    "Hi, I'm Steve. I specialise in creating robust web applications and reusable component libraries using React and TypeScript. My expertise spans HTML, CSS, JavaScript, NodeJS, Git and continuous integration and deployment tools such as Jest and CircleCI.",
};

export const openSource = {
  githubUserName: 'stevejrobertson',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://sr.digital/',
  linkedin: 'https://www.linkedin.com/in/steve-robertson-5425501a/',
  github: 'https://github.com/stevejrobertson',
  instagram: 'https://www.instagram.com/stevejrobertson',
  twitter: 'https://twitter.com/stevejrobertson',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: '',
  data: [
    {
      title: '',
      lottieAnimationFile: '/lottie/skills/frontend.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Work with UX design teams to create reusable design systems and component libraries.'
        ),
        emoji(
          '⚡ Apply best practices and design patterns to create robust, scalable and maintainable codebases.'
        ),
        emoji(
          '⚡ Develop technical solutions to business requirements, ensuring high quality and performance.'
        ),
        emoji(
          '⚡ Streamline development processes, improving efficiency through the use of automation tools.'
        ),
        emoji(
          '⚡ Listen to and understand the needs of stakeholders, helping to shape the team\'s technical direction.'
        ),
        emoji(
          '⚡ Provide technical support, guidance and mentorship to other team members.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Jest',
          iconifyTag: 'logos:jest',
        },
        {
          skillName: 'Git',
          iconifyTag: 'logos:git-icon',
        },
        {
          skillName: 'Node',
          iconifyTag: 'logos:nodejs-icon',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
        {
          skillName: 'Jenkins',
          iconifyTag: 'logos:jenkins',
        },
        {
          skillName: 'CircleCI',
          iconifyTag: 'logos:circleci',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Napier University',
    subHeader: 'BSc Multimedia Technology',
    duration: '2007 - 2008',
    desc: '',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    schoolName: 'Edinburgh\'s Telford College',
    subHeader: 'HND Software Development',
    duration: '2005 - 2007',
    desc: '',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'UI Developer',
    company: 'Wood Mackenzie (Contract)',
    companyLogo: '/img/icons/common/woodmac-logo.png',
    date: 'Dec 2019 – Present',
    desc: 'Wood Mackenzie hired me to develop an internal UI component library, providing reusability across the client\'s suite of customer-facing applications. Demonstrating strong technical skills, teamwork, and stakeholder collaboration, I\'ve consistently delivered valuable results.',
  },
  {
    role: 'UI Developer',
    company: 'Royal Bank of Scotland (Contract)',
    companyLogo: '/img/icons/common/royal-bank-of-scotland-logo.png',
    backgroundColor: '#3C1053',
    date: 'Sep 2018 - Nov 2019',
    desc: "I was key in developing an internal application for the bank's GDPR compliance using React and Redux. Collaborating closely with stakeholders, I ensured timely delivery, provided technical support, and contributed to secure and responsible customer data handling.",
  },
  {
    role: 'Web Developer',
    company: 'Aegon (Contract)',
    companyLogo: '/img/icons/common/aegon-logo.svg',
    date: 'Apr 2017 - Aug 2018',
    desc: "I was involved in developing Aegon's latest customer-facing pensions dashboard. Leveraging HTML, CSS, and JavaScript, I crafted an intuitive interface, collaborating with legal, compliance, marketing, and UX stakeholders.",
  },
  {
    role: 'Web Developer',
    company: 'Royal London (Contract)',
    companyLogo: '/img/icons/common/royal-london-logo.png',
    date: 'Nov 2016 - Apr 2017',
    desc: "Royal London hired me to develop a rebrand for one of their subsidiary companies. Working closely with an external design agency, I transformed their designs into a modern, mobile-first interface wrapped around the customer's EPIServer CMS.",
  },
  {
    role: 'Senior UI Developer',
    company: 'Sopra Steria',
    companyLogo: '/img/icons/common/sopra-steria-logo.png',
    date: 'Jul 2015 - Nov 2016',
    desc: '',
  },
  {
    role: 'Senior Web Developer',
    company: 'Realise',
    companyLogo: '/img/icons/common/realise-logo.jpg',
    backgroundColor: '#FFC526',
    date: 'Jul 2012 - Jul 2015',
    desc: '',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Steve Robertson',
  description: 'Front end wev developer',
  author: 'Steve Robertson',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://sr.digital',
  keywords: [
    'Steve',
    'Steve Robertson',
    '@stevejrobertson',
    'stevejrobertson',
    'Portfolio',
    'Steve Portfolio ',
    'Steve Robertson Portfolio',
  ],
};
