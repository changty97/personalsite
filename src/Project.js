import React, { Component } from "react";
 
class Project extends Component {
  render() {
    return (
      <div className="center">
        <h2>PROJECTS</h2>
        <h3>changberwedding.com</h3>
            <p style={{textAlign:'left'}}>
                Created a website for my wedding that took place on September 26, 2020.<br></br>
                <a href="https://changberwedding.com">https://changberwedding.com</a>
            </p><br></br>
        <h3>Flashcard Web Application</h3>
            <p style={{textAlign:'left'}}>
                Created a flashcard web application that would help students study for tests. <br></br>
                <a href="https://github.com/changty97/Flashcard-App">Github Link</a>
            </p><br></br>
        <h3>Patient Assistive Tracking System (P.A.T.S)</h3>
            <p style={{textAlign:'left'}}>
                Lead software development as part of high school senior project (Spring 2016). Designed a tracking wrist watch that allows hospital staff to keep track of patients.
            </p>
            <img alt="PATS #1" src="/pats1.jpg" className="pats"></img>
            <img alt="PATS #2" src="/pats2.jpg" className="pats"></img>
            <img alt="PATS #3" src="/pats3.jpg" className="pats"></img>
            <br></br>
        <h3>CSC 174 Database Project</h3>
            <p style={{textAlign:'left'}}>
                Created a website connected to a MySQL database for CSC 174 Advanced Database. <br></br>
                <a href="http://ec2-3-142-143-53.us-east-2.compute.amazonaws.com/#/login">Offical Project</a>
            </p><br></br>
        <h3>CSC 190 Senior Project</h3>
            <p style={{textAlign:'left'}}>
                Currently working on project that allows our users to track stocks.<br></br>
                <a href="http://ec2-35-167-74-88.us-west-2.compute.amazonaws.com/">Unoffical Project</a>
            </p><br></br>
      </div>
    );
  }
}

export default Project;