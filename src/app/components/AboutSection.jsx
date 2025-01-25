"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

import "swiper/css";
import "swiper/css/effect-fade";

const TAB_DATA = [
  {
    title: "Work Experience",
    id: "experience",
    content: (
      <div className="flex flex-col gap-[20px] items-center justify-center">
        <p className="w-full font-bold text-left text-[18px] sm:text-[20px]">
          Doğuş Teknoloji (04.07.2022 - 09.09.2024)
        </p>
        <p className="text-[14px] sm:text-[16px]">
          At Doğuş Technology, I played a key role in developing innovative and
          user-centric web applications using modern technologies such as React,
          Next.js, TypeScript, Vue.js, and .NET. I contributed to various
          projects, including corporate websites and dashboards, focusing on
          delivering high-performance, responsive designs and seamless user
          experiences. Collaborating with cross-functional teams, I ensured the
          creation of scalable and maintainable solutions while optimizing web
          performance and adhering to industry best practices.
        </p>
      </div>
    ),
  },
  {
    title: "Academic",
    id: "academic",
    content: (
      <div className="flex flex-col gap-[10px]">
        <p className="font-bold text-[20px]">Beykent University</p>
        <p className="italic text-[14px]">
          2019 – 2023 | Bachelor&apos;s Degree in Computer Engineering
        </p>
        <p>
          During my studies at Beykent University, I built a strong foundation
          in programming through courses such as Visual Programming, Algorithms,
          Object-Oriented Programming, and Artificial Intelligence. I applied my
          knowledge to various projects, including:
        </p>
        <ul className="list-disc pl-2">
          <li>
            Appointment Scheduling System: A system developed to optimize and
            simplify the scheduling process for businesses and individuals.
          </li>
          <li>
            AI-Powered Job Application Evaluation: A project utilizing decision
            tree algorithms to evaluate job applications based on predefined
            criteria, ensuring an efficient and unbiased selection process.
          </li>
        </ul>
        <p>
          Additionally, I actively participated in university clubs such as IEEE
          Beykent, where I collaborated with peers on technical events and
          projects, further enhancing my teamwork and leadership skills. These
          experiences enriched my technical and interpersonal abilities while
          fostering a passion for innovation and problem-solving.
        </p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Turkcell React Educations</li>
        <li>Udemy HTML-CSS Education</li>
        <li>BTK Academy .NET Core MVC</li>
        <li>Coderspace Frontend School</li>
        <p className="text-red-500">
          You can see my certifications on my{" "}
          <a
            href="https://www.linkedin.com/in/devran-balkanl%C4%B1-19bb65214/details/certifications/"
            target="_blank"
            className="underline text-white"
          >
            Linkedin
          </a>{" "}
          profile
        </p>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="max-w-full mt-4 md:mt-0 text-left flex flex-col h-full gap-[10px]">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-[14px] sm:text-[16px]">
            In addition to my expertise in front-end development, I have basic
            knowledge of .NET. I have led multiple projects in the frontend
            domain, creating user-friendly web applications. My goal is to
            achieve the same level of proficiency in backend development as I
            have in frontend, and to develop user-friendly projects as a
            fullstack developer while reaching the highest level of competence
            possible. I am flexible and skilled enough to work as a frontend,
            backend, or fullstack developer depending on my organization&apos;s
            needs, and I aim to be a key contributor to my team.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Work Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("academic")}
              active={tab === "academic"}
            >
              {" "}
              Academic{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
