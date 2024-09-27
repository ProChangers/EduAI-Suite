import { Container, Row, Col, Tab } from "react-bootstrap";
import BasicExample, { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Projects = () => {

  const projects = [
    {
      title: "AI Assignment Help",
      description: "Tired of Writeups from college? Our Tool uses AI to figure out the answers and writes it to a PDF in YOUR Handwriting ;) ",
      imgUrl: projImg1,
    },
    {
      title: "YouTube Summarizer and Chat",
      description: "Video Lectures too long? Use our tool to summarize the entire Video and Ask Questions to AI for more learning",
      imgUrl: projImg2,
    },
    {
      title: "Documents/Notes Summarizer & QnA",
      description: "Summarize notes instantly for last minute revision",
      imgUrl: projImg3,
    },
    {
      title: "AI Quiz Generated",
      description: "Use AI to create Quizzes on any topic",
      imgUrl: projImg1,
    },
    
  ];

  return (
    <section className="project"  id="projects">
      
    

      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <h2>EduAI Suite - One Platform, for All</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content  >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <BasicExample/>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
