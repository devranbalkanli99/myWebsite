import React from "react";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, icons = [] }) => {
  return (
    <div>
      <div
        className="h-52 border border-white md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="flex gap-[5px] overlay flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-white hidden group-hover:flex transition-all duration-500 sm:gap-[20px]">
          <h5 className="text-black text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[12px] text-black text-center px-4 sm:text-sm">
            {description}
          </p>
          <div className="flex flex-row gap-[10px]">
            {icons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                width={36}
                height={36}
                alt={`icon-${index}`}
                className="w-[24px] h-[24px] sm:w-[36px] h-[36px]"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
