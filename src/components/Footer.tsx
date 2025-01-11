import { Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container mx-auto">
        <div className="text-center text-sm text-muted-foreground mb-4">
          <p>© 2024 Orchida AI Agency. All Rights Reserved.</p>
        </div>
        
        <div className="flex justify-center items-center gap-6 mt-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Visit our LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Visit our Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Visit our TikTok"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};