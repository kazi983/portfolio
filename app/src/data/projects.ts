import playerStatsDashboardImage from "../assets/images/player-stats-dashboard.png";
import shiodokiImage from "../assets/images/shiodoki.png";
import worldWeatherAppImage from "../assets/images/world-weather-app.png";

export type Project = {
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  techs: string[];
};

// Display numbers (_01., _02., ...) follow the array order.
export const PROJECTS: Project[] = [
  {
    name: "Shiodoki",
    href: "https://github.com/kazi983/shiodoki",
    image: shiodokiImage,
    imageAlt: "Shiodoki task management screen",
    techs: ["Electron", "React", "TypeScript", "Firebase", "Kotlin"],
  },
  {
    name: "World Weather App",
    href: "https://travelworldwithweather.netlify.app/",
    image: worldWeatherAppImage,
    imageAlt: "Project 2",
    techs: ["Astro", "TypeScript", "SCSS"],
  },
  {
    name: "Player Stats Dashboard",
    href: "https://player-stats.kaorukajihara.dev/",
    image: playerStatsDashboardImage,
    imageAlt: "Player Stats Dashboard rankings screen",
    techs: ["Astro", "TypeScript", "Express", "PostgreSQL", "Docker"],
  },
];
