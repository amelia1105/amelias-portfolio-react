import Project from "../components/Project";
import Row from 'react-bootstrap/Row';

import weatherDashboard from '../assets/imgs/weather-dashboard.png';
import portfolio from '../assets/imgs/portfolio.png';
import employeeTracker from '../assets/imgs/employee-tracker.png';
import vehicleBuilder from '../assets/imgs/vehicle-builder.png';
import readmeGenerator from '../assets/imgs/readme-generator.png';
import githubProfile from '../assets/imgs/github-profile.png';

// Portfolio page component
// This component will render a list of projects using the Project component
export default function Portfolio() {
    const projects = [
        {
            title: 'Weather Dashboard',
            imgSrc: weatherDashboard,
            liveLink: 'https://fun-weather-dashboard.onrender.com',
            githubLink: 'https://github.com/amelia1105/fun-weather-dashboard'
        },
        {
            title: 'Portfolio',
            imgSrc: portfolio,
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/amelias-portfolio-react'
        },
        {
            title: 'Employee Tracker',
            imgSrc: employeeTracker,
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/amelias-employee-tracker'
        },
        {
            title: 'Vehicle Builder',
            imgSrc: vehicleBuilder,
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/vehicle-builder'
        },
        {
            title: 'README Generator',
            imgSrc: readmeGenerator,
            liveLink: 'https://render.com/',
            githubLink: 'https://github.com/amelia1105/README-generator'
        },
        {
            title: 'Placeholder project',
            imgSrc: githubProfile,
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
