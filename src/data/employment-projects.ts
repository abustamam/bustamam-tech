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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
  },
  {
    company: "CDK Global",
    role: "Senior Software Engineer",
    period: "Sep 2021 - Jul 2023 · 1 yr 11 mos",
    location: "United States · Remote",
    description:
      "Developed a dynamic insurance quoting platform, integrating Puppeteer for form automation and Stripe for secure payments, ensuring PCI compliance. Promoted to Staff Engineer post-acquisition; led web automation efforts and mentored team members on best practices, contributing to company-wide scaling initiatives.",
    skills: ["puppeteer", "Team Leadership", "React Native", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop",
  },
  {
    company: "FullStack Labs",
    role: "Senior Software Engineer / Project Lead",
    period: "Jun 2019 - Aug 2020 · 1 yr 3 mos",
    location: "Sacramento, California, United States",
    companyMission:
      "FullStack Labs is a software consulting firm providing custom software solutions and staff augmentation to companies of all sizes.",
    description:
      "Led multiple client projects across diverse industries, managing a team of six engineers while contributing hands-on to development. Delivered high-quality solutions using React Native, Shopify, and Ruby on Rails for clients like Procore and SunDoc Filings. Demonstrated expertise in project management and scalable software development.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
  },
  {
    company: "XY | The Findables Company",
    role: "Front-End Engineer",
    period: "Jul 2018 - May 2019 · 11 mos",
    location: "Greater Sacramento · Remote",
    description:
      'Pioneered the development of blockchain-powered user experiences. Created "Save Rasheed," a location-based NFT game showcased to 1000+ attendees at XYO\'s Spatial Conference. Utilized Leaflet, Solidity, and Web3 to integrate blockchain technology into user-facing applications.',
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop",
  },
  {
    company: "Udacity",
    role: "Code Reviewer",
    period: "Oct 2015 - Apr 2019 · 3 yrs 7 mos",
    location: "Remote",
    description:
      "Udacity's Front-End Nanodegree is a six-project program guiding students through front-end basics--from creating an HTML page from a mock-up, all the way to using RESTful APIs to create a front-end web app. Reviewed student project submissions, performed thorough code reviews and project evaluations, and gave actionable and helpful feedback. Languages reviewed: Knockout.js, Javascript, HTML, CSS.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
    additionalRoles: [
      {
        role: "Front-End Nanodegree Guide",
        period: "Jul 2015 - Jan 2016 · 7 mos",
        description:
          "Provided technical/coding support and motivation to team of 7-10 students. Guided students through common pitfalls. Ensured that students are kept accountable to their deadlines.",
      },
    ],
  },
  {
    company: "CoNarrative",
    role: "Front-end Engineer",
    period: "Jan 2016 - Jul 2018 · 2 yrs 7 mos",
    location: "California · On-site",
    description:
      "Kicked off my career by mastering React and front-end technologies. Developed interactive dashboards using Leaflet and GSAP for clients like Panzura, showcasing expertise in data visualization and user-centric design.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop",
    additionalRoles: [
      {
        role: "Web Developer",
        period: "2015 - 2016 · 1 yr",
        description:
          'As a startup, CoNarrative requires flexible employees. One day I might be learning Scala to help with the natural language processor, the next day I might be delving into SVG land to improve on the animation engine. My primary duty is to implement designs in the UI that were drawn up by our designer. But it\'s more than just implementing a user "interface," we work together to create a seamless user "experience." We wanted a game-like experience that was responsive and fast, taking cues from the latest game designs, and so we studied various game interfaces and implemented a lot of common design themes. The UI/UX was more than simply some CSS tweaks to make things look pretty. Since the crux of the app was essentially a dynamically generated SVG element, I couldn\'t just hard-code a few event listeners and CSS into the element. I worked with our senior developer Alex to design what could almost be an entire framework, with SVG being the view, and the model being all of the calculations of the SVG components (bounding box, dimensions, scaling, transforms, relationships, etc). Greensock assisted with the interaction between "model" and "view" but there were still a lot of things I needed to tweak to ensure that the animation engine worked as it was supposed to. Were we able to dynamically put character pins at a certain place? Could we create captions for the story that is currently being generated? Could we move characters along the map, ensuring that they stuck to the road and also found the shortest path between any two locations? At the end of our two-week sprint, Alex and I implemented all of those features and more.',
      },
    ],
  },
];
