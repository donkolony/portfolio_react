import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  isHeroStyle?: boolean;
}

export const ThemeToggle = ({ isHeroStyle = false }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-full hover:scale-110 transition-all duration-300 ${
        isHeroStyle ? "text-white hover:bg-white/10" : ""
      }`}
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 absolute transition-all duration-500 ${isDark ? "scale-0 rotate-180 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
      <Moon className={`h-5 w-5 absolute transition-all duration-500 ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-180 opacity-0"}`} />
    </Button>
  );
};
