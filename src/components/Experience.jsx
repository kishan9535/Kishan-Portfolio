import React from "react";
import Heading from "../components/Heading";
import Card from "./Card";

const Experience = () => {
  return (
    <div className="mt-7">
      <Heading>Experience</Heading>
      <div className="flex flex-col justify-center items-center gap-6">
        <Card
          projectName="Tsalla Aerospace"
          position="Software Development Engineer I (May 24 – Present)"
          description={
            <ul className="list-disc list-inside">
              <li>Built and optimized an advanced interface for drones and UAVs using QML within QGroundControl (QGC) software, enhancing mission planning and control efficiency.</li>
              <li>Designed real-time telemetry dashboards and mission control panels, improving operator situational awareness.</li>
              <li>Worked extensively with Autonomous Technologies (AT) to integrate UAV control features and flight automation.</li>
              <li>Developed and deployed the official Tsalla Aerospace website using Next.js and React, ensuring high performance and responsive design.</li>
              <li>Created an additional company website to support internal and external operations, streamlining communication and data access.</li>
            </ul>
          }
        />
        <Card
          projectName="Center of Image Processing, Ramaiah Institute of Technology"
          position="Student Intern (March 24 – May 24)"
          description={
            <ul className="list-disc list-inside">
              <li>Developed and implemented ML/DL models, increasing classification accuracy of utterances in IR and RGB images by 15%, enhancing the precision of automated image analysis systems.</li>
              <li>Annotated a large dataset of IR images to improve model training, leading to a significant 78% increase in accuracy.</li>
              <li>Integrated optimized models into the existing pipeline, reducing false classifications by 20% and improving overall system performance.</li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Experience;
