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
  "Quickly resolving tech issues.",
  "Ensuring seamless tech experiences.",
  "Guiding through tech challenges.",
  "Swift, reliable support solutions.",
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
    name: "Zylar | Web3 Creative Agency",
    image: "/projects/zylar.png",
    blurImage: "/projects/blur/zylar.png",
    description: "Visually stunning websites injected with web3 functionality.",
    gradient: ["#471F65", "#B338FB"],
    url: "https://www.zylar.xyz/",
    tech: ["react", "next", "typescript", "tailwind", "aws"],
  },
  {
    name: "Darknight Labs | Web3 Digital Agency",
    image: "/projects/darknight.png",
    blurImage: "/projects/blur/zylar.png",
    description: "Dominant Web3 Marketing Agency.",
    gradient: ["#0d0d0d", "#5A5A5A"],
    url: "https://szabolcsnagy.com/darknight-labs",
    tech: ["react", "python", "bootstrap", "d3", "figma"],
  },
  {
    name: "RYFT | Web3 SaaS",
    image: "/projects/ryft.png",
    blurImage: "/projects/blur/ryft.png",
    description: "Your go-to web3 project tracker app.",
    gradient: ["#706139", "#DAC470"],
    url: "https://ryftpass.io/",
    tech: ["react", "redux", "javascript", "python", "postgresql"],
  },
  {
    name: "React Chess Game",
    image: "/projects/chessgame.png",
    blurImage: "/projects/blur/chess.jpg",
    description: "React + TypesScript Chess Game",
    gradient: ["#759355", "#EDEDD2"],
    url: "https://chess-game-react.netlify.app/",
    tech: ["react", "typescript", "javascript", "css", "git"],
  },
  {
    name: "React Developer Roadmap",
    image: "/projects/reactacademy.png",
    blurImage: "/projects/blur/blog.png",
    description:
      "Interactive React Developer Roadmap to guide novices in programming ",
    gradient: ["#173486", "#1D283A"],
    url: "https://react.academy/",
    tech: ["react", "next", "typescript", "tailwind", "aws"],
  },
  {
    name: "E-commerce Website",
    image: "/projects/yuskin.png",
    blurImage: "/projects/blur/ecom.png",
    description: "A real world successful ecommerce brand's store + backend.",
    gradient: ["#DEB1AF", "#2E2A39"],
    url: "https://www.yuskinbeauty.com/",
    tech: [, "javascript", "html", "css", "figma"],
  },
];

export const SKILLS = {
  programmingLanguages: ["javascript", "typescript", "python"],
  frontend: ["react", "next", "redux"],
  backend: ["node", "express", "postman", "shopify"],
  markup: ["html", "css", "sass", "tailwind", "bootstrap"],
  dVDB: ["d3", "postgresql", "mongo", "mongoose"],
  cloud: ["aws", "docker", "kubernetes"],
  web3: ["solidity", "rust", "web3js"],
  other: ["git", "webpack", "canva", "figma", "photoshop"],
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
    title: "Senior Technical Support Analyst",
    size: ItemSize.SMALL,
    subtitle: "Visually stunning websites injected with web3 functionality. 🎯",
    image: "/timeline/zylar-logo.png",
    slideImage: "/timeline/zylar.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Technical Support Analyst",
    size: ItemSize.SMALL,
    subtitle: "Largest web3 marketing agency",
    image: "/timeline/dn-logo.png",
    slideImage: "/timeline/dn.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Technical Support Specialist",
    size: ItemSize.SMALL,
    subtitle: "Worldwide beauty brand with over 52,500+ happy customers. 🖼️",
    slideImage: "/timeline/yuskin.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Customer Support Representative",
    size: ItemSize.SMALL,
    subtitle:
      "Web3 Trading Tool (upcoming project & portfolio tracking and much more) 📲",
    image: "/timeline/ryft-logo.png",
    slideImage: "/timeline/mockup.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
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
