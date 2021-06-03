import React, { Component } from "react";
 
class Project extends Component {
  render() {
    return (
      <div className="center">
        <h2>PROJECTS</h2>
        <h3>changberwedding.com</h3>
            <p style={{textAlign:'left'}}>
                Create a website for my wedding.
            </p>
        <h3>Flashcard Web Application</h3>
            <p style={{textAlign:'left'}}>
                Create a flashcard web application that would help students study for tests.
            </p>
        <h3>Patient Assistive Tracking System (P.A.T.S)</h3>
            <p style={{textAlign:'left'}}>
                Lead software development as part of high school senior project. Designed a tracking wrist watch that allows hospital staff keep track up patients.
            </p>
        <h3>CSC 174 Database Project</h3>
            <p style={{textAlign:'left'}}>
                Create a website for my wedding.
            </p>
        <h3>CSC 190 Senior Project</h3>
            <p style={{textAlign:'left'}}>
                Currently working on project that allows our users to track stocks.
            </p>
      </div>
    );
  }
}

export default Project;