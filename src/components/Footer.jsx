import Nav from 'react-bootstrap/Nav';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

// Footer component with links to StackOverflow, LinkedIn, and GitHub
function Footer() {
  return (
    <>
      <Nav
        className="footer justify-content-center"
        activeKey="/home"
        onSelect={(selectedKey) => window.open(selectedKey, '_blank')}
      >
        <Nav.Item>
          <Nav.Link eventKey="https://stackoverflow.com/users/29439479/amelia-bellanger-alvarado">
            <FaStackOverflow style={{ color: '#D58DF6', fontSize: '1.5em' }} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="https://www.linkedin.com/in/amelia-alvarado-691507297/">
            <FaLinkedin style={{ color: '#D58DF6', fontSize: '1.5em' }} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="https://github.com/amelia1105">
            <FaGithub style={{ color: '#D58DF6', fontSize: '1.5em' }} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* A copyright statement is included here */}
      <p style={{ textAlign: 'center', fontSize: '0.5em', color: '#9887AB' }}>
        &copy; 2025 Amelia Alvarado
      </p>
    </>
  );
}

export default Footer;