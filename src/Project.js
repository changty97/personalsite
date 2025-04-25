import React, { Component } from "react";
import Navbar from "./Navbar";

class Project extends Component {
  render() {
    return (
        <Navbar>
            <div class="cards">
                <article class="card">
                    <header>
                    <h2>Patient Assistive Tracking System (P.A.T.S)</h2>
                    </header>

                    <img alt="PATS #1" src="/pats1.JPG" className="pats"></img>
                    {/* <img alt="PATS #2" src="/pats2.JPG" className="pats"></img>
                    <img alt="PATS #3" src="/pats3.JPG" className="pats"></img> */}
                    <div class="content">
                    <p>
                        Lead software development as part of high school senior project (Spring 2016). Designed a tracking wrist watch that allows hospital staff to keep track of patients.
                        Utilized C++ for the tracking module.
                    </p>
                    </div>
                </article>

                <article class="card">
                    <header>
                    <h3>changberwedding.com</h3>
                    </header>

                    <img
                    src="/changberwedding.png"
                    alt="changberwedding.com" />
                    <div class="content">
                    <p>
                        Currently working on project that allows our users to track stocks. Hosted on AWS using nginx to serve the webpage.
                    </p>
                    </div>
                </article>

                <article class="card">
                    <header>
                    <h2>Flashcard Web Application</h2>
                    </header>

                    <div class="content">
                    <p>
                        Created a flashcard web application that would help students study for Water Treatment tests.
                    </p>
                    </div>
                </article>
                <article class="card">
                    <header>
                    <h2>CSC 174 Database Project</h2>
                    </header>

                    <div class="content">
                    <p>
                        Created a website connected to a MySQL database for CSC 174 Advanced Database.
                    </p>
                    </div>
                </article>
                <article class="card">
                    <header>
                    <h2>Tradealysis</h2>
                    </header>

                    <div class="content">
                    <p>
                        Developed a project that allows our users to track stocks. Hosted on AWS using nginx to serve the webpage.
                    </p>
                    </div>
                </article>
            </div>
        </Navbar>
    );
  }
}

export default Project;
