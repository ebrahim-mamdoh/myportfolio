import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Ebrahim Mamdouh. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
