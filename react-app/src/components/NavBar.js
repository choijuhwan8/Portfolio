import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router } from 'react-router-dom';

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
    <Router>
      <Navbar 
        expand="md" 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-black py-1' : 'bg-transparent py-1'}`}
      >
        <Container className="flex items-center justify-between">
          <Nav.Link
            href="#home"
            className={`text-white ${activeLink === 'home' ? 'font-bold underline' : ''} transition-opacity duration-300`}
            onClick={() => onUpdateActiveLink('home')}
          >
            Home
          </Nav.Link>
  		  <Navbar.Brand href="#home" className="!mr-0 !mb-0">
  		  	<h1 className='text-white text-2xl'>C</h1>
		  </Navbar.Brand>

          <Nav.Link
            href="#info"
            className={`text-white ${activeLink === 'info' ? 'font-bold underline' : ''} transition-opacity duration-300`}
            onClick={() => onUpdateActiveLink('info')}
          >
            Info
          </Nav.Link>
        </Container>
      </Navbar>
    </Router>
  );
};
