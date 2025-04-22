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
                                      <h5 class="font-size-16 text-warning">2017</h5>
                                        <p class="text-info">
                                            This contest is over now and prize 
                                            distribution is over now thank you 
                                              for join. 
                                        </p>
                                        <div>
                                            <a href="" 
                                               class="btn btn-success btn-sm">
                                               Read more...
                                            </a>
                                        </div>
                                    </div>

                                </li>
                                <li class="list-inline-item event-list">
                                    <div class="px-4">

                                      <img alt="OWP Logo" className="logo1" src="/owp-logo.png" />
                                      <h5 class="font-size-16 text-warning">2019</h5>
                                        <p class="text-muted">
                                            This contest is over now check 
                                            your result in the dashbord section.
                                        </p>
                                        <div>
                                            <a href="https://www.geeksforgeeks.org/" 
                                               class="btn btn-success btn-sm">
                                               Read more...
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-inline-item event-list">
                                    <div class="px-4">
                                      <img alt="Intel Logo" className="logo1" src="/intel-logo.png" />
                                      <h5 class="font-size-16 text-warning">2020</h5>
                                        <p class="text-primary">
                                            This contest is over we start the 
                                            prize distribution soon please check 
                                            what you earn.
                                        </p>
                                        <div>
                                            <a href="https://www.geeksforgeeks.org/" 
                                               class="btn btn-success btn-sm">
                                               Read more...
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-inline-item event-list">
                                    <div class="px-4">
                                        <p class="text-muted">
                                            This contest comming soon you can show 
                                            it in the geeksforgeeks portal.
                                        </p>
                                        <div>
                                            <a href=
                                             "https://www.geeksforgeeks.org/" 
                                               class="btn btn-success btn-sm">
                                               Read more...
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        <script src=
"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>
      </Navbar>
    );
  }
}

export default Home;
