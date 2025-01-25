"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Devran Balkanlı Portfolio",
    image: "/images/myWebsite.png",
    tag: ["All", "Personal"],
    description: "A personal portfolio showcasing my skills and projects.",
    icons: [
      "/images/tailwind.svg",
      "/images/react.svg",
      "/images/nextjsDark.svg",
    ],
  },
  {
    id: 2,
    title: "Doğuş Group Website",
    image: "/images/dogusWebsite.png",
    tag: ["All", "Professional"],
    description:
      "Doğuş Group is one of the largest group companies in Turkey. We've made their new website. I was in the project frontend developer position during the development process. ",
    icons: [
      "/images/react.svg",
      "/images/javascript.svg",
      "/images/strapi.svg",
      "/images/materialUI.svg",
    ],
  },
  {
    id: 3,
    title: "Networkdry",
    image: "/images/networkdry.png",
    tag: ["All", "Professional"],
    description:
      "Networkdry is a online cleaning service provider. We've made their new web and mobile application. I was in the frontend developer position during the development process. I also developed their web application using Nextjs, tailwind, context API, RestFull API and Strapi. ",
    icons: [
      "/images/react.svg",
      "/images/typescript.svg",
      "/images/strapi.svg",
      "/images/tailwind.svg",
      "/images/nextjsDark.svg",
    ],
  },
  {
    id: 4,
    title: "RMK Merrill Stevens",
    image: "/images/rmkMerrill.png",
    tag: ["All", "Professional"],
    description:
      "RMK Merrill project is a corporate website consisting of cms and frontend. I worked as PM/PO and frontend developer in this project. Nextjs and Strapi CMS were used in the project.",
    icons: [
      "/images/react.svg",
      "/images/typescript.svg",
      "/images/strapi.svg",
      "/images/tailwind.svg",
      "/images/nextjsDark.svg",
    ],
  },
  {
    id: 5,
    title: "Recommaster",
    image: "/images/recommaster.png",
    tag: ["All", "Professional"],
    description:
      "Recommaster is a personalize ai-driven recommender system.  I was in the project manager and frontend developer positions. I also developed their web application using Vue.js, Vuetify, RestFull API and JS SDK. ",
    icons: ["/images/vue.svg", "/images/javascript.svg", "/images/dotnet.svg"],
  },
  {
    id: 6,
    title: "Notisecure",
    image: "/images/notisecure.png",
    tag: ["All", "Professional"],
    description:
      "NotiSecure is a security and compliance platform tailored for businesses. I took on the roles of Frontend Developer and PM in this project. I developed the web application ensuring a seamless and secure user experience while aligning with the platform's goals.",
    icons: ["/images/vue.svg", "/images/javascript.svg", "/images/dotnet.svg"],
  },
  {
    id: 7,
    title: "Store App",
    image: "/images/storeApp.png",
    tag: ["All", "Personal"],
    description:
      "A robust .NET-powered application built to manage inventory, process orders, and provide a smooth shopping experience. The app emphasizes performance, scalability, and user-friendly design to meet the needs of modern e-commerce.",
    icons: ["/images/dotnet.svg"],
  },
  {
    id: 8,
    title: "Expense Tracker",
    image: "/images/expenseApp.png",
    tag: ["All", "Personal"],
    description:
      "A dynamic React-based application designed to help users efficiently track and manage their daily expenses. The app features an intuitive interface, category filtering, and real-time data updates to provide a seamless budgeting experience.",
    icons: [
      "/images/react.svg",
      "/images/javascript.svg",
      "/images/nextjsDark.svg",
    ],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-16">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Professional"
          isSelected={tag === "Professional"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              imgUrl={project.image}
              description={project.description}
              icons={project.icons}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
