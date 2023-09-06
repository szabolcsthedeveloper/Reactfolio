export const METADATA = {
  title: "Szabolcs Nagy | Portfolio",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://szabolcsnagy.com/",
};

export const MENULINKS = [
  {
    name: "HOME",
    ref: "home",
  },
  {
    name: "PROJECTS",
    ref: "works",
  },
  {
    name: "SKILLS",
    ref: "skills",
  },
  {
    name: "WORK HISTORY",
    ref: "timeline",
  },
  {
    name: "CONTACT",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I develop modern frontend apps.",
  "I design dynamic user experiences.",
  "I develop blockchain powereded apps.",
  "I create stunning visual experiences.",
];

export const EMAIL = "mailto:work.szabolcs@proton.me";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/szabolcsthedeveloper/",
  github: "https://github.com/szabolcsthedeveloper",
  phone: "https://calendly.com/zylar",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Zylar | Technical Project Lead",
    image: "/projects/zylar.png",
    blurImage: "/projects/blur/zylar.png",
    description: "Visually stunning websites injected with web3 functionality.",
    gradient: ["#471F65", "#B338FB"],
    url: "https://www.zylar.xyz/",
    tech: ["react", "next", "typescript", "tailwind", "aws"],
  },
  {
    name: "Darknight Labs | Web & Mint Division",
    image: "/projects/darknight.png",
    blurImage: "/projects/blur/zylar.png",
    description: "Dominant Web3 Marketing Agency.",
    gradient: ["#0d0d0d", "#5A5A5A"],
    url: "https://szabolcsnagy.com/darknight-labs",
    tech: ["react", "python", "bootstrap", "d3", "figma"],
  },
  {
    name: "RYFT | Technical Project Lead",
    image: "/projects/ryft.png",
    blurImage: "/projects/blur/ryft.png",
    description: "Your go-to web3 project tracker app.",
    gradient: ["#706139", "#DAC470"],
    url: "https://ryftpass.io/",
    tech: ["react", "redux", "javascript", "python", "postgresql"],
  },
  {
    name: "Chess Game | AI",
    image: "/projects/chess.jpg",
    blurImage: "/projects/blur/chess.jpg",
    description: "Your go-to web3 project tracker app.",
    gradient: ["#392B24", "#D5B782"],
    url: "https://github.com/szabolcsthedeveloper.com",
    tech: ["react", "redux", "javascript", "python", "postgresql"],
  },
  {
    name: "Personal Dev Blog",
    image: "/projects/blog.png",
    blurImage: "/projects/blur/blog.png",
    description: "Visually stunning websites injected with web3 functionality.",
    gradient: ["#596ADA", "#F1F2F3"],
    url: "https://github.com/szabolcsthedeveloper.com/",
    tech: ["react", "next", "typescript", "tailwind", "aws"],
  },
  {
    name: "E-commerce Website",
    image: "/projects/ecom.png",
    blurImage: "/projects/blur/ecom.png",
    description: "Dominant Web3 Marketing Agency.",
    gradient: ["#A66837", "#A2ACAB"],
    url: "https://github.com/szabolcsthedeveloper.com",
    tech: ["react", "python", "bootstrap", "d3", "figma"],
  },
];

export const SKILLS = {
  programmingLanguages: ["javascript", "typescript", "python"],
  frontend: ["react", "next", "redux"],
  backend: ["node", "express", "postman"],
  markup: ["html", "css", "sass", "tailwind", "bootstrap"],
  dVDB: ["d3", "postgresql", "mongo", "mongoose"],
  cloud: ["aws", "docker", "kubernetes"],
  web3: ["solidity", "rust", "web3js"],
  other: ["git", "webpack", "figma", "photoshop"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lead Technical Project Manager",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering @ core team, in charge of the web development and mint tracker divisions. 🧪",
    image: "/timeline/dn-logo.png",
    slideImage: "/timeline/dn.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Acquisition",
    size: ItemSize.SMALL,
    subtitle: "RYFT's & Zylar's acquisition by Darknight Labs. 🤝",
    image: "/timeline/dn-logo.png",
    slideImage: "/timeline/acq.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    subtitle: "",
    image: "",
    slideImage: "/timeline/acq.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Technical Project Lead",
    size: ItemSize.SMALL,
    subtitle: "Visually stunning websites injected with web3 functionality. 🎯",
    image: "/timeline/zylar-logo.png",
    slideImage: "/timeline/zylar.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Technical Project Lead",
    size: ItemSize.SMALL,
    subtitle:
      "Web3 Trading Tool (upcoming project & portfolio tracking and much more) 📲",
    image: "/timeline/ryft-logo.png",
    slideImage: "/timeline/mockup.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Techincal Project Manager",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for a leading web3 marketing agency",
    image: "/timeline/dn-logo.png",
    slideImage: "/timeline/dn.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    subtitle: "",
    image: "",
    slideImage: "/timeline/nefturians.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX Developer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Led the design for over 15 Web3 projects and assisted with their web development. 🖼️",
    slideImage: "/timeline/whale-together.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Web Designer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Designed and created +10 fully functional websites for local clients in the area. 🎨",
    slideImage: "/timeline/momentum.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    subtitle: "Journey begins. 🚀",
    image: "",
    slideImage: "/timeline/beginning.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
