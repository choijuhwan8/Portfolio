import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import SpinningLogo from './SpinningLogo';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="md"
      className={`!w-full transition-all duration-300 ease-in-out ${scrolled ? 'bg-transparent py-1' : 'bg-transparent py-1'}`}
    >
      <Container fluid className="px-4 mx-4">
        <NavLink
          to="/projects"
          className={`text-white text-xl no-underline ${activeLink === 'projects' ? 'font-bold underline' : ''} transition-opacity duration-300`}
          onClick={() => onUpdateActiveLink('projects')}
        >
          Projects
        </NavLink>
        <NavLink
          to="/"
          className="d-flex align-items-center !no-underline"
          onClick={() => onUpdateActiveLink('home')}
        >
          <h1 className="text-white text-2xl mb-0 !no-underline">
            <SpinningLogo />
          </h1>
        </NavLink>
        <NavLink
          to="/info"
          className={`text-white text-xl no-underline ${activeLink === 'info' ? 'font-bold underline' : ''} transition-opacity duration-300`}
          onClick={() => onUpdateActiveLink('info')}
        >
          Info
        </NavLink>
      </Container>
    </Navbar>
  );
};
