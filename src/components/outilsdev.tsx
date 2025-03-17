import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Button } from "@heroui/button";
import { SiGithubactions } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { SiPostman } from "react-icons/si";

export default function Outilsdev() {
  const skills = [
    {
      name: "Swagger",
      color: "bg-blue-400",
      icon: <SiSwagger />,
      learning: "Formation CDA*",
      source: "École O'Clock",
    },
    {
      name: "Postman ",
      color: "bg-blue-500",
      icon: <SiPostman />,
      learning: "Formation CDA*",
      source: "École O'Clock",
    },
    {
      name: "GitHub Action",
      color: "bg-blue-300",
      icon: <SiGithubactions />,
      learning: "Formation CDA*",
      source: "École O'Clock",
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
