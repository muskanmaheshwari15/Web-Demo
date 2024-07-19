import React from "react";
import "../pages/All.css";
import pr1 from "../images/pr1.png";
import pr2 from "../images/pr2.png";
import pr3 from "../images/pr3.png";
import pr4 from "../images/pr4.png";
import pr5 from "../images/pr5.png";
import pr6 from "../images/pr6.png";

const ProductTab = () => {
  return (
    <>
      <div className="my-0 " id="portfolio ">
        <h2 className="mt-4 text-center text-3xl text-blue-900 uppercase font-bold">
          Products
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900  mb-8"></div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="p-3 container">
              <nav>
                <div className="nav nav-tabs gap-1 mb-3" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Business
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Development
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Security
                  </button>
                  <button
                    className="nav-link"
                    id="c-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-inti"
                    type="button"
                    role="tab"
                    aria-controls="nav-inti"
                    aria-selected="false"
                  >
                    Intelligence
                  </button>
                  <button
                    className="nav-link"
                    id="nav-security-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-security"
                    type="button"
                    role="tab"
                    aria-controls="nav-security"
                    aria-selected="false"
                  >Cybersecurity
                  </button>
                </div>
              </nav>
              <div className="tab-content p-3" id="nav-tabContent">
                <div className="tab-pane fade active show"id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div class="container overflow-hidden">
                    <div class="row gy-5">
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr1} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Business Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr2} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            School Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr3} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Payroll Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr4} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Event Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr5} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Data Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr6} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Client Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade"id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div class="container overflow-hidden">
                    <div class="row gy-5">
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr1} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Skill Development
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr2} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                          Comunication Development
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr3} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                          Application Development
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr4} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                          API development
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr5} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                          Front-end Development
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr6} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                          Back-end Development
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab">
                  <div class="container overflow-hidden">
                    <div class="row gy-5">
                      <div class="grid grid-cols-2 gap-1">
                        <div class="text-start card card-pd">
                          <img src={pr1} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Business Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr2} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            School Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr3} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Payroll Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr4} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Event Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr5} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Data Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr6} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Client Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-inti"
                  role="tabpanel"
                  aria-labelledby="nav-inti-tab"
                >
                <div class="container overflow-hidden">
                    <div class="row gy-5">
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr1} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Business Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr2} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            School Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr3} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Payroll Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr4} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Event Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr5} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Data Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr6} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Client Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-security"
                  role="tabpanel"
                  aria-labelledby="nav-security-tab">
                <div class="container overflow-hidden">
                    <div class="row gy-5">
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr1} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Business Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr2} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            School Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr3} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Payroll Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr4} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Event Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr5} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Data Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 col-lg-4">
                        <div class="text-start card card-pd">
                          <img src={pr6} className="img-bg" />
                          <h5 class="text-xl lg:text-2xl font-semibold text-blue-900 hover:text-blue-900 mt-2 mb-2">
                            Client Management
                          </h5>
                          <p class="m-0 text-xl font-semibold tracking-tight text-gray-500">
                            Vestibulum bibendum, lorem a blandit lacinia, nisi
                            velit posuere nisl, vel placerat magna mauris mollis
                            maximus est.
                          </p>
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
    </>
  );
};

export default ProductTab;
