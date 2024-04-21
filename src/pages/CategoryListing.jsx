import React from "react";
import Footer from "../components/Footer";
import CardsPagination from "../components/CardsPagination";
import carImg from "../assets/images/car.png";
import Carousel from "react-bootstrap/Carousel";

const CategoryListing = () => {
  return (
    <>
      <div className="category-Page-heading text-center">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-7">
            <h1 className="text-white">CATEGORY 1 LISTING</h1>
            <p className="text-white">
              ELEVATE YOUR EXPERIENCE IN THE DIGITAL REALM.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient container-fluid p-5">
        <div className="row justify-content-between align-items-center mt-4">
          <div className="col-3">
            <label >Search</label>
            <div className="d-flex input-group mb-3 align-items-center">
              <input
                type="text"
                className="form-control p-3 rounded-4"
                placeholder="Search here..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-9">
            <p className="text-end mb-0">Showing all 8 results</p>
          </div>
        </div>
        <div className="row g-4 mt-2">
          <div className="col-2">
            <div className="row">
              <div className="">
                <label >Sorting</label>
                <select className="form-select p-3" name="" id="">
                  <option selected="">Default Sorting</option>
                  <option value="">Lower To Heigher</option>
                  <option value="">Heigher To Lower</option>
                </select>
              </div>
              <div className="mt-4">
                <h4>Product Category</h4>
                <ul className="list-unstyled details-bg">
                  <li className="mb-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Cars
                        </label>
                        {/* <p className="mb-0 ">Item name goes here</p> */}
                      </div>
                      <p className="mb-0 text-gray">(10)</p>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="d-flex align-items-center justify-content-between">
                      {/* <div className="d-flex align-items-center"> */}
                        <div className="form-check">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                          Watches
                        </label>
                        </div>
                      {/* </div> */}
                      <p className="mb-0 text-gray">(10)</p>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="form-check">
                      <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                          Digital Assessories
                        </label>
                      </div>
                      <p className="mb-0 text-gray">(10)</p>
                    </div>
                  </li>
             
                </ul>
              </div>
            </div>
          </div>
          <div className="col-10">
            <div className="row g-4">
              <div className="col-lg-6">
                <div
                  className="card mb-3 border-0 overflow-hidden rounded-start-4"
                  style={{ maxWidth: "695px" }}
                >
                  <div className="row g-0  ">
                    <div className="col-md-4 ">
                      <Carousel>
                        <Carousel.Item className="">
                          <img
                            src={carImg}
                            className="d-block object-fit-contain"
                            alt="..."
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            src={carImg}
                            className="d-block object-fit-contain"
                            alt="..."
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            src={carImg}
                            className="d-block object-fit-contain"
                            alt="..."
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title mb-0">
                          Ford shelby White Car
                        </h6>
                        <div className="card-text my-3">
                          <div className="d-flex align-items-center justify-content-between p-3 timer rounded-2">
                            <div className="text-center days">
                              <h4 className="mb-1">96</h4>
                              <p className="small mb-0">Days</p>
                            </div>
                            <div className="text-center hours">
                              <h4 className="mb-1">14</h4>
                              <p className="small mb-0">Hours</p>
                            </div>
                            <div className="text-center minutes">
                              <h4 className="mb-1">44</h4>
                              <p className="small mb-0">Minutes</p>
                            </div>
                            <div className="text-center seconds">
                              <h4 className="mb-1">12</h4>
                              <p className="small mb-0">Seconds</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <p className="mb-0 small">Current Bid</p>
                          <h6 className="mb-0">9,999,425.00 pKR</h6>
                        </div>
                        <button className="btn btn-primary w-100">
                          Bid Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="card mb-3 border-0 overflow-hidden rounded-start-4"
                  style={{ maxWidth: "695px" }}
                >
                  <div className="row g-0  ">
                    <div className="col-md-4 ">
                      <Carousel>
                        <Carousel.Item className="">
                          <img
                            src={carImg}
                            className="d-block object-fit-contain"
                            alt="..."
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            src={carImg}
                            className="d-block object-fit-contain"
                            alt="..."
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            src={carImg}
                            className="d-block object-fit-contain"
                            alt="..."
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title mb-0">
                          Ford shelby White Car
                        </h6>
                        <div className="card-text my-3">
                          <div className="d-flex align-items-center justify-content-between p-3 timer rounded-2">
                            <div className="text-center days">
                              <h4 className="mb-1">96</h4>
                              <p className="small mb-0">Days</p>
                            </div>
                            <div className="text-center hours">
                              <h4 className="mb-1">14</h4>
                              <p className="small mb-0">Hours</p>
                            </div>
                            <div className="text-center minutes">
                              <h4 className="mb-1">44</h4>
                              <p className="small mb-0">Minutes</p>
                            </div>
                            <div className="text-center seconds">
                              <h4 className="mb-1">12</h4>
                              <p className="small mb-0">Seconds</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <p className="mb-0 small">Current Bid</p>
                          <h6 className="mb-0">9,999,425.00 pKR</h6>
                        </div>
                        <button className="btn btn-primary w-100">
                          Bid Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CardsPagination />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CategoryListing;
