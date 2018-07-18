import React from "react";
// import Img from "../components/img/jeffrey-hamilton-571430-unsplash.jpg";
// import footer from "../components/footer";
import Hero from "../components/Hero";
import home from "./home";
import Row from "../components/Row";
import Col from "../components/col";
import "./page.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Divider } from 'semantic-ui-react';

const About = () => (
  <Router>
    <div>
      <div>
        <ul>
          <Link to="/" conponent={home}></Link>
        </ul>
      </div>
      <Container>
        <Container textAlign='center'>
          <Divider />
          <div>
            <Hero backgroundImage="./assets/img/jeffrey-hamilton-571430-unsplash.jpg">
              <h2 className="us">About Us!</h2>
            </Hero>
            <Container style={{ marginTop: 30 }}>
              <Row>
                <Col size="md-12">
                  <h1> Victor Aucapina </h1>
                </Col>
              </Row>
              <Row>
                <Col size="md-12">
                  <p>
                   Work in the construction industry for 20 years. To see our latest work click on the gallery tab to see.
                   We mostly do home remodling, additioms, sheetrack, professional painting, decks, kitchen, and bathroom!
                   This is a family own business run by Victor and Alba Aucapina as well with the help with their son 
                   Anthony Hernandez who help bulit this website.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Container>
    </div>
  </Router>
)

/* // const AboutPage = () => (
//   <div>
//     <Hero backgroundImage="/src/components/img/images.jpg">
//       <h1>About Us</h1>
//       <h2>They're the Good Boys and Girls</h2>
//     </Hero>
//     <Container style={{ marginTop: 30 }}>
//       <Row>
//         <Col size="md- 12">
//           <h1>Welcome To Pupster!</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col size="md-12">
//           <p>
//           vjbfbv;oaifnvofpo ndfaj ndf ndfnbvjdfnvo fponfd j
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   </div>
// ); */

export default About;