import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import food from "../assets/img/food.svg";
import jokes from "../assets/img/jokes.svg";
import clock from "../assets/img/clock.svg";
import Spotify from "../assets/img/spotify.svg";
import TTT from "../assets/img/TTT.svg";
import paytm from "../assets/img/paytm.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Food Ordering App",
      description: "Frontend",
      imgUrl: food,
      level: "Intermediate"      
    },
    {
      title: "Spotify Clone",
      description: "Design",
      imgUrl: Spotify,
      level: "Beginner"
    },
    {
      title: "Jokes Generator",
      description: "API & Backend Handling",
      imgUrl: jokes,
      level: "Beginner"
    },
    {
      title: "Analog Clock",
      description: "Animation & Design",
      imgUrl: clock,
      level: "Beginner"
    },
    {
      title: "Tic Tac Toe",
      description: "General Practice",
      imgUrl:TTT,
      level: "Beginner"
    },
    {
      title: "Paytm Clone",
      description: "In Process",
      imgUrl: paytm,
      level: "Advance"
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: "",
      level: "Intermediate"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Basic to Advance level projects. Some build as hobby some for practice and some to solve problems</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Beginner</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Intermediate</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Advance</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects
                          .filter(project => project.level === "Beginner")
                          .map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects
                          .filter(project => project.level === "Intermediate")
                          .map((project,index) =>{
                            return(
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects
                          .filter(projects => projects.level === "Advance")
                          .map((projects, index)=>{
                            return(
                              <ProjectCard
                              key={index}
                              {...projects}
                              />
                            )
                          })
                        }
                      </Row>
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
