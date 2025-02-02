// Resume component that links to a pdf of my resume located in the assets folder
export default function Resume() {
  return (
    <div>
      <h1 style={{ color: '#D58DF6', fontSize: '3rem', fontFamily: 'Courier New, sans-serif'  }}>Resume</h1>
      <p>
        Download my resume here: {' '}
        <a href="./assets/Alvarado-Resume.pdf" download>Amelia&apos;s Resume</a>
      </p>
      <h3>Front End Experience</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <h3>Back End Experience</h3>
      <ul>
        <li>Node.js</li>
        <li>APIs</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  );
}
