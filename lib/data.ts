import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import easyCarRelo from "@/public/easyCarRelo.png";
import champs from "@/public/champs.png";
import artist from "@/public/artist.jpg";
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
      "This was the joint venture where I was working with big clients and was creating promotional videos. ",
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
      "A car re-locating cum renting app, my role was to handle the frontend and authentication while wokring with the team. ",
    tags: ["React", "Redux Toolkit", "MongoDB", "BootStrap"],
    imageUrl: easyCarRelo,
    url: "https://www.easycarrelo.co.nz/",
  },
  {
    title: "champsSports",
    description:
      "An E-commerce app to purchase the shoes. Here my role was to handle the Authentication, Product Page, Cart Page, Filtering and Searching.",
    tags: ["React", "TypeScript", "Redux ToolKit", "Tailwind"],
    imageUrl: champs,
    url: "https://www.champssports.ca/en/category/boys",
  },
  {
    title: "Artist Kwot",
    description:
      "Musicians, comedians and other artists can setup and manage their profile on Kwot. You can add your content, engage with your followers, and also earn money.",
    tags: ["React", "Tailwind", "Redux ToolKit", "Next"],
    imageUrl: artist,
    url: "https://artist.kwot.com/",
  },
  {
    title: "ZeeKart",
    description:
      "An agro based ecommerce app. Made testable component and worked on the authentication, Product page, Description page, Checkout, Order summary.  ",
    tags: ["React", "Tailwind", "JEST", "Redux ToolKit", "Mongodb"],
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
  // "ShadCN",
  "Axios",
  "MongoDB",
  "Redux ToolKit",
  "JWT",
  "Express",
  "JEST",
  "Version Control",
  "GIT",
] as const;
