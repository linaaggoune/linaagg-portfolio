import * as React from "react";
import { LanguageIcon } from "./icons"; // Assuming you've created the LanguageIcon
import i18n from "../i18n";

import { clsx } from "clsx"; // Ensure you have clsx installed

export interface LanguageSwitcherProps {
  className?: string;
  classNames?: {
    base?: string;
    wrapper?: string;
    dropdown?: string;
    dropdownItem?: string;
  };
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
  classNames,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  // Function to change the language
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    console.log(`Language changed to: ${language}`);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className={clsx("relative", className)}>
      {/* Language Icon */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          classNames?.base
        )}
      >
        <LanguageIcon
          className={clsx("text-default-500 text-2xl", classNames?.wrapper)}
        />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className={clsx(
            "absolute right-0 mt-2  border border-default-200 rounded-lg shadow-lg z-50",
            classNames?.dropdown
          )}
        >
          <button
            onClick={() => changeLanguage("en")}
            className={clsx(
              "block w-full px-4 py-2 text-left hover:bg-default-100",
              classNames?.dropdownItem
            )}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={clsx(
              "block w-full px-4 py-2 text-left hover:bg-default-100",
              classNames?.dropdownItem
            )}
          >
            Français
          </button>
          <button
            onClick={() => changeLanguage("ar")}
            className={clsx(
              "block w-full px-4 py-2 text-left hover:bg-default-100",
              classNames?.dropdownItem
            )}
          >
            العربية
          </button>
        </div>
      )}
    </div>
  );
};
