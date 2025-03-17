import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Button } from "@heroui/button";
import { FaLinux, FaWindows } from "react-icons/fa";

export default function System() {
  const skills = [
    {
      name: "Windows",
      color: "bg-blue-500 text-white",
      icon: <FaWindows />,
      learning: "Formation CDA*",
      source: "En entreprise",
    },
    {
      name: "Linux",
      color: "bg-yellow-500",
      icon: <FaLinux />,
      learning: "En autodidacte et formation CDA*",
      source: "Cours en ligne et école O'Clock",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 pt-6 pb-5 w-full">
      {skills.map(({ name, color, icon, learning, source }) => (
        <Popover key={name} className="relative" placement="bottom">
          <PopoverTrigger>
            <Button
              className={`${color} flex items-center gap-2 px-4 py-2 rounded-lg text-white`}
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
