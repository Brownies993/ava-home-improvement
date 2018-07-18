import React from "react";
// import logo from "../components/logo/logo.jpg";
import Topbar from "../components/Topbar/Topbar";
import "./page.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Divider, Header} from 'semantic-ui-react';

  const Home = () => (
    <Router>
        <div>
        <div>
    <Topbar components={Topbar}></Topbar>
    <Container textAlign="center">
      <Divider />
      <Header text-align="center">
      <h2>
      Mission Statement 
      </h2>
      </Header>
      <p>
    To provide the best possible service to our costumer! We are fluent in both spainsh and english! 
      </p>

      <Header text-align="center">
      <h2>
     Time Schedule 
      </h2>
      </Header>
      <p>
    Weekdays & Saturdays: 8am - 8pm
      </p>

     <Header text-align="center">
      <h2>
    Location 
      </h2>
      </Header>
      <p>
   Our Office is located in South Plainfield, NJ. But we work throughout New Jersey. For more inforamtion please call 
   the number bleow! 
      </p>
      
    </Container>
    
  </div>
  </div>
    </Router>
  )

  export default Home;
