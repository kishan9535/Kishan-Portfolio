import React from "react";
import Heading from "../components/Heading";
import Card from "./Card";

function Projects() {
  return (
    <div className="mt-7">
      <Heading>Projects</Heading>
      <Card
        projectName="News App"
        techStack="React.js, GNews API, CSS, React Icons"
        description={
          <ul className="list-disc list-inside">
            <li>
              Developed a responsive and dynamic News Application to provide
              users with the latest news updates.
            </li>
            <li>
              Integrated the <strong>GNews API</strong> to fetch real-time news
              categorized into sections such as Technology, Sports, and
              Business.
            </li>
            <li>
              Built an intuitive and interactive UI with{" "}
              <strong>React.js</strong>, featuring a dark theme for better user
              experience.
            </li>
            <li>
              Implemented a <strong>search bar</strong> to find news articles
              quickly and a category filter for browsing specific topics.
            </li>
            <li>
              Designed the app to be fully responsive and mobile-friendly,
              ensuring seamless functionality across all devices.
            </li>
            <li>
              Used <strong>React Icons</strong> for visually appealing UI
              elements and placeholders for missing images.
            </li>
          </ul>
        }
        codeLink="https://github.com/kishan9535/news-app"
        liveSiteLink="https://newss24.vercel.app/"
      />
      <Card
        projectName="Grocery Store Management"
        techStack="JavaScript, Node.js, Express.js, MongoDB"
        description={
          <ul className="list-disc list-inside">
            <li>
              Created a web application for small grocery stores to keep track
              of items they sell and buy daily.
            </li>
            <li>
              Implemented authentication and authorization using Passport.js and
              connected the website to MongoDB.
            </li>
            <li>
              Executed a search bar to find grocery items and a bill calculator
              using JavaScript.
            </li>
          </ul>
        }
        codeLink="https://github.com/kishan9535"
      />
      <Card
        projectName="Weather Checker"
        techStack="HTML5, CSS3, JavaScript, Chart.js"
        description={
          <ul className="list-disc list-inside">
            <li>
              Created an interactive website showcasing various campgrounds,
              allowing authorized users to add, edit, or delete entries using
              NodeJS, Express, and APIs for the backend
            </li>
            <li>
              Developed the frontend using HTML and CSS, ensuring a
              user-friendly interface for seamless interaction.
            </li>
            <li>
              Executed a search bar to find Weather Locations and Display the
              Weather using JavaScript.
            </li>
          </ul>
        }
        codeLink="https://github.com/kishan9535/Weather-API-Project"
        liveSiteLink="https://nammaweather.netlify.app/#"
      />
    </div>
  );
}

export default Projects;
