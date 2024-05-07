import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "N2P Digital Agency",
    description:
      "I worked as front-end developer working and aquired the knowledge of backend aslo. My stack includes React, Next.js, TypeScript, Tailwind, Express and MongoDB. ",
    icon: React.createElement(FaReact),
    date: "Feb 2022 - Feb 2024",
  },
  {
    title: "Visual Media Designer",
    location: "Nitish Studio",
    description:
      "This was the joint venture where I was working with big clients and was creating promotional videos. Here I was also editing the videos for  ",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2019 - Jan 2022",
  },
  {
    title: "Motion Graphic Artist",
    location: "Fotografik Enterprises",
    description: "I worked on AE and Photoshop.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2019 - Oct 2019",
  },
] as const;

export const projectsData = [
  {
    title: "EasyCarRelo",
    description:
      "A car re-locating cum renting app, my role was to handle the frontend and authentication while wokring with the team ",
    tags: ["React", "Redux Toolkit", "MongoDB", "BootStrap"],
    imageUrl: corpcommentImg,
    url: "https://www.easycarrelo.co.nz/",
  },
  {
    title: "GoFynd",
    description:
      "An E-commerce app to purchase the cloths and appreals. Here a handle the Authentication, Product Page, Cart Page, Filtering and Searching",
    tags: ["React", "TypeScript", "Redux ToolKit", "Tailwind"],
    imageUrl: rmtdevImg,
    url: "https://www.gofynd.com/",
  },
  {
    title: "Sef Racing",
    description: "A Quiz Pannle app to access the racing drivers.",
    tags: ["React", "Tailwind", "Redux ToolKit"],
    imageUrl: wordanalyticsImg,
    url: "https://sefracing.com/",
  },
  {
    title: "ZeeKart",
    description:
      "An agro based ecommerce app. Made testable component and worked on the authentication, Product page, Description page, Checkout, Order summary.  ",
    tags: ["React", "Tailwind", "Next js", "Redux ToolKit"],
    imageUrl: wordanalyticsImg,
    url: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "ShadCN",
  "Axios",
  "MongoDB",
  "Redux ToolKit",
  "JWT",
  "Express",
  "JEST",
] as const;
