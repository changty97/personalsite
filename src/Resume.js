import React, { Component } from "react";
import Navbar from "./Navbar";

class Resume extends Component {
  render() {
    return (
      <Navbar>
        <div className="center">
          <h2>RESUME</h2>
          <iframe src="/Tyler_Chang_Resume_2021.pdf" title="Resume PDF file" className="resume" frameborder="0" height="680" width="500"></iframe>
        </div>
      </Navbar>
    );
  }
}
 
export default Resume;