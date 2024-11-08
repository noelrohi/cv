import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Noel Rohi Garcia",
  initials: "NRG",
  location: "Parañaque, Metro Manila, Philippines",
  locationLink: "https://www.google.com/maps/place/Parañaque,Metro+Manila",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "I specialize in TypeScript, React, Node.js, and MySQL, crafting code with precision and embracing type safety for clean, efficient solutions. With more than 2 years immersed in web development, I thrive in the realm of creating dynamic, user-centric experiences.",
  avatarUrl:
    "https://utfs.io/f/71b10353-1b80-438b-9a49-f4c8e2f6537f-1xbtsr.jpeg",
  personalWebsiteUrl: "https://rohi.dev",
  contact: {
    email: "noelrohi59@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/noelrohi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/noelrohi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/noelrohi",
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
      company: "ScaleForge",
      link: "https://scaleforge.com",
      badges: ["Remote"],
      title: "Frontend Engineer",
      start: "Jun 2024",
      end: "Present",
      description:
        "Fronteng Engineer of Research and Development team. Technologies: React, Nextjs, TypeScript, Drizzle ORM, TailwindCSS",
    },
    {
      company: "CaPEx",
      link: "https://capex.com.ph",
      badges: ["On-site"],
      title: "Full Stack Developer",
      start: "Jan 2023",
      end: "Jun 2024",
      description:
        "Built an app for Finance. Technologies: React, Nextjs, Typescript, REST API, TailwindCSS",
    },
    {
      company: "Exploretale Technologies",
      link: "https://exploretale.tech",
      badges: ["Freelance"],
      title: "Front-End Developer",
      start: "Jun 2023",
      end: "Oct 2023",
      description:
        "Built an app specially made for candidates of 2023 Election to boost their profile. Technologies: React, Nextjs, Typescript, REST API, TailwindCSS",
    },
  ],
  skills: [
    "TypeScript",
    "React/Next.js",
    "TailwindCSS",
    "Git",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "Shadcn UI",
    "Drizzle ORM",
    "Supabase",
  ],
  projects: [
    {
      title: "anirohi",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
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
        "Shadcn UI",
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
      title: "rohi.dev",
      techStack: [
        "Side Project",
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "Neon PostgreSQL",
        "Drizzle ORM",
        "Biome Formatter / Linter",
      ],
      description: "My personal website and blog.",
      link: {
        label: "rohi.dev",
        href: "https://rohi.dev/",
      },
    },
    {
      title: "K-Next",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
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
