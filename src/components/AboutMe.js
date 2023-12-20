import React from "react";

const AboutMe = () => {
  return (
    <div className="about_me">
      <div className="container">
        <h3>About me</h3>
        <img src={require("../img/about.png")} alt="About me" />

        <p>
          My name is <strong>Femi Adesola Oyinloye</strong>, I am the kind of
          person who does not shy away from any opportunity to do the right
          thing, even when doing so is far from easy. My passion also allows me
          to inspire others in their careers and every area of their lives.{" "}
          <br />
          I have worked at A-insinöörit Oy in the Nuclear waste management unit
          (NWM) and predecessors Saanio & Riekkola Oy and B+Tech Oy in Finland
          as a Researcher, Designer, and laboratory technician. These enabled me
          to have skills in project timelines, analytical thinking, designing,
          planning, and organizing, where I trained them on how to do some
          installation for about three of their projects.
          <br />
          I have written several standard operations procedures and was involved
          in several reports of projects and technical memos published by Posiva
          Oy for an Olkiluoto nuclear power plant. My personal goal is
          continuous learning, which means I am continuously adding to my
          expertise in technology and developing my programming skills even
          further. I intend to learn more day by day. <br />
          Furthermore, the world is focusing more on technology which prompts me
          to study full-stack development programs and to gain knowledge in
          Software development skills such as HTML/CSS, Javascript, C#, Asp.Net,
          UI/UX, ReactJS, Node JS, Express JS, GIT, Unit testing, and Quality
          assurance, Database: SQL & NoSQL (MySQL, MariaDB, MongoDB,
          PostgreSQL), CI/CD (Dockers, SonarQube, Jenkins), Project management
          tool [Trello), AWS (EC 2, CloudFormation, Code Commit, Code Pipeline,
          Code Deploy, Elastic Beanstalk, and Python programming in data
          analysis and Principles of Programming Graphical User Interfaces.{" "}
          <br />
          Some projects that I performed in my studies can be found on my
          <a
            href=" https://github.com/FemiAdesola"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub 1{" "}
          </a>
          and
          <a
            href="https://github.com/React21S"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub 2{" "}
          </a>
          , and previous work can be found
          <a
            href="https://femiadesola.github.io/coursework/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            here
          </a>
          . <br />
          In addition, I have been regarded as a careful and excellent employee
          with many gift cards in my previous jobs. In other words, I am ready
          to work in your organization to contribute my ideas and make positive
          changes. By giving me a chance, you will receive a hard-working,
          industrious, diligent, willing-to-obey instructions and motivated
          employee who is always cooperative. <br />I hope to meet you soon and
          I would be pleased to discuss myself at greater length.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
