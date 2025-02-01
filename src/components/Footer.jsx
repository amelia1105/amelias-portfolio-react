import Nav from 'react-bootstrap/Nav';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";


function Footer() {
  return (
    <Nav
      className="footer justify-content-center"
      activeKey="/home"
      onSelect={(selectedKey) => window.open(selectedKey, '_blank')}
      style={{ backgroundColor: '#573842' }}
    >
      <Nav.Item>
        <Nav.Link eventKey="https://stackoverflow.com/users/29439479/amelia-bellanger-alvarado">
          <FaStackOverflow style={{ color: 'black', fontSize: '2em' }}/>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="https://www.linkedin.com/in/amelia-alvarado-691507297/">
          <FaLinkedin style={{ color: 'black', fontSize: '2em' }}/>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="https://github.com/amelia1105">
          <FaGithub style={{ color: 'black', fontSize: '2em' }} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;