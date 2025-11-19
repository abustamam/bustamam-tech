export type ProjectBadge = "acquired" | "zeroToOne";

export interface ConsultingProject {
  company: string;
  projectName?: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  image?: string;
  badges?: ProjectBadge[];
  companyMission?: string;
  darkLogo?: boolean;
}

export const consultingProjects: ConsultingProject[] = [
  {
    company: "Nuema",
    role: "Software Engineer",
    period: "2025",
    description:
      "Built several MVPs for a company focused on building communities of families. Developed full-stack applications using modern technologies to enable community engagement and family connections.",
    skills: ["Expo", "Prisma", "tRPC", "AWS", "Serverless", "React Native"],
    companyMission:
      "NUEMA is a digital village where parents find authentic connections and trusted wellness resources.",
    image: "/images/projects/logos/nuema-logo.svg",
    darkLogo: true,
  },
  {
    company: "Breezy",
    role: "Senior Software Engineer",
    period: "2025",
    description:
      "HVAC Management SaaS. Implemented new features such as drip-notifications for maintenance plan management, increasing revenue for customers. Built custom solutions for clients such as configurable dashboards.",
    skills: ["Hasura", "React", "Metabase", "tRPC"],
    image: "/images/projects/logos/breezy-logo.png",
  },
  {
    company: "Milken Institute",
    projectName: "Community Infrastructure Center",
    role: "Senior Software Engineer",
    period: "2024-2025",
    description:
      "Architected a redesign and implemented new features like file management and budget management for the Community Infrastructure Center platform.",
    skills: ["React", "Prisma", "ExpressJS"],
    image: "/images/projects/logos/cic-logo.svg",
  },
  {
    company: "Edvo",
    role: "Founding Engineer",
    period: "Aug 2020 - Jul 2024 · 4 yrs",
    companyMission:
      "Edvo's mission is to provide people with tools that help them think more critically about all of the content they consume.",
    description:
      "As the founding engineer, spearheaded the development of a graph-based data model backed by Firestore, enabling real-time collaboration. Built web, browser extension, and Electron applications to streamline user workflows. Played a key role in establishing team culture and mentoring junior developers in a fast-paced startup environment.",
    skills: [
      "Firestore",
      "React",
      "TypeScript",
      "Electron",
      "Browser Extensions",
      "Graph Data Models",
    ],
    image: "/images/projects/logos/edvo-logo.jpeg",
    badges: ["zeroToOne"],
  },
  {
    company: "DoTerra",
    projectName: "Adaptiv App",
    role: "Software Engineer",
    period: "2020",
    description:
      "A mindfulness app that allowed users to meditate, journal, and track their emotions throughout the day using wearables. Built the mobile application with React Native and integrated Firebase for real-time data synchronization.",
    skills: ["React Native", "Firebase"],
    image: "/images/projects/logos/adaptiv-logo.png",
  },
  {
    company: "Plutora",
    role: "Front-End Engineer",
    period: "2020",
    description:
      "Value stream management SaaS platform. Redesigned the application to adhere to brand guidelines and improve scalability, working with ExtJS and migrating components to React.",
    skills: ["ExtJS", "CSS", "React"],
    image: "/images/projects/logos/plutora-logo.jpeg",
  },
  {
    company: "FYC Labs",
    projectName: "Preguntale a Maria",
    role: "Mobile Developer",
    period: "2019",
    description:
      "A mobile app for managing communications with houseworkers. Built the cross-platform mobile application using Expo and React Native, enabling seamless communication workflows.",
    skills: ["Expo", "React Native"],
    image: "/images/projects/logos/fyc-logo.svg",
  },
  {
    company: "LayerOne",
    role: "Front-End Engineer",
    period: "2018",
    description:
      "A web3 application designed to allow users to buy virtual land using smart contracts. Built the user interface and integrated Web3 functionality for blockchain transactions.",
    skills: ["React", "CSS", "Web3"],
    image: "/images/projects/logos/xyo-logo.svg",
    badges: ["acquired"],
  },
  {
    company: "Udacity",
    role: "Code Reviewer / Front-End Nanodegree Guide",
    period: "Jul 2015 - Apr 2019 · 3 yrs 10 mos",
    description:
      "Reviewed student project submissions for Udacity's Front-End Nanodegree program, performing thorough code reviews and project evaluations while providing actionable and helpful feedback. As a Front-End Nanodegree Guide, provided technical/coding support and motivation to teams of 7-10 students, guiding them through common pitfalls and ensuring accountability to deadlines. Languages reviewed: Knockout.js, Javascript, HTML, CSS.",
    skills: [
      "Knockout.js",
      "Javascript",
      "HTML",
      "CSS",
      "Code Review",
      "Mentoring",
    ],
    image: "/images/projects/logos/udacity.svg",
  },
];
