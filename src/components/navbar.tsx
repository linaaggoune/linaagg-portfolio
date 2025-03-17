import { Link } from "@heroui/link";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { FaLinkedin } from "react-icons/fa";
import { siteConfig } from "../config/site";
import { ThemeSwitch } from "../components/theme-switch";
import { GithubIcon } from "../components/icons";
import { useMediaQueryPersonnalise } from "../context/mediaQueryContext.tsx";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher.tsx";

export const Navbar = () => {
  const { isTabletOrMobile } = useMediaQueryPersonnalise(); // Détecte mobile/tablette
  const { t } = useTranslation();

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/* Menu Desktop */}
      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="start"
      >
        <div className="flex gap-4 ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "secondary", underline: "hover" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {t(item.label)}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* Icônes réseaux sociaux + Theme Switch */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.linkedin} title="Linkedin">
            <FaLinkedin className="text-default-500 text-2xl" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500 text-2xl" />
          </Link>

          <ThemeSwitch />
          <LanguageSwitcher />
        </NavbarItem>
      </NavbarContent>

      {/* Menu Burger pour Mobile/Tablette */}
      {isTabletOrMobile && (
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link isExternal href={siteConfig.links.linkedin} title="Linkedin">
            <FaLinkedin className="text-default-500 text-2xl" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <LanguageSwitcher />
          <NavbarMenuToggle aria-label="Toggle navigation" />
        </NavbarContent>
      )}

      {/* Contenu du Menu Burger (géré automatiquement par NextUI) */}
      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: "secondary" }),
                "block px-4 py-2"
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
