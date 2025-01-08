import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="font-montserrat font-bold text-2xl text-primary">Orchida</span>
        </a>
        <div className="flex items-center space-x-6">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button className="bg-primary hover:bg-primary-dark">Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};