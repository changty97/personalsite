import React, { Component } from "react";
import Navbar from "./Navbar";

class Home extends Component {
  render() {
    return (
      <Navbar>
        <div className="center">
          <h2>BIO</h2>
            <p>
              I am a Software Engineer at Intel in the Intel Foundry Services group. I like learning new technologies and growing my skill sets in areas like Artifical Intelligents (AI) and creating fun projects with Arduino. I recently graduated Fall of 2021 with a Bachelors Degree in Computer Science at California State University of Sacramento. For some of my latest projects checkout out my <a href="https://github.com/changty97" className="link">GitHub</a>.</p>
            </p>
          //<p>I am a Software Engineer Intern at Intel where I automate and develop software on the Product Validation Tools team. Learning new technologies has always been my passion and has lead to gaining new skill sets such as problem solving. Currently, I am attending California State University of Sacramento where I expect to graduate Fall 2021. For some of my latest projects checkout out my <a href="https://github.com/changty97" className="link">GitHub</a>.</p>
        </div>
      </Navbar>
    );
  }
}

export default Home;
