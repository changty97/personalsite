import React, { Component } from "react";
 
class Project extends Component {
  render() {
    return (
      <div className="center">
        <h2>PROJECTS</h2>
        <h3>changberwedding.com</h3>
            <p style={{textAlign:'left'}}>
                Created a website for my wedding.
            </p>
        <h3>Flashcard Web Application</h3>
            <p style={{textAlign:'left'}}>
                Created a flashcard web application that would help students study for tests.
            </p>
        <h3>Patient Assistive Tracking System (P.A.T.S)</h3>
            <p style={{textAlign:'left'}}>
                Lead software development as part of high school senior project. Designed a tracking wrist watch that allows hospital staff keep track up patients.
            </p>
            <img alt="PATS #1" src="/pats1.jpg" className="pats"></img>
            <img alt="PATS #2" src="/pats2.jpg" className="pats"></img>
            <img alt="PATS #3" src="/pats3.jpg" className="pats"></img>
        <h3>CSC 174 Database Project</h3>
            <p style={{textAlign:'left'}}>
                Created a website connected to a MySQL database for CSC 174 Advanced Database.
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