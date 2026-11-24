// Icon source: https://techicons.dev/ or https://devicons.io/
import gitIcon from "../assets/images/tech_icons/Git.svg";
// import javaIcon from "../assets/images/tech_icons/Java.svg";
import javaScriptIcon from "../assets/images/tech_icons/JavaScript.svg";
import mongoDbIcon from "../assets/images/tech_icons/MongoDB.svg";
import nodeIcon from "../assets/images/tech_icons/Node.js.svg";
import pythonIcon from "../assets/images/tech_icons/Python.svg";
import reactIcon from "../assets/images/tech_icons/React.svg";
import sqlDeveloperIcon from "../assets/images/tech_icons/SQL Developer.svg";
import subversionIcon from "../assets/images/tech_icons/Apache Subversion.svg";
import tailwindIcon from "../assets/images/tech_icons/Tailwind CSS.svg";
import typeScriptIcon from "../assets/images/tech_icons/TypeScript.svg";
import expressIcon from "../assets/images/tech_icons/Express.svg";
import ubuntuIcon from "../assets/images/tech_icons/Ubuntu.svg";
import nextjsIcon from "../assets/images/tech_icons/Next.js.svg";
import astroIcon from "../assets/images/tech_icons/Astro.svg";
import prismaIcon from "../assets/images/tech_icons/Prisma.svg";
import firebaseIcon from "../assets/images/tech_icons/Firebase.svg";
import claudeCodeIcon from "../assets/images/tech_icons/ClaudeCode.svg";
import dockerIcon from "../assets/images/tech_icons/Docker.svg";
import expoIcon from "../assets/images/tech_icons/Expo.svg";
import postgresIcon from "../assets/images/tech_icons/PostgresSQL.svg";
import bunIcon from "../assets/images/tech_icons/Bun.svg";

export type StackGroup = {
  category: string;
  // `icon` is the URL Vite returns for an imported image.
  items: { name: string; icon: string }[];
};

export const STACK: StackGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", icon: javaScriptIcon },
      { name: "TypeScript", icon: typeScriptIcon },
      { name: "React", icon: reactIcon },
      { name: "Tailwind", icon: tailwindIcon },
      { name: "Astro", icon: astroIcon },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: nodeIcon },
      { name: "Bun", icon: bunIcon },
      { name: "Next.js", icon: nextjsIcon },
      { name: "Express", icon: expressIcon },
      // { name: "Java", icon: javaIcon },
      { name: "Python", icon: pythonIcon },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "OracleSQL", icon: sqlDeveloperIcon },
      { name: "MongoDB", icon: mongoDbIcon },
      { name: "PostgreSQL", icon: postgresIcon },
      { name: "Prisma", icon: prismaIcon },
      { name: "Firebase", icon: firebaseIcon },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: gitIcon },
      { name: "Subversion", icon: subversionIcon },
      { name: "Claude Code", icon: claudeCodeIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Ubuntu", icon: ubuntuIcon },
      { name: "Expo", icon: expoIcon },
    ],
  },
];
