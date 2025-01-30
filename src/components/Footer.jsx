import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <Nav
      className="footer justify-content-center"
      activeKey="/home"
      onSelect={(selectedKey) => window.open(selectedKey, '_blank')}
      style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#573842' }}
    >
      <Nav.Item>
        <Nav.Link eventKey="https://stackoverflow.com/users/29439479/amelia-bellanger-alvarado">
          <img src="./assets/stack-overflow-logo.png" alt="Stack Overflow logo" style={{ width: '30px' }} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="https://www.linkedin.com/in/amelia-alvarado-691507297/">
          <img src="./assets/linkedin-logo.png" alt="LinkedIn logo" style={{ width: '30px' }} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="https://github.com/amelia1105">
          <img src="./assets/github-logo.png" alt="GitHub logo" style={{ width: '30px' }} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Footer;