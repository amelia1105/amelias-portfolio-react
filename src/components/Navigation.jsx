import { useState } from 'react';
import { BsList } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [collapsed, setCollapsed] = useState(true); // Control collapse state manually
  const currentPage = useLocation().pathname;

  // Manually collapse the navbar when a link is clicked
  const handleSelect = () => {
    setCollapsed(true);
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        {/* Custom Hamburger Icon */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setCollapsed(!collapsed)} // Manually toggle collapse
        >
          <BsList color="white" size="24" />
        </Navbar.Toggle>
        {/* Navbar collapse */}
        <Navbar.Collapse id="responsive-navbar-nav" in={!collapsed}>
          <Nav className="ms-auto">
            {['/', '/Portfolio', '/Resume', '/Contact'].map((path, index) => {
              const labels = ['About Me', 'Portfolio', 'Resume', 'Contact'];
              return (
                <Nav.Link
                  as={Link}
                  to={path}
                  key={index}
                  onClick={handleSelect} // Collapse on link click
                  className={`${currentPage === path ? 'active' : ''} mx-2`}
                  style={{
                    color: currentPage === path ? '#D58DF6' : 'white',
                    fontWeight: currentPage === path ? 'bold' : 'normal',
                  }}
                >
                  {labels[index]}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;