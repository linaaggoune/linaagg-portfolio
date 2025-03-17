import { useTranslation } from "react-i18next";
import { Navbar } from "../components/navbar";
import { useMediaQueryPersonnalise } from "../context/mediaQueryContext.tsx";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDesktopOrLaptop } = useMediaQueryPersonnalise();
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <span className="flex items-center row-auto gap-1 text-current">
          <span className={isDesktopOrLaptop ? "text-default-600" : "text-xs"}>
            {new Date().getFullYear()}
          </span>
          <span className={isDesktopOrLaptop ? "text-default-600" : "text-xs"}>
            {" "}
            {t("footer.creerpar")}
          </span>
          <p
            className={
              isDesktopOrLaptop ? "text-secondary" : "text-secondary text-xs"
            }
          >
            {t("footer.lynaaggoun")}
          </p>
          <p className={isDesktopOrLaptop ? "text-default-600" : "text-xs"}>
            {t("footer.tousdroitsreserves")}
          </p>
        </span>
      </footer>
    </div>
  );
}
