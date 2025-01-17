export const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
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
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-orchid-400 via-orchid-500 to-orchid-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};