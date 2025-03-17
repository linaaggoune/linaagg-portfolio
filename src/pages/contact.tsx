import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";

import DefaultLayout from "../layouts/default";
import { title } from "../components/primitives";
import SuccessAlert from "../components/alert.tsx";
import { useTranslation } from "react-i18next";
export default function ContactPage() {
  const { t } = useTranslation();
  // récupérer les données du form
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    socity: "",
    message: "",
  });

  const [alert, setAlert] = useState<{ message: string; type: string } | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = async () => {
    try {
      setAlert({ message: t("contact.successMessage"), type: "success" });
      resetForm();
    } catch (error) {
      console.error("Email error:", error);
      setAlert({ message: "Erreur d'envoi", type: "error" });
    }
  };

  // Fonction qui permet de vider les champs du formulaire
  const resetForm = () => {
    setFormData({
      nom: "",
      email: "",
      socity: "",
      message: "",
    });
  };

  return (
    <DefaultLayout>
      {alert && <SuccessAlert message={alert.message} type={alert.type} />}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>{t("contact.me_contacter")}</h1>
        </div>
        <Form
          className="w-full max-w-xs flex flex-col items-center justify-center"
          validationBehavior="native"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
        >
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-8 pb-8">
            <Input
              isRequired
              errorMessage={t("contact.requiredMsg")}
              label={t("contact.Nom")}
              name="nom"
              type="text"
              value={formData.nom}
              onChange={handleChange}
            />
            <Input
              isRequired
              errorMessage={t("contact.emailerrorMessage")}
              label={t("contact.Email")}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label={t("contact.Société")}
              name="socity"
              type="text"
              value={formData.socity}
              onChange={handleChange}
            />
            <Textarea
              isRequired
              errorMessage={t("contact.requiredMsg")}
              label={t("contact.Message")}
              name="message"
              placeholder={t("contact.messagePlaceholder")}
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button color="secondary" size="lg" type="submit" variant="ghost">
            {t("contact.Envoyer")}
          </Button>
        </Form>
      </section>
    </DefaultLayout>
  );
}
