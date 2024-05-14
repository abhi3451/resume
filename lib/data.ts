import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiTaichigraphics } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";

import champs from "@/public/champs.png";

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
    name: "Experience",
    hash: "#experience",
  },

  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
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
      "Developed and maintained 4 responsive web applications using React, resulting in a remarkable 10% increase in user engagement. Collaborated with a cross-functional team to implement a new design system, reducing UI development time by an impressive 20%. Achieved a remarkable 99% code maintainability score through regular code reviews and refactoring, ensuring long-term project scalability. My stack includes React, Next.js, TypeScript, Tailwind, Express and MongoDB. ",
    icon: React.createElement(FaReact),
    date: "Feb 2022 - Feb 2024",
    years: 2,
  },
  {
    title: "Visual Media Designer",
    location: "Nitish Studio",
    description:
      "This was the joint venture where I was working with big clients and was creating promotional videos. ",
    icon: React.createElement(CgWorkAlt),
    years: 2.3,
    date: "Oct 2019 - Jan 2022",
  },
  {
    title: "Motion Graphic Artist",
    location: "Fotografik Enterprises",
    description: "I worked on AE and Photoshop.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2019 - Oct 2019",
    years: 0.3,
  },
] as const;

export const educationData = [
  {
    title: "MCA (Distance)",
    Place: "LPU",

    icon: React.createElement(FaUserGraduate),
    date: "2021 - 2023",
  },
  {
    title: "AAIP",
    Place: "ARENA ANIMATIONS",

    icon: React.createElement(SiTaichigraphics),
    date: "2016 - 2019",
  },
  {
    title: "BCA",
    Place: "PANJAB UNIVERSITY",
    icon: React.createElement(FaUserGraduate),
    date: "2013-2016",
  },
] as const;
export const projectsData = [
  {
    title: "Easy Car Relo",
    description:
      "A car re-locating cum renting app, my role was to handle the frontend and authentication while wokring with the team. ",
    tags: ["React", "Redux Toolkit", "MongoDB", "BootStrap"],
    imageUrl:
      "https://res.cloudinary.com/abhi-3451/image/upload/v1715673288/portfolio%20images/b6mbcxjrhe4ogrvas4yj.webp",
    url: "https://www.easycarrelo.co.nz/",
  },
  {
    title: "Champs Sports",
    description:
      "An E-commerce app to purchase the shoes. Here my role was to handle the Authentication, Product Page, Cart Page, Filtering and Searching.",
    tags: ["React", "TypeScript", "Redux ToolKit", "Tailwind"],
    imageUrl:
      "https://res.cloudinary.com/abhi-3451/image/upload/v1715673287/portfolio%20images/rsukesih8m8hb5lysreo.webp",
    url: "https://www.champssports.ca/en/category/boys",
  },
  {
    title: "Artist Kwot",
    description:
      "Musicians, comedians and other artists can setup and manage their profile on Kwot. You can add your content, engage with your followers, and also earn money.",
    tags: ["React", "Tailwind", "Redux ToolKit", "Next"],
    imageUrl:
      "https://res.cloudinary.com/abhi-3451/image/upload/v1715673288/portfolio%20images/gnafn9qo28vg6u4mq6hb.webp",
    url: "https://artist.kwot.com/",
  },
  {
    title: "ZeeKart",
    description:
      "An agro based ecommerce app. Made testable component and worked on the authentication, Product page, Description page, Checkout, Order summary.  ",
    tags: ["React", "Tailwind", "JEST", "Redux ToolKit", "Mongodb"],
    imageUrl:
      "https://res.cloudinary.com/abhi-3451/image/upload/v1715673289/portfolio%20images/x995bhwvn3tmwxvorb8g.webp",
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
  "REST API",

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
