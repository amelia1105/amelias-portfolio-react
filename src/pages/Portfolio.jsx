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
            liveLink: 'https://amelia-alvarado.netlify.app/',
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
            <h4>Here&apos;s some of my work!</h4>
            <p>
                Click on the image to visit the live site if the application is deployed. Unfortunately, due to budget limitations, some projects may not have an active database, which could affect the website&apos;s functionality.
                If you&apos;d like to see any of the websites with a functioning database, just reach out, and I&apos;ll be happy to reactivate the database for you! You can also check out the project&apos;s code by clicking on the GitHub icon next to each project&apos;s title.
            </p>
            <p>
                A quick note: some projects may still show my previous name, Amelia Bellanger. I changed my name to Amelia Alvarado after getting married during my bootcamp program. I also created a new email address to reflect my name change, but some of my projects will show my old email address, aebellanger@yahoo.com, in the README.
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
