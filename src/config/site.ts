export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lyna Aggoun - Portfolio",
  description: "bienvenu_message",
  navItems: [
    { label: "navbar.Accueil", href: "/" },
    { label: "navbar.Àpropos", href: "/about" },
    { label: "navbar.Skills", href: "/skills" },
    { label: "navbar.Mes_projets", href: "/projects" },
    { label: "navbar.Contact", href: "/contact" },
  ],
  links: {
    github: "https://github.com/linaaggoune",
    linkedin: "https://www.linkedin.com/in/lina-aggoun-a03b4a183/",
  },
};
