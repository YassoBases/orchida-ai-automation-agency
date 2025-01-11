import { Logo } from "@/components/Logo";

export const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // 4rem or 64px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-orchid-700/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Logo />
            <span className="font-montserrat font-bold text-xl bg-gradient-to-r from-primary to-orchid-500 bg-clip-text text-transparent">
              Orchida
            </span>
          </div>
          <div className="flex-1 flex items-center justify-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-orchid-100 hover:text-orchid-400 transition-colors bg-gradient-to-r from-primary via-orchid-500 to-orchid-400 bg-clip-text text-transparent"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-orchid-100 hover:text-orchid-400 transition-colors bg-gradient-to-r from-primary via-orchid-500 to-orchid-400 bg-clip-text text-transparent"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-orchid-100 hover:text-orchid-400 transition-colors bg-gradient-to-r from-primary via-orchid-500 to-orchid-400 bg-clip-text text-transparent"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-orchid-100 hover:text-orchid-400 transition-colors bg-gradient-to-r from-primary via-orchid-500 to-orchid-400 bg-clip-text text-transparent"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};