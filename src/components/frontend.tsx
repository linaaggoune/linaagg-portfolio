import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Button } from "@heroui/button";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoCss3, BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";

import { SiAntdesign, SiTailwindcss } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";

export default function FrontEnd() {
  const skills = [
    {
      name: "HTML5",
      color: "bg-orange-500",
      icon: <FaHtml5 />,
      learning: "En autodidacte",
      source: "Cours en ligne",
      proficiency: 90,
    },
    {
      name: "CSS3",
      color: "bg-blue-500",
      icon: <BiLogoCss3 />,
      learning: "En autodidacte",
      source: "Cours en ligne",
      proficiency: 85,
    },
    {
      name: "JavaScript",
      color: "bg-yellow-500",
      icon: <BiLogoJavascript />,
      learning: "En autodidacte",
      source: "Cours en ligne",
    },
    {
      name: "React",
      color: "bg-blue-400",
      icon: <IoLogoReact />,
      learning: "En autodidacte",
      source: "Cours en ligne",
    },
    {
      name: "TypeScript",
      color: "bg-blue-600",
      icon: <BiLogoTypescript />,
      learning: "En autodidacte",
      source: "Cours en ligne",
    },
    {
      name: "Ant Design",
      color: "bg-pink-500 text-white",
      icon: <SiAntdesign />,
      learning: "En autodidacte",
      source: "Cours en ligne",
    },
    {
      name: "Bootstrap",
      color: "bg-purple-500",
      icon: <DiBootstrap />,
      learning: "En autodidacte",
      source: "Cours en ligne",
    },
    {
      name: "Tailwind",
      color: "bg-teal-500",
      icon: <SiTailwindcss />,
      learning: "En autodidacte",
      source: "Cours en ligne",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 pt-6 pb-5 w-full">
      {skills.map(({ name, color, icon, learning, source }) => (
        <Popover key={name} className="relative" placement="bottom">
          <PopoverTrigger>
            <Button
              className={`${color} skill-button flex items-center gap-2 px-4 py-2 rounded-lg text-white`}
            >
              {name} {icon}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="text-small font-bold">{learning}</div>
            <div className="text-tiny">{source}</div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
