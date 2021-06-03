import React, { Component } from "react";
 
class Resume extends Component {
  render() {
    return (
      <div className="center">
        <h2>RESUME</h2>
        <iframe src="/Tyler_Chang_Resume_2021.pdf" title="Resume PDF file" className="resume" frameborder="0" height="680" width="500"></iframe>
      </div>
    );
  }
}
 
export default Resume;