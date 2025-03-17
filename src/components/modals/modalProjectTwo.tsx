import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";

import { GithubIcon } from "../icons.tsx";
import { useTranslation } from "react-i18next";

interface IModalProject {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ModalProjectTwo: React.FC<IModalProject> = ({ isOpen, onOpenChange }) => {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {t("project.Facemeet")}
            </ModalHeader>
            <ModalBody className="text-justify">
              <p>{t("project.FacemeetDescriptionP1")}</p>
              <p>{t("project.FacemeetDescriptionP2")}</p>
              <p>{t("project.FacemeetDescriptionP3")}</p>
            </ModalBody>
            <ModalFooter>
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                })}
                href={"https://github.com/AurelieMous/weather-api-react"}
              >
                <GithubIcon size={20} />
                {t("project.MonRepo")}
              </Link>
              <Button color="danger" variant="light" onPress={onClose}>
                {t("project.Fermer")}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalProjectTwo;
