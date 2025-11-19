export interface AdditionalRole {
  role: string;
  period: string;
  description: string;
}

export interface EmploymentProject {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  companyMission?: string;
  skills?: string[];
  additionalRoles?: AdditionalRole[];
  image?: string;
  darkLogo?: boolean;
}

export const employmentProjects: EmploymentProject[] = [
  {
    company: "Embedded Insurance, Inc.",
    role: "Senior Software Engineer",
    period: "Aug 2023 - Present · 2 yrs 4 mos",
    location: "Remote",
    description:
      "Building innovative solutions in the insurance tech space. Architected a scalable agent dashboard using a custom React component library integrated with Retool, Twilio, and SendGrid, enabling seamless lead management. Automated data enrichment processes with Playwright and LLM-powered workflows, streamlining agent productivity. Leveraged Remix, Chakra-UI, XState, and Temporal for robust application design.",
    skills: ["Software Design", "Retool", "Remix", "React.js", "Temporal.io"],
    image: "/images/projects/logos/ei-logo.svg",
  },
  {
    company: "CDK Global",
    role: "Senior Software Engineer",
    period: "Sep 2021 - Jul 2023 · 1 yr 11 mos",
    location: "Remote",
    description:
      "Developed a dynamic insurance quoting platform, integrating Puppeteer for form automation and Stripe for secure payments, ensuring PCI compliance. Promoted to Staff Engineer post-acquisition; led web automation efforts and mentored team members on best practices, contributing to company-wide scaling initiatives.",
    skills: ["puppeteer", "Team Leadership", "React Native", "TypeScript"],
    image: "/images/projects/logos/cdk-logo.jpg",
  },
  {
    company: "FullStack Labs",
    role: "Senior Software Engineer / Project Lead",
    period: "Jun 2019 - Aug 2020 · 1 yr 3 mos",
    location: "Granite Bay, CA · Remote",
    companyMission:
      "FullStack Labs is a software consulting firm providing custom software solutions and staff augmentation to companies of all sizes.",
    description:
      "Led multiple client projects across diverse industries, managing a team of six engineers while contributing hands-on to development. Delivered high-quality solutions using React Native, Shopify, and Ruby on Rails for clients like Procore and SunDoc Filings. Demonstrated expertise in project management and scalable software development.",
    skills: [
      "React Native",
      "Shopify",
      "Ruby on Rails",
      "Team Leadership",
      "Project Management",
    ],
    image: "/images/projects/logos/fullstack-logo.svg",
  },
  {
    company: "XY | The Findables Company",
    role: "Front-End Engineer",
    period: "Jul 2018 - May 2019 · 11 mos",
    location: "San Diego, CA · Remote",
    description:
      'Pioneered the development of blockchain-powered user experiences. Created "Save Rasheed," a location-based NFT game showcased to 1000+ attendees at XYO\'s Spatial Conference. Utilized Leaflet, Solidity, and Web3 to integrate blockchain technology into user-facing applications.',
    skills: ["Leaflet", "Solidity", "Web3", "Blockchain", "NFT", "React"],
    image: "/images/projects/logos/xyo-logo.svg",
  },
  {
    company: "CoNarrative",
    role: "Front-end Engineer / Web Developer",
    period: "2015 - Jul 2018 · 3 yrs",
    location: "Granite Bay, CA · On-site",
    description:
      "Kicked off my career by mastering React and front-end technologies. Developed interactive dashboards using Leaflet and GSAP for clients like Panzura. Architected a custom SVG animation framework for dynamically generated content, working with Greensock to create responsive, game-like user experiences. Collaborated on full-stack features, including Scala integration for natural language processing.",
    skills: [
      "React",
      "SVG",
      "GSAP",
      "Leaflet",
      "CSS",
      "Scala",
      "Data Visualization",
    ],
    image: "/images/projects/logos/conarrative-logo.png",
  },
];
