import React, { Component } from "react";
import Navbar from "./Navbar";

class Home extends Component {
  render() {
    return (
      <Navbar>
        <div className="center">
          <h2>Introduction</h2>
            <p>
            Hi, my name is Tyler. I enjoy learning new technologies and expanding my skill set, particularly in Artificial Intelligence (AI) and building fun projects with Arduino. Professionally, I specialize in DevOps and automation, but I also have experience in full-stack web development and embedded systems. I hold a Bachelor's Degree in Computer Science from California State University, Sacramento. For some of my latest projects checkout out my <a href="https://github.com/changty97" className="link">GitHub</a>.
            </p>
        </div>
        <div className="center">
          <h2>Professional History</h2>
          <p>
            <img alt="Intel Logo" className="logo1" src="/intel-logo.png" /><br/>
            <b>System Software Engineer</b><br/>
            <i>Jan 2022 - Present</i><br/>
          </p>
            ● Developed Bash automation scripts with GNU Make to streamline build, deployment,
            and monitoring tasks.<br/>
            ● Developed a multithreaded Python framework for cache coherency testing, improving
            validation efficiency.<br/>
            ● Collaborated with cross-functional teams to design CI/CD using GitHub Actions,
            optimizing QA unit testing and reducing deployment time by 30%.<br/>
            ● Supported distributed software systems by deploying and managing Kubernetes clusters
            for validation environments, ensuring seamless integration and scalability.<br/>
            ● Managed and optimized Linux-based environments, including VMware virtual machines
            and bare-metal servers for pre/post-silicon validation.<br/>
            ● Developed, maintained, and deployed Docker images to compile x86, RISC-V, and
            ARM pre-silicon tests, utilizing Harbor as a registry.<br/>
        </div>
        <div className="center">
          <p>
            <b>DevOps Engineer Intern</b><br/>
            <i>Jan 2020 - Jan 2022</i><br/>
          </p>
            ● Deployed production code to Kubernetes clusters using GitLab CI and Helm, improving
            performance and scalability.<br/>
            ● Enhanced monitoring and logging with Splunk and New Relic, improving debugging
            efficiency.<br/>
            ● Automated infrastructure provisioning with Terraform, streamlining containerized
            service deployments.<br/>
            ● Developed Ansible playbooks for provisioning and configuration management across
            multi-site environments.<br/>
        </div>
        <div className="center">
          <p>
            <img alt="OWP Logo" className="logo1" src="/owp-logo.png" /><br/>
            <b>Software Developer Intern</b><br/>
            <i>Jan 2019 - May 2020</i><br/>
          </p>
            ● Developed secure APIs and front-end applications using JavaScript and PHP, ensuring compliance with security and performance standards.<br/>
            ● Created a flashcard application using Vue.JS, HTML, and CSS, enhancing the company's educational offerings.<br/>
        </div>
        <div className="center">
          <p>
            <img alt="Pizza Guys Logo" className="logo1" src="/pizza-guys-logo.png" /><br/>
            <b>I.T. Support Technician</b><br/>
            <i>July 2017 - Jan 2020</i><br/>
          </p>
            ● Managed the installation and upgrade of computer systems across 20+ franchise locations, ensuring network reliability and security.<br/>
            ● Provided ongoing IT support for 66 franchise/corporate locations, resolving technical issues and minimizing downtime.<br/>
        </div>
      </Navbar>
    );
  }
}

export default Home;
