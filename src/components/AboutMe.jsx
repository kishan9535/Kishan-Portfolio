import React from "react";
import Heading from "./Heading";

function AboutMe() {
  return (
    <>
      <div className="mt-5">
        <Heading textsize="text-l">About Me</Heading>
        <p className="mt-2 lg:mr-20 md:mr-0 mr-0 text-gray-800 dark:text-gray-200">
          I am a{" "}
          <span className="font-bold text-green-500">passionate software developer</span>{" "}
          with a deep passion for{" "}
          <span className="font-bold text-green-500">programming</span> and{" "}
          <span className="font-bold text-green-500">technology</span>. My
          journey has led me to actively engage in{" "}
          <span className="font-bold text-green-500">problem-solving</span> on
          platforms like{" "}
          <span className="font-bold text-green-500">LeetCode</span>,{" "}
          <span className="font-bold text-green-500">Codeforces</span>, and{" "}
          <span className="font-bold text-green-500">GFG</span>, where I've
          solved numerous{" "}
          <span className="font-bold text-green-500">DSA problems</span> and
          participated in{" "}
          <span className="font-bold text-green-500">
            competitive programming contests
          </span>
          . I am also exploring emerging domains such as{" "}
          <span className="font-bold text-green-500">machine learning</span> and{" "}
          <span className="font-bold text-green-500">
            mobile app development
          </span>
          , while expanding my expertise in{" "}
          <span className="font-bold text-green-500">web development</span>{" "}
          through hands-on projects. Additionally, I have experience with{" "}
          <span className="font-bold text-green-500">
            full-stack development
          </span>
          , creating responsive and dynamic applications, and I continually
          strive to upskill in modern technologies to deliver impactful and
          innovative solutions.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
