import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Button } from "@heroui/button";

import { siteConfig } from "../config/site";
import { title, subtitle } from "../components/primitives";
import { GithubIcon } from "../components/icons";
import DefaultLayout from "../layouts/default";
import { useMediaQueryPersonnalise } from "../context/mediaQueryContext";
import { useTranslation } from "react-i18next";

export default function IndexPage() {
  const { isDesktopOrLaptop } = useMediaQueryPersonnalise();
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div
          className={
            isDesktopOrLaptop
              ? "inline-block max-w-lg text-center justify-center pt-20"
              : "inline-block max-w-lg text-center justify-center"
          }
        >
          <span className={title()}>
            {t("index.welcome")} , {t("index.I'm")}&#39;&nbsp;
          </span>

          <span className={title({ color: "violet" })}>
            {t("index.Lyna")}&nbsp;
          </span>
          <br />
          <span className={title()}>
            {t("index.a")}
            <Link
              color="foreground"
              href="/skills/"
              size="lg"
              style={{
                fontSize: "3rem",
                margin: "1rem",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {t("index.frontend")}
            </Link>
            {t("index.developer")}
          </span>
          <div className={subtitle({ class: "mt-4 pt-10" })}>
            {t("index.Passionate")}
          </div>
        </div>

        <div
          className={
            isDesktopOrLaptop ? "flex gap-3 pt-10" : "flex flex-col gap-3 pt-10"
          }
        >
          <Button as={Link} color="secondary" href="/about/" variant="ghost">
            {t("index.Àpropos")}
          </Button>
          <Button
            showAnchorIcon
            as={Link}
            color="secondary"
            href="https://www.esi-sba.dz/fr/"
            target="_blank"
            variant="solid"
          >
            {t("index.Maformation")}
          </Button>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            {t("index.GitHub")}
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
