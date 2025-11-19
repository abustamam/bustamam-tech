export interface ConsultingProject {
  company: string;
  projectName?: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  image?: string;
  acquired?: boolean;
  companyMission?: string;
}

export const consultingProjects: ConsultingProject[] = [
  {
    company: "Breezy",
    role: "Senior Software Engineer",
    period: "2025",
    description:
      "HVAC Management SaaS. Implemented new features such as drip-notifications for maintenance plan management, increasing revenue for customers. Built custom solutions for clients such as configurable dashboards.",
    skills: ["Hasura", "React", "Metabase", "tRPC"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  },
  {
    company: "Milken Institute",
    projectName: "Community Infrastructure Center",
    role: "Senior Software Engineer",
    period: "2024-2025",
    description:
      "Architected a redesign and implemented new features like file management and budget management for the Community Infrastructure Center platform.",
    skills: ["React", "Prisma", "ExpressJS"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop",
  },
  {
    company: "Adaptiv App",
    role: "Software Engineer",
    period: "2020",
    description:
      "A mindfulness app that allowed users to meditate, journal, and track their emotions throughout the day using wearables. Built the mobile application with React Native and integrated Firebase for real-time data synchronization.",
    skills: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop",
  },
  {
    company: "Plutora",
    role: "Front-End Engineer",
    period: "2020",
    description:
      "Value stream management SaaS platform. Redesigned the application to adhere to brand guidelines and improve scalability, working with ExtJS and migrating components to React.",
    skills: ["ExtJS", "CSS", "React"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
  },
  {
    company: "Preguntale a Maria",
    role: "Mobile Developer",
    period: "2019",
    description:
      "A mobile app for managing communications with houseworkers. Built the cross-platform mobile application using Expo and React Native, enabling seamless communication workflows.",
    skills: ["Expo", "React Native"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop",
  },
  {
    company: "LayerOne",
    role: "Front-End Engineer",
    period: "2018",
    description:
      "A web3 application designed to allow users to buy virtual land using smart contracts. Built the user interface and integrated Web3 functionality for blockchain transactions.",
    skills: ["React", "CSS", "Web3"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop",
    acquired: true,
  },
];

