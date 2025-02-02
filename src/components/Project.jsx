import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaGithub } from "react-icons/fa";

// Project component that displays a project card with a title, image, and links to the live site and GitHub repository
// This card can be reused for each project in the Portfolio component
function Project({ title, imgSrc, liveLink, githubLink }) {
    const cardStyle = {
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    const imgStyle = {
        height: '250px',
        objectFit: 'cover'
    };

    return (
        <Col>
            <Card style={cardStyle}>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" src={imgSrc} style={imgStyle} />
                </a>
                <Card.Body>
                    <Card.Title>
                        {title}
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub style={{ color: 'black', marginLeft: '10px' }} />
                        </a>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Project;
