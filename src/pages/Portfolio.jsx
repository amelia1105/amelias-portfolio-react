import Project from "../components/Project";
import Row from 'react-bootstrap/Row';

// Portfolio page component
// This component will render a list of projects using the Project component
export default function Portfolio() {
    const projects = [
        {
            title: 'Weather Dashboard',
            imgSrc: './assets/weather-dashboard.png',
            liveLink: 'https://fun-weather-dashboard.onrender.com',
            githubLink: 'https://github.com/amelia1105/fun-weather-dashboard'
        },
        {
            title: 'Portfolio',
            imgSrc: './assets/portfolio.png',
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/amelias-portfolio-react'
        },
        {
            title: 'Employee Tracker',
            imgSrc: './assets/employee-tracker.png',
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/amelias-employee-tracker'
        },
        {
            title: 'Vehicle Builder',
            imgSrc: './assets/vehicle-builder.png',
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/vehicle-builder'
        },
        {
            title: 'README Generator',
            imgSrc: './assets/readme-generator.png',
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/README-generator'
        },
        {
            title: 'Placeholder project',
            imgSrc: './assets/github-profile.png',
            liveLink: 'https://github.com/amelia1105',
            githubLink: 'https://github.com/amelia1105'
        }
    ];

    return (
        <div>
            <h1 style={{ color: '#D58DF6', fontSize: '3rem', fontFamily: 'Courier New, sans-serif'  }}>Portfolio</h1>
            <p>
                Here is some of my work. Clicking on the image will take you to the live site if the application has been deployed. Clicking on the GitHub icon will take you to the repository. For applications that have not been deployed, clicking an image will take you to Render. This is for grading purposes and will be changed once this project has been graded. For placeholder projects, clicking on the image will take you to my GitHub profile.
            </p>
            {/* Render a list of projects by looping through all the objects in projects*/}
            <Row xs={1} md={2} lg={3} className="g-4">
                {projects.map((project, idx) => (
                    <Project key={idx} {...project} />
                ))}
            </Row>
        </div>
    );
}
