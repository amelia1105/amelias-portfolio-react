import Project from "../components/Project";
import Row from 'react-bootstrap/Row';

import weatherDashboard from '../assets/imgs/weather-dashboard.png';
import graphQL from '../assets/imgs/graphql-search.png';
import portfolio from '../assets/imgs/portfolio.png';
import candidateSearch from '../assets/imgs/candidate-search.png';
import kanbanBoard from '../assets/imgs/kanban.png';
import munchies from '../assets/imgs/munchies.png';

// Portfolio page component
// This component will render a list of projects using the Project component
export default function Portfolio() {
    const projects = [
        {
            title: 'Portfolio',
            imgSrc: portfolio,
            liveLink: 'https://amelia-alvarado.netlify.app/',
            githubLink: 'https://github.com/amelia1105/amelias-portfolio-react',
            description: 'This is the website you are currently on! It was built using React and Bootstrap on the front end with Python and PostgreSQL on the back end. The website is responsive and works on mobile devices.'
        },
        {
            title: 'Munchies: Grocery Tracker',
            imgSrc: munchies,
            liveLink: 'https://munchies-0ii3.onrender.com',
            githubLink: 'https://github.com/AshB88/Munchies/tree/b3c272557c7f9cc2318e551f75e0fa66c0552b83',
            description: 'This was a group project I worked on with four other aspiring developers. It is a grocery tracker that allows users to keep track of their grocery lists, and uses a PostgreSQL database to store users and their lists. It demonstrates authentication and authorization.'
        },
        {
            title: 'Google Books Search',
            imgSrc: graphQL,
            liveLink: 'https://graphql-book-search-bucy.onrender.com',
            githubLink: 'https://github.com/amelia1105/graphql-book-search',
            description: 'I converted this fully functional React app to use GraphQL instead of REST APIs. It allows users to search for books using the Google Books API and then save them to a list stored in a MongoDB Atlas database. Apollo Client is used to manage the GraphQL queries and mutations.'
        },
        {
            title: 'Krazy Kanban Board',
            imgSrc: kanbanBoard,
            liveLink: 'https://secure-kanban.onrender.com/',
            githubLink: 'https://github.com/amelia1105/secure-kanban',
            description: 'This React application allows users to create cards on a Kanban board and move the cards between columns. A PostgreSQL database is used to store users and each of their boards. The primary purpose of this app was to demonstrate authentication and authorization with JWTs.'
        },
        {
            title: 'GitHub Candidate Search',
            imgSrc: candidateSearch,
            liveLink: 'https://swipe-candidate-search.onrender.com',
            githubLink: 'https://github.com/amelia1105/swipe-candidate-search',
            description: 'This React application presents potential employers with a GitHub user, allows them to reject or save the candidate, and then presents them with a new GitHub user. Saved candidates are on a "Potential Candidates" list. This app uses the GitHub Personal Access Token to access to GitHub accounts. Saved users are stored in local storage.'
        },
        {
            title: 'Weather Dashboard',
            imgSrc: weatherDashboard,
            liveLink: 'https://fun-weather-dashboard.onrender.com',
            githubLink: 'https://github.com/amelia1105/fun-weather-dashboard',
            description: 'This was my first deployed website! It is a weather dashboard that allows users to search for a city and see the current weather and that city\'s forecast. It uses the OpenWeather API to get the weather data and stores the last searched cities in local storage. This app was built using HTML, CSS, and TypeScript.'
        }
    ];

    return (
        <div>
            <h1 style={{ color: '#D58DF6', fontSize: '3rem', fontFamily: 'Courier New, sans-serif'  }}>Portfolio</h1>
            <h4>Here&apos;s some of my work!</h4>
            <p>
                Click on the image to visit the live site. Unfortunately, due to budget limitations, some projects may not have an active database, which could affect the website&apos;s functionality.
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
