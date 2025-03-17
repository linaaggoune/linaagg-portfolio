import { title } from "../components/primitives";
import DefaultLayout from "../layouts/default";
import FrontEnd from "../components/frontend.tsx";
import Backend from "../components/backend.tsx";

import Outilsdev from "../components/outilsdev.tsx";
import System from "../components/system.tsx";

import Category from "../components/category.tsx";
import "../styles/globals.css";
import { useTranslation } from "react-i18next";

export default function SkillsPage() {
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center w-full gap-20 p-[5%] sm:p-[8%] lg:p-[10%]">
        {/* Titre */}
        <div className="max-w-lg text-center">
          <h1 className={title()}>{t("about.mes_skills")}</h1>
        </div>

        {/* Contenu (Front, Back, DB, etc.) */}
        <div className="flex flex-col w-full max-w-2xl gap-5">
          <Category title={t("skills.front")} component={<FrontEnd />} />
          <Category title={t("skills.back")} component={<Backend />} />

          <Category title={t("skills.OutilsDev")} component={<Outilsdev />} />
          <Category title={t("skills.Systemdexp")} component={<System />} />
        </div>
      </section>
    </DefaultLayout>
  );
}
