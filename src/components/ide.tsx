import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Button } from "@heroui/button";
import { SiPycharm, SiWebstorm } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Ide() {
  const skills = [
    {
      name: "Visual Studio Code",
      color: "bg-blue-500",
      icon: <VscVscode />,
      learning: "Autodidacte et Formation CDA*",
      source: "École O'Clock",
    },
    {
      name: "PyCharm",
      color: "bg-yellow-400",
      icon: <SiPycharm />,
      learning: "Formation CDA*",
      source: "En entreprise",
    },
    {
      name: "WebStorm",
      color: "bg-green-500",
      icon: <SiWebstorm />,
      learning: "Formation CDA*",
      source: "En entreprise",
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
