import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import gradPhoto from '../assets/imgs/grad-photo.jpg';

// About component with a photo and a brief description of the developer
export default function About() {
  return (
    <div>
      <Container>
        <Row className="p-2">
          <Col xs={12} sm={12} md={6} lg={5} className="d-flex justify-content-center mb-3 mb-md-0">
            <Image src={gradPhoto} alt="picture of developer" roundedCircle width={300} height={300} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={7}>
            <h1 style={{ color: '#D58DF6', fontSize: '3rem', fontFamily: 'Courier New, sans-serif' }}>About Me</h1>
            <p>
              Hello! My name is Amelia Alvarado. I live in North Carolina and have a BS in Environmental Science and a MS in Data Analytics. 
              I am currently pursuing a certification in the Rutgers University Coding Bootcamp. I have experience with HTML, CSS, JavaScript, Node.js, Express.js, 
              PostgreSQL, React, and more. I enjoy working with data and hope to use my skills in a development setting. I am excited to help you build your next project.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
