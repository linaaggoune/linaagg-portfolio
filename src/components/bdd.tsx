import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Button } from "@heroui/button";
import { SiPostgresql } from "react-icons/si";

export default function Database() {
  return (
    <>
      <div className="flex gap-2 pb-5 w-full justify-center">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button className={"bg-blue-950 text-white"}>
              PostgreSQL
              <SiPostgresql />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">En autodidacte</div>
              <div className="text-tiny">Cours en ligne</div>
              <div className="text-tiny">École O&#39;Clock</div>
            </div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button className={"bg-blue-950 text-white"}>
              PostgreSQL
              <SiPostgresql />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">En autodidacte</div>
              <div className="text-tiny">Cours en ligne</div>
              <div className="text-tiny">École O&#39;Clock</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
