import "./App.css";
import "../src/style.scss"
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineTask } from "react-icons/md";
function App() {
  return (
    <div className="App">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div class="card border-0">
                <div className="row">
                  <div className="col-lg-8">
                    {" "}
                    <div className="row">
                      <div class="d-flex flex-column">
                        <div class="px-3 pt-3">
                          <h4>The Big company of United States</h4>
                        </div>
                        <div class="px-2 pb-2">
                          <div class="d-flex flex-row">
                            <div class="p-2">
                              <h6>Description:</h6>
                            </div>
                            <div class="p-2">
                              <p className="text-secondary">Test for custom control uploads</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div class="d-flex align-items-stretch">
                        <div class="p-2">
                          <div class="d-flex flex-column">
                            <div className="d-flex flex-row">
                              <div class="p-2">
                                {" "}
                                <BsFillPersonFill />
                              </div>
                              <div class="p-2">
                                <h6>Auditor:</h6>
                              </div>
                              <div class="p-2">
                                <h6 className="text-primary">Carl Feola</h6>
                              </div>
                            </div>
                            <div className="d-flex flex-row">
                              <div class="p-2">
                                {" "}
                                <BsFillPersonFill />
                              </div>
                              <div class="p-2">
                                <h6>Manager:</h6>
                              </div>
                              <div class="p-2">
                                <h6 className="text-primary">Sam kader</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="p-2">
                          <div class="d-flex flex-column">
                            <div className="d-flex flex-row">
                              <div class="p-2">
                                {" "}
                                <MdOutlineTask />
                              </div>
                              <div class="p-2">
                                <h6>Open task:</h6>
                              </div>
                              <div class="p-2">
                                <h6 className="text-primary">4</h6>
                              </div>
                            </div>
                            <div className="d-flex flex-row">
                              <div class="p-2">
                                {" "}
                                <MdOutlineTask />
                              </div>
                              <div class="p-2">Order Manager:</div>
                              <div class="p-2 text-primary">1158</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div class="container p-5">
                      <div class="progress" data-percentage="74">
                        <span class="progress-left">
                          <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                          <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">
                          <div>
                            56%
                            <br />
                            <span>completed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="d-flex flex-row justify-content-between">
                <div class="p-2">
                  <div class="card ">
                    <div class="d-flex align-items-stretch">
                      <div class="p-2">
                        <div class="d-flex flex-column">
                          <div class="p-2">
                            <h6>Start Date</h6>
                          </div>
                          <div class="p-2">
                            <h6>End Date</h6>
                          </div>
                          <div class="p-2">
                            <h6>Last touched</h6>
                          </div>
                          <div class="p-2">
                            <h6>Oldest data client closed</h6>
                          </div>
                        </div>
                      </div>
                      <div class="p-2">
                        <div class="p-2 text-primary">01/02/2022</div>
                        <div class="p-2 text-primary">02/03/2022</div>
                        <div class="p-2 text-primary">05/02/2022</div>
                        <div class="p-2 text-primary">05/02/2022</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-2">
                  <div class="card">
                    <div class="d-flex align-items-stretch">
                      <div class="p-2">
                        <div class="d-flex flex-column">
                          <div class="d-flex flex-row">
                            <div class="d-flex flex-column">
                              <div class="px-2 pb-2 pt-4">
                                <h6>Balance outstanding</h6>
                              </div>
                              <div class="px-5 pb-2">$300000</div>
                            </div>
                          </div>
                          <div class="d-flex flex-row">
                            <div class="d-flex flex-column">
                              <div class="px-5 py-2">
                                <h6>Total fee</h6>
                              </div>
                              <div class="px-5 pb-1">$1000000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-2">
                  <div class="card">
                    <div class="d-flex align-items-stretch">
                      <div class="p-2">
                        <div class="d-flex flex-column">
                          <div class="p-2">Open task</div>
                          <div class="p-2">Client ok</div>
                          <div class="p-2">Auditor ok</div>
                          <div class="p-2">Problems</div>
                        </div>
                      </div>
                      <div class="p-2">
                        <div class="p-2 text-primary">4</div>
                        <div class="p-2 text-primary">4</div>
                        <div class="p-2 text-primary">4</div>
                        <div class="px-2 pt-2 pb-3 text-primary">4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
