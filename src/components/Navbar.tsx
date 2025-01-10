import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Moon, Sun } from "lucide-react";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Logo />
            <span className="font-montserrat font-bold text-xl bg-gradient-to-r from-primary to-orchid-500 bg-clip-text text-transparent">
              Orchida
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="ml-auto"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};