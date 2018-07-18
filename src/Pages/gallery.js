import React, {Component} from "react";
// import Topbar from "../components/Topbar";
// import Hero from "../components/Hero";
// import about from "./about";
// import workData from "../data/workData.json"; 

// Import UI components
import { Grid } from "semantic-ui-react";

import workData from"../data/workData.json"; 

class gallery extends Component {
    state = {
      workData: workData
    }

     //component mounts
  componentDidMount() {
    this.setState({
      workData: (this.state.workData)
    })
  }
  

    render() {
        console.log(workData);
        // return (

        //   <Grid centered padded>
        //     <Hero/>
        //   </Grid>
        // )
        return(
            <div>
            {workData.map(data => (
                <img src={data.image}/>
            ))}
        </div>
        )

      }
    }
    

export default gallery;