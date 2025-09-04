import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDark(saved);
    if (saved) document.documentElement.classList.add("dark");
  }, []);

  const toggle = () => {
    setDark(!dark);
    localStorage.setItem("darkMode", !dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded border border-gray-500 text-gray-700 dark:text-gray-200 dark:border-gray-300"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
