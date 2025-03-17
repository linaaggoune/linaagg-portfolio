import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

// Typage des constantes
interface MediaQueryType {
  isDesktopOrLaptop: boolean;
  isTabletOrMobile: boolean;
}

// Créer le context avec une valeur initiale
export const MediaQueryContext = createContext<MediaQueryType>({
  isDesktopOrLaptop: true,
  isTabletOrMobile: false,
});

interface MediaQueryProviderProps {
  children: ReactNode;
}

export const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({
  children,
}) => {
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(
    () => window.innerWidth >= 1024,
  );
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(
    () => window.innerWidth < 1024,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopOrLaptop(window.innerWidth >= 1024);
      setIsTabletOrMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Exécuter une première fois pour bien initialiser les valeurs
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MediaQueryContext.Provider value={{ isDesktopOrLaptop, isTabletOrMobile }}>
      {children}
    </MediaQueryContext.Provider>
  );
};

// Hook personnalisé pour utiliser le context
export const useMediaQueryPersonnalise = () => {
  const context = useContext(MediaQueryContext);

  if (context === undefined) {
    throw new Error(
      "useMediaQueryPersonnalise must be used within a MediaQueryProvider",
    );
  }

  return context;
};
