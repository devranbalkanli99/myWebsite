import React from "react";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, icons = [] }) => {
  return (
    <div>
      <div
        className="h-52 border border-white md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex-col items-center justify-center gap-[20px] absolute top-0 left-0 w-full h-full bg-white hidden group-hover:flex transition-all duration-500">
          <h5 className="text-black text-xl font-semibold mb-2">{title}</h5>
          <p className="text-black text-center text-sm px-4">{description}</p>
          <div className="flex flex-row gap-[10px]">
            {icons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                width={36}
                height={36}
                alt={`icon-${index}`}
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
