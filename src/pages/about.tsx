import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import monImage from "../assets/image/about.jpg";
import DefaultLayout from "../layouts/default";
import { title } from "../components/primitives";
import { useMediaQueryPersonnalise } from "../context/mediaQueryContext.tsx";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { isDesktopOrLaptop } = useMediaQueryPersonnalise();
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center md:py-3">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>{t("index.Àpropos")}</h1>
        </div>
        <div
          className={
            isDesktopOrLaptop
              ? "flex items-center justify-center gap-20 py-8 md:py-10"
              : "flex w-full flex-col items-center justify-center "
          }
        >
          <div className={isDesktopOrLaptop ? "mt-8 w-1/2" : "w-full p-8"}>
            <h2 className="text-3xl pb-4">{t("about.title")}</h2>
            <p className="text-justify pb-4">{t("about.paragraph1")}</p>
            <p className="text-justify pb-4">{t("about.paragraph2")}</p>
            <p className="text-justify pb-4 italic">{t("about.paragraph3")}</p>
            <div className="flex gap-10 pt-3 justify-center">
              <Button
                as={Link}
                color="secondary"
                href="/skills/"
                variant="solid"
              >
                {t("about.mes_skills")}
              </Button>
              <Button
                as={Link}
                color="secondary"
                href="/projects/"
                variant="solid"
              >
                {t("about.mes_projets")}
              </Button>
            </div>
          </div>
          {isDesktopOrLaptop ? (
            <Image
              isBlurred
              alt="NextUI Album Cover"
              className="m-9"
              src={monImage}
              width={320}
            />
          ) : (
            <Image
              isBlurred
              alt="NextUI Album Cover"
              src={monImage}
              width={200}
            />
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
