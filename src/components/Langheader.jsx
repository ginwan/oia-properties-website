"use client";
import { CaretDownIcon } from "@phosphor-icons/react";
import { useState } from "react";

const Langheader = () => {
  const [selected, setSelected] = useState("en");
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", flag: "https://flagcdn.com/gb.svg" },
    { code: "ar", label: "Arabic", flag: "https://flagcdn.com/ae.svg" },
  ];

  const toggleOpen = () => setOpen(!open);
  const selectLanguage = (code) => {
    setSelected(code);
    setOpen(false);
  };

  return (
    <header className="bg-black shadow lg:flex hidden">
      <nav
        aria-label="Global"
        className="mx-auto flex w-full max-w-7xl items-center justify-end p-2 lg:px-8"
      >
        <div className="relative inline-block text-left">
          <button
            onClick={toggleOpen}
            className="inline-flex items-center gap-2 text-white bg-black border border-transparent py-2 rounded"
          >
            <img
              src={languages.find((l) => l.code === selected)?.flag}
              alt="Flag"
              className="w-5 h-4"
            />
            <span>{languages.find((l) => l.code === selected)?.label}</span>
            <CaretDownIcon size={14} weight="fill" aria-hidden="true" className="text-yellow-500" />
          </button>

          {open && (
            <ul className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-10">
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectLanguage(lang.code)}
                >
                  <img src={lang.flag} alt={`${lang.label} flag`} className="w-5 h-4" />
                  <span className="text-sm text-black">{lang.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Langheader;
