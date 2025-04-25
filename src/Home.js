import React, { Component } from "react";
import Navbar from "./Navbar";

class Home extends Component {
  render() {
    return (
      <Navbar>
        <div className="center">
            <div class="row">
                <div class="col-lg-12">
                    <div>
                        <div class="card-body">
                            <div class="hori-timeline" dir="ltr">
                                <ul class="list-inline events">
                                    <li class="list-inline-item event-list">
                                        <div class="px-4">

                                        <img alt="Pizza Guys Logo" className="logo1" src="/pizza-guys-logo.png" />
                                        <h5 class="font-size-16 text-warning">2017 - IT Support Technician </h5>
                                        </div>

                                    </li>
                                    <li class="list-inline-item event-list">
                                        <div class="px-4">
                                        <img alt="OWP Logo" className="logo1" src="/owp-logo.png" />
                                        <h5 class="font-size-16 text-warning">2019 - Software Developer Intern</h5>
                                        </div>
                                    </li>
                                    <li class="list-inline-item event-list">
                                        <div class="px-4">
                                        <img alt="Intel Logo" className="logo1" src="/intel-logo.png" />
                                        <h5 class="font-size-16 text-warning">2020 - DevOps Engineer Intern</h5>
                                        </div>
                                    </li>
                                    <li class="list-inline-item event-list">
                                        <div class="px-4">
                                        <img alt="Intel Logo" className="logo1" src="/intel-logo.png" />
                                        <h5 class="font-size-16 text-warning">2022 - System Software Engineer</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Navbar>
    );
  }
}

export default Home;
