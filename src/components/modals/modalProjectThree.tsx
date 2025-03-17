import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Button } from "@heroui/button";
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
              {t("project.MegaERPpending")}
            </ModalHeader>
            <ModalBody>
              <p>{t("project.MegaERPDescriptionP1")}</p>
              <p>{t("project.MegaERPDescriptionP2")}</p>
            </ModalBody>
            <ModalFooter>
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
