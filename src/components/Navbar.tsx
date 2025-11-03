import { Container, Menu, X } from "lucide-react"
import { useState } from "react"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center md:justify-between items-center p-4 relative">
      <a href="#"
      className="flex items-center font-bold text-3xl md:text-xl"
      >
        <Container className="mr-2" />
        LUC
        <span className="text-accent">DEV</span>
      </a>

      {/* Desktop Menu */}
      <ul
      className="hidden md:flex space-x-4">
          <li>
              <a href="#Home"
              className="btn btn-sm btn-ghost">
              Accueil
              </a>
          </li>

             <li>
              <a href="#About"
              className="btn btn-sm btn-ghost">
              À propos
              </a>
          </li>

             <li>
              <a href="#Experiences"
              className="btn btn-sm btn-ghost">
              Mes expériences
              </a>
          </li>

             <li>
              <a href="#Projects"
              className="btn btn-sm btn-ghost">
              Mes projets
              </a>
          </li>

      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden btn btn-sm btn-ghost"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 right-0 bg-base-100 shadow-lg md:hidden flex flex-col space-y-2 p-4 z-10">
          <li>
            <a href="#Home" className="btn btn-sm btn-ghost w-full justify-start" onClick={toggleMenu}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#About" className="btn btn-sm btn-ghost w-full justify-start" onClick={toggleMenu}>
              À propos
            </a>
          </li>
          <li>
            <a href="#Experiences" className="btn btn-sm btn-ghost w-full justify-start" onClick={toggleMenu}>
              Mes expériences
            </a>
          </li>
          <li>
            <a href="#Projects" className="btn btn-sm btn-ghost w-full justify-start" onClick={toggleMenu}>
              Mes projets
            </a>
          </li>
        </ul>
      )}

    </div>
  )
}

export default Navbar
