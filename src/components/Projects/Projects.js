import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bill With Us"
              description="This project is made for checking eligible patients or manage doctors in all over USA"
              languages="ReactJs, Nodejs, SQL"
              featureTitle="Features"
              features = "Login, sign up, logout, CRUD, Third party API integration, JWT authentication, Dynamic Role Management, Dynamic Tabs(questions and input types) ,Dynamic Data-tables, Impersonate function."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="RainBit Explorer"
              description="This project was made for checking crypto coins addresses, and tokens."
              languages=" ReactJs, Nodejs, Mongo DB"
              featureTitle="Features"
              features ="CRUD, third party API Integration, Multi routes using ,multi layout"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Crome"
              description="This project is in making for crypto coins in which any person can make a request to make a coin for themselves. Currently working on this one."
              languages="NextJs, Nodejs, SQL"
              featureTitle="Features"
              features ="Google Login, logout, CRUD,  JWT authentication, Dynamic Tabs, Payment gateway."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="RGB Addressable LED Controller"
              description="A mobile Application used for controlling the LED patterns and colors. Developed as a part of my educational Program."
              languages="Flutter(Dart), Python, Arduino"
              featureTitle="Usage"
              features ="This project is further used for home decorations, parties, etc. Implement basics of flutter for designing the UI of the Application and Arduino for connection of software to the hardware devices."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="D & D Financial Advisors ( Website for financial advisors)"
              description="Designed this for D & D Financial Company which manages the finance."
              languages="WordPress"
              featureTitle="website"
              features ="https://ddfinancialadvisors.in/"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
