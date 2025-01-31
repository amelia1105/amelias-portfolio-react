import Project from "../components/Project";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
          Here is a some of my work. Clicking on the image will take you to the live site if the application has been deployed. Clicking on the GitHub icon will take you to the repository. For applications that have not been deployed, clicking an image will take you to Render. This is for grading purposes and will be changed once this project has been graded. For placeholder projects, clicking on the image will take you to my GitHub profile.
      </p>
      <Project />
    </div>
  );
}
