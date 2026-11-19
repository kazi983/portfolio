import projectImage1 from "../assets/images/project1.png";
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
    name: "Portfolio",
    href: "#",
    image: projectImage1,
    imageAlt: "Project 1",
    techs: ["CSS", "HTML"],
  },
  {
    name: "World Weather App",
    href: "https://travelworldwithweather.netlify.app/",
    image: worldWeatherAppImage,
    imageAlt: "Project 2",
    techs: ["Astro", "TypeScript", "SCSS"],
  },
];
