import React from "react";
import Heading from "../components/Heading";
import Card from "./Card";

function Projects() {
  return (
    <div className="mt-7">
      <Heading>Projects</Heading>
      <Card
        projectName="NutriScan: Advanced Nutrition Tracking Application"
        techStack="Next.js 13, MongoDB, React, TypeScript, Tailwind CSS, NextAuth.js, @ericblade/quagga2, Recharts"
        description={
          <ul className="list-disc list-inside">
            <li>
              Built a responsive nutrition tracking app enabling users to log
              and track daily nutrient intake.
            </li>
            <li>
              Integrated <strong>@ericblade/quagga2</strong> for barcode
              scanning, ensuring accurate product identification.
            </li>
            <li>
              Utilized the <strong>OpenFoodFacts API</strong> to fetch real-time
              product details like ingredients and nutritional facts.
            </li>
            <li>
              Designed with <strong>Next.js</strong> and{" "}
              <strong>Tailwind CSS</strong> for an intuitive, mobile-first UI
              with Responsive Application for Mobile and Other Devices.
            </li>
            <li>
              Implemented secure user authentication with{" "}
              <strong>NextAuth.js</strong> and data storage using{" "}
              <strong>MongoDB</strong>.
            </li>
            <li>
              Added data visualization with <strong>Recharts</strong> for daily
              nutrient trends and consumption patterns.
            </li>
            <li>
              Developed error-handling mechanisms and alternative input options
              like manual barcode entry.
            </li>
            <li>
              Focused on accessibility and performance optimization for an
              enhanced user experience.
            </li>
          </ul>
        }
        codeLink="https://github.com/kishan9535/Nutri-Scanner"
        liveSiteLink="https://nutriscanner.vercel.app/"
      />
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
