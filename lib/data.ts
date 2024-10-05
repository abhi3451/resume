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



export const educationData = [
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
    tags: ["React", "Tailwind", "JEST", "Redux ToolKit"],
    imageUrl:
      "https://res.cloudinary.com/abhi-3451/image/upload/v1715673289/portfolio%20images/x995bhwvn3tmwxvorb8g.webp",
    url: "",
  },
  {
    title: "Strinz",
    description:
      "An AI Based Chat App. I created role based admin panel through which admin can add stickers and messages.  ",

    tags: ["React", "Tailwind", "JEST", "Redux ToolKit"],
    imageUrl:
      "https://res.cloudinary.com/abhi-3451/image/upload/v1723814753/portfolio%20images/hhkt5ajkxxghlotc7csa.png",
    url: "https://www.strinz.online/",
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
