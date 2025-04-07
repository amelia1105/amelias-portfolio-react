import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';

function Project({ title, imgSrc, liveLink, githubLink, description }) {
    const [isCardHovered, setIsCardHovered] = useState(false);
    const [isTitleHovered, setIsTitleHovered] = useState(false);
    const [isIconHovered, setIsIconHovered] = useState(false);

    const cardStyle = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease',
        transform: isCardHovered ? 'scale(1.05)' : 'scale(1)',
        overflow: 'hidden',
        backgroundColor: '#ffffff'
    };

    const imgStyle = {
        height: '250px',
        objectFit: 'cover'
    };

    const titleStyle = {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: isTitleHovered ? '#007bff' : '#333', // Change color on hover
        display: 'flex',
        alignItems: 'center',
        transition: 'color 0.3s ease',
        textDecoration: 'none'
    };

    const githubIconStyle = {
        color: isIconHovered ? '#007bff' : '#333',
        fontSize: '1.2rem',
        marginLeft: '10px',
        transition: 'color 0.3s ease',
        cursor: 'pointer'
    };

    const descriptionStyle = {
        fontSize: '0.95rem',
        color: '#555',
        lineHeight: '1.5'
    };

    const titleContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };

    return (
        <Col>
            <Card
                style={cardStyle}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
            >
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" src={imgSrc} style={imgStyle} />
                </a>
                <Card.Body>
                    <div style={titleContainerStyle}>
                        <Card.Title
                            style={titleStyle}
                            onMouseEnter={() => setIsTitleHovered(true)}
                            onMouseLeave={() => setIsTitleHovered(false)}
                        >
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                {title}
                            </a>
                        </Card.Title>
                        <div
                            onMouseEnter={() => setIsIconHovered(true)}
                            onMouseLeave={() => setIsIconHovered(false)}
                        >
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub style={githubIconStyle} />
                            </a>
                        </div>
                    </div>
                    {description && (
                        <Card.Text style={descriptionStyle}>
                            {description}
                        </Card.Text>
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Project;
