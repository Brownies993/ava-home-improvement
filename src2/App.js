import React, { Component } from "react";
import logo from "./components/logo/logo.jpg";
import Navbar from "./components/navbar";
import About from "./Pages/about";
import Wrapper from "./components/Wrapper";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/about" component={About} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
    );
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>AVA Home Improvement</h2>
//         </div>
//         <p className="App-intro">
//         The Offical Website for AVA Home Improvement LLC.
//         </p>
//       </div>
//     );
//   }
// }
export default App;