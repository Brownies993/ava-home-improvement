import React, { Component } from "react";
import Img from "../components/img/images.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Divider } from 'semantic-ui-react'

  const About = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <div>
    <Hero backgroundImage="/src/components/img/images.jpg"></Hero>
      </div>
        <div>
    <Container textAlign='center'>About Us</Container>
    <Container textAlign='justified'>
      <b>Justified</b>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
        augue. Curabitur ullamcorper ultricies nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
        augue. Curabitur ullamcorper ultricies nisi.
      </p>
    </Container>
  </div>
      </div>
    </Router>
  )

  // const AboutPage = () => (
  //   <div>
  //     <Hero backgroundImage="/src/components/img/images.jpg">
  //       <h1>About Us</h1>
  //       <h2>They're the Good Boys and Girls</h2>
  //     </Hero>
  //     <Container style={{ marginTop: 30 }}>
  //       <Row>
  //         <Col size="md-12">
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
  // );

  export default About;
