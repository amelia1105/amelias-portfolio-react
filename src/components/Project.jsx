import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaGithub } from "react-icons/fa";


function Project() {
    const projects = [
        {
            title: 'Weather Dashboard',
            text: 'Description for project 2',
            imgSrc: './assets/weather-dashboard.png',
            liveLink: 'https://fun-weather-dashboard.onrender.com',
            githubLink: 'https://github.com/amelia1105/fun-weather-dashboard'
        },
        {
            title: 'Portfolio',
            text: 'Description for project 5',
            imgSrc: 'path/to/image5.jpg',
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/amelias-portfolio-react'
        },
        {
            title: 'Employee Tracker',
            text: 'Description for project 1',
            imgSrc: './assets/employee-tracker.png',
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/amelias-employee-tracker'
        },
        {
            title: 'Vehicle Builder',
            text: 'Description for project 3',
            imgSrc: './assets/vehicle-builder.png',
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/vehicle-builder'
        },
        {
            title: 'README Generator',
            text: 'Description for project 4',
            imgSrc: './assets/readme-generator.png',
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/README-generator'
        },
        {
            title: 'Placeholder project',
            text: 'This is a placeholder project. I will add a project here once I have more experience.',
            imgSrc: './assets/github-profile.png',
            liveLink: 'https://github.com/amelia1105',
            githubLink: 'https://github.com/amelia1105'
        }
    ];

    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {projects.map((project, idx) => (
                <Col key={idx}>
                    <Card>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <Card.Img variant="top" src={project.imgSrc} />
                        </a>
                        <Card.Body>
                            <Card.Title>
                                {project.title}
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <FaGithub style={{ color: 'black' }} />
                                </a>
                            </Card.Title>
                            <Card.Text>
                                {project.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
  
  export default Project;
