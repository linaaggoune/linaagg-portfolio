import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { GithubIcon } from "../icons";
import { useTranslation } from "react-i18next";

interface IModalProject {
  isOpen: boolean; // Renommé de isOpenModal1
  onOpenChange: (isOpen: boolean) => void; // Renommé de onOpenChange1
}

const ModalProjectOne: React.FC<IModalProject> = ({ isOpen, onOpenChange }) => {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {t("project.Portfolio")}
            </ModalHeader>
            <ModalBody className="text-justify">
              <p>{t("project.PortfolioDescriptionP1")}</p>
              <p>{t("project.PortfolioDescriptionP2")}</p>
              <p>{t("project.PortfolioDescriptionP3")}</p>
            </ModalBody>
            <ModalFooter>
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                })}
                href={"https://github.com/AurelieMous/portfolio-react"}
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

export default ModalProjectOne;
