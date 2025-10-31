import { Container, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center p-10 bg-base-200 text-base-content">
      <aside>
        <Container className="w-10 h-10" />
        <p className="font-bold">
          LUC
          <span className="text-accent">DEV</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-6 h-6 text-current hover:text-accent transition-colors" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-6 h-6 text-current hover:text-accent transition-colors" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 text-current hover:text-accent transition-colors" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

