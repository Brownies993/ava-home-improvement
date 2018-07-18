import React, { Component, Nav, NavItem } from "react";
import Home from "./Pages/home"
// import logo from "./components/logo/logo.jpg";
import Navbar from "./components/navbar";
// import reactstrap from 'reactstrap';
import About from "./Pages/about";
import Gallery from "./Pages/gallery";
import Wrapper from "./components/Wrapper";
import Footer from "./components/footer";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// const App  = () => (
//   <Router>
//     <div>
//       <Navbar />
//       <Wrapper>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//       </Wrapper>
//       <Footer />
//     </div>
//   </Router>
// );

class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">React-Bootstrap</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <Wrapper>
                <ul className="nav navbar-nav">
                  <NavItem eventKey={1} href="/">
                    Home
    </NavItem>
                  <NavItem eventKey={2} href="/about">
                    About
    </NavItem>

    <NavItem eventKey={2} href="/img">
                    Gallery
    </NavItem>

                </ul>
              </Wrapper>
            </Nav>
          </Navbar>


          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
          </Switch>

          <Footer />
        </div>

      </Router>
    );
  }
}
export default App;