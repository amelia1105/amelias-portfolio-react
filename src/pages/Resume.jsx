import alvResume from '../assets/Alvarado-Resume.pdf';

// Resume component that links to a pdf of my resume located in the assets folder
export default function Resume() {
  return (
    <div>
      <h1 style={{ color: '#D58DF6', fontSize: '3rem', fontFamily: 'Courier New, sans-serif' }}>Resume</h1>
      <p>
        Download my resume here: {' '}
        <a href={alvResume} download>Amelia&apos;s Resume</a>
      </p>
      <h4>Programming Languages</h4>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
      </ul>
      <h4>Front-End Technologies</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
      </ul>
      <h4>Back-End Technologies</h4>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
      </ul>
      <h4>Databases</h4>
      <ul>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
      </ul>
      <h4>APIs</h4>
      <ul>
        <li>RESTful APIs</li>
        <li>GraphQL APIs</li>
      </ul>
      <h4>Testing</h4>
      <ul>
        <li>Cypress (component and end-to-end testing)</li>
      </ul>
    </div>
  );
}