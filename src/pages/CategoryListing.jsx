import React from 'react'
import Footer from '../components/Footer';
import CardsPagination from '../components/CardsPagination';
import carImg from "../assets/images/car.png";
import Carousel from 'react-bootstrap/Carousel';

const CategoryListing = () => {
    return (
        <>

            <div class="category-Page-heading text-center">
                <div class="d-flex justify-content-center">
                    <div class="col-12 col-md-7">
                        <h1 class="text-white">CATEGORY 1 LISTING</h1>
                        <p class="text-white">
                            ELEVATE YOUR EXPERIENCE IN THE DIGITAL REALM.
                        </p>
                    </div>
                </div>
            </div>
            <div class="bg-gradient container-fluid p-5">
                <div class="row justify-content-between align-items-center mt-4">
                    <div class="col-3">
                        <label for="">Search</label>
                        <div class="d-flex input-group mb-3 align-items-center">
                            <input type="text" class="form-control p-3 rounded-4" placeholder="Search here..." aria-label="Search" aria-describedby="basic-addon1" />
                       
                        </div>
                    </div>
                    <div class="col-9">
                        <p class="text-end mb-0">Showing all 8 results</p>
                    </div>
                </div>
                <div class="row g-4 mt-2">
                    <div class="col-2">
                        <div class="row">
                            <div class="">
                                <label for="">Sorting</label>
                                <select class="form-select p-3" name="" id="">
                                    <option selected="">Default Sorting</option>
                                    <option value="">Lower To Heigher</option>
                                    <option value="">Heigher To Lower</option>
                                </select>
                            </div>
                            <div class="mt-4">
                                <h4>Product Category</h4>
                                <ul class="list-unstyled details-bg">
                                    <li class="mb-2">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <div class="red-dot me-2"></div>
                                                <p class="mb-0 ">Item name goes here</p>
                                            </div>
                                            <p class="mb-0 text-gray">(10)</p>
                                        </div>
                                    </li>
                                    <li class="mb-2">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <div class="red-dot me-2"></div>
                                                <p class="mb-0 ">Item name goes here</p>
                                            </div>
                                            <p class="mb-0 text-gray">(10)</p>
                                        </div>
                                    </li>
                                    <li class="mb-2">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <div class="red-dot me-2"></div>
                                                <p class="mb-0 ">Item name goes here</p>
                                            </div>
                                            <p class="mb-0 text-gray">(10)</p>
                                        </div>
                                    </li>
                                    <li class="mb-2">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <div class="red-dot me-2"></div>
                                                <p class="mb-0 ">Item name goes here</p>
                                            </div>
                                            <p class="mb-0 text-gray">(10)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-10">
                        <div class="row g-4">
                            <div className="col-lg-6">
                                <div className="card mb-3 border-0 overflow-hidden rounded-start-4" style={{ maxWidth: "695px" }}>
                                    <div className="row g-0  ">
                                        <div className="col-md-4 ">
                                            <Carousel >
                                                <Carousel.Item className="">
                                                    <img src={carImg} className="d-block object-fit-contain" alt="..." />

                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img src={carImg} className="d-block object-fit-contain" alt="..." />

                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img src={carImg} className="d-block object-fit-contain" alt="..." />

                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h6 className="card-title mb-0">Ford shelby White Car</h6>
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
                                                <button className="btn btn-primary w-100">Bid Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card mb-3 border-0 overflow-hidden rounded-start-4" style={{ maxWidth: "695px" }}>
                                    <div className="row g-0  ">
                                        <div className="col-md-4 ">
                                            <Carousel >
                                                <Carousel.Item className="">
                                                    <img src={carImg} className="d-block object-fit-contain" alt="..." />

                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img src={carImg} className="d-block object-fit-contain" alt="..." />

                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img src={carImg} className="d-block object-fit-contain" alt="..." />

                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h6 className="card-title mb-0">Ford shelby White Car</h6>
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
                                                <button className="btn btn-primary w-100">Bid Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CardsPagination/>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default CategoryListing