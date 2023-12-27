import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Noel Rohi Garcia",
  initials: "NRG",
  location: "Parañaque, Metro Manila, Philippines",
  locationLink: "https://www.google.com/maps/place/Parañaque,Metro+Manila",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. Currently, I work mostly with TypeScript, React, Node.js, and MySQL. I have over 1 year of experience in web development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/105811202?v=4",
  personalWebsiteUrl: "https://rohi.dev",
  contact: {
    email: "n@rohi.dev",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/gneiru",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gneiru/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/gneiru",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Pangasinan State University, Bayambang Campus",
      degree: "Bachelor's Degree in Information Technology",
      start: "2018",
      end: "2022",
    },
  ],
  work: [
    {
      company: "CaPEx",
      link: "https://capex.com.ph",
      badges: ["On-site"],
      title: "Full Stack Developer",
      start: "Jan 2023",
      end: "Present",
      description:
        "Implemented new features, fixed bugs, started migration from Bootstrap4 to Tailwind CSS, now building app for Finance using Nextjs. Technologies: PHP, Yii, React, Nextjs, Typescript, Git",
    },
    {
      company: "Exploretale Technologies",
      link: "https://exploretale.tech",
      badges: ["Freelance"],
      title: "Front-End Developer",
      start: "Jun 2023",
      end: "Oct 2023",
      description:
        "Integrate REST API, replicated UI made with Figma, SEO and more. Meetings held on discord / google meet. Technologies: PHP, Yii, React, Nextjs, Typescript, Git",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "TailwindCSS",
    "PHP",
    "Git",
  ],
  projects: [
    {
      title: "Anirohi",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Radix UI",
        "GraphQL",
        "Planetscale MySQL",
        "Drizzle ORM",
      ],
      description: "An anime streaming site with Anilist mutations and query.",
      link: {
        label: "ani.rohi.dev",
        href: "https://ani.rohi.dev/",
      },
    },
    {
      title: "Thr",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Radix UI",
        "Planetscale MySQL",
        "Drizzle ORM",
      ],
      description: "A clone of Meta's Threads",
      link: {
        label: "thr.rohi.dev",
        href: "https://thr.rohi.dev/",
      },
    },
    {
      title: "K-Next",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Radix UI",
        "Planetscale MySQL",
        "Drizzle ORM",
      ],
      description: "A kdrama streaming site.",
      link: {
        label: "kd.rohi.dev",
        href: "https://kd.rohi.dev/",
      },
    },
  ],
} as const;
