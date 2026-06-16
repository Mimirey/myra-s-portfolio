import { Project, Competition, JourneyChapter, BeyondCodingItem } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Website Laporan Santri",
    role: "Frontend Developer",
    description: "Designed and developed the frontend administrative portal and tracking dashboards, streamlining student progression reports and integrating clean data payloads with API endpoints.",
    tags: ["Svelte", "Tailwind", "REST APIs", "Laravel", "UI/UX Design"],
    accent: "green",
    year: "2026"
  },
  {
    id: 2,
    title: "Website Laporan Siswa",
    role: "Frontend Developer",
    description: "Designed and developed the frontend administrative portal and tracking dashboards, streamlining student progression reports and integrating clean data payloads with API endpoints.",
    tags: ["Svelte", "Tailwind", "REST APIs", "Laravel", "UI/UX Design"],
    accent: "blue",
    year: "2026"
  },
  {
    id: 3,
    title: "Bina Tilawah",
    role: "Project Coordinator & Lead Frontend Developer",
    description: "Digitalized 'Buku Prestasi' and manage tools for education activity used in TPQ Raudatul Jannah. Assigned for school's Final Project",
    tags: ["Flutter", "Tailwind CSS", "React", "UI/UX Design", "Team Coordinator", "Pitcher"],
    accent: "blue",
    year: "2025-2026"
  },
  {
    id: 4,
    title: "Waisya",
    role: "Frontend Developer, Main Proposal Writer, Presentator",
    description: "An app integrated with Artificial Intelligence to identify potentional sickness on plants and guide for solution. Assigned for Dinacom 11.0",
    tags: ["Flutter", "Figma", "Word", "Idea Storming"],
    accent: "green",
    year: "2025-2026"
  },
  {
    id: 5,
    title: "Constella MVP",
    role: "MVP Developer, Main Proposal Writer, Presentator",
    description: "Journaling platform using AI as companion to build continuos impact on enhancing emotional regulation for user. Assigned for SMARTA LOGIKA 2026 ",
    tags: ["Flutter", "Figma", "Word", "Idea Storming"],
    accent: "blue",
    year: "2026"
  },
  {
    id: 6,
    title: "5+ Non-code Landing Pages",
    role: "Designer",
    description: "Make landing page designs using non-code platform for UMKM around Kudus",
    tags: ["Communication", "Client-consultation","Adaptive solution"],
    accent: "amber",
    year: "2025"
  },
  {
    id: 7,
    title: "Wich is Witch Game Design Document",
    role: "VR Game Designer & Game Pitcher",
    description: "Seeking idea and creativity and concepting a Virtual Reality roleplay game featuring a Witch with immersive fun. Assigned for Gacci 2025",
    tags: ["Imaginative Idea", "GDD Writer","Game Concept Pitcher"],
    accent: "blue",
    year: "2025"
  },
  {
    id: 8,
    title: "Little Ocean Game Design Document",
    role: "Game Designer & Game Pitcher",
    description: "Brainstorming as team in quick game for game jam, write and voice overing pitching content. Assigned for GameJam+ 2025",
    tags: ["Brainstormer","Game Concept Pitcher"],
    accent: "blue",
    year: "2025"
  },
];

export const competitions: Competition[] = [
  {
    id: 1,
    name: "LKS Cloud Computing 2026",
    scope: "Kudus Regency Level",
    achievement: "1st Place (Gold)",
    badge: "gold",
    description: "Designed resilient cloud systems under intense competitive constraints. Configured foundational AWS resources, engineered secure VPC architectures, and executed optimized deployment systems.",
    year: "2026"
  },
  {
    id: 2,
    name: "LKS Cloud Computing 2026",
    scope: "Central Java Province Level",
    achievement: "Medallion of Excellence",
    badge: "blue",
    description: "Demonstrated advanced command of cloud-native infrastructure automation, container setup, and secure containerization workflows under high-pressure scenarios.",
    year: "2026"
  },
  {
    id: 3,
    name: "Smarta Logika 2026",
    scope: "National Level AI Hackathon",
    achievement: "2nd Place",
    badge: "silver",
    description: "Collaborated on designing an AI-assisted diagnostic prototype, coding the web interface and setting up core client routing to secure high interactive fidelity.",
    year: "2026"
  },
  {
    id: 4,
    name: "DINACOM 11.0",
    scope: "National Hackathon & Pitching",
    achievement: "1st Runner Up",
    badge: "silver",
    description: "Served as a dual Frontend Developer, Proposal Writer, and Live Presenter. Pitched the social-impact initiative to the design jury and engineered the web prototype.",
    year: "2026"
  },
  {
    id: 5,
    name: "GACCI 2025",
    scope: "Creative Game & Pitch Competition",
    achievement: "Top 10 Finalist",
    badge: "green",
    description: "Acted as Game Designer and Pitch Coordinator, modeling immersive levels and narrating the mechanical design constraints to the judging panel.",
    year: "2025"
  }
];

export const journeyChapters: JourneyChapter[] = [
  {
    id: 1,
    title: "Learning to Build",
    icon: "🔨",
    description: "Mastered fundamental browser paradigms, laying responsive grid layouts, styling interfaces, and binding modern component state loops.",
    tags: ["Frontend Paradigms", "React Hooks", "Interactivity", "Modern CSS"],
    detailNote: "Realized that clear visuals bridge complex logic for end users."
  },
  {
    id: 2,
    title: "Learning to Collaborate",
    icon: "🤝",
    description: "Discovered the craft of asking clear questions, framing technical realities for business stakeholders, and managing product design iterations.",
    tags: ["Sprint Planning", "Active Comm", "Feedback Loops", "Git Workflows"],
    detailNote: "Good design is a shared conversation with team members."
  },
  {
    id: 3,
    title: "Learning to Adapt",
    icon: "🧭",
    description: "Ventured out of standard development sandboxes. Pivoted to secure cloud deployment pipelines, system security architectures, and lightweight AI APIs.",
    tags: ["AWS Foundations", "Resilient Infrastructure", "AI integrations", "Adaptability"],
    detailNote: "Embraced learning under pressure as an ongoing superpower."
  },
  {
    id: 4,
    title: "Learning to Deliver",
    icon: "✨",
    description: "Refining the final polishing stages. Prioritizing strict quality assurance, semantic accessibility benchmarks, and loading performance metrics.",
    tags: ["UX Polish", "Web Audits", "Value Focus", "Robust Code"],
    detailNote: "Every solid detail respects the visitor's focus and time."
  }
];

export const beyondCodingItems: BeyondCodingItem[] = [
  {
    id: 1,
    title: "Journalism Organization",
    role: "Secretary",
    icon: "📰",
    description: "Division leader for secretary, actively take parts in writing school news. Manage to serve information by writing",
    noteColor: "pink"
  },
  {
    id: 2,
    title: "Team Coordination",
    role: "Project Lead & Coordinator",
    icon: "🗂️",
    description: "Organized task distributions, designed timeline boards, and balanced feedback channels inside technical prototypes to maintain a warm team atmosphere.",
    noteColor: "yellow"
  },
  {
    id: 3,
    title: "Public Speaking",
    role: "Pitcher & Presenter",
    icon: "🎤",
    description: "Taking role as pitcher and presenter in public events, competitions, and projects",
    noteColor: "blue"
  }
];
