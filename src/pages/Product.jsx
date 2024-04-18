import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../components/Footer';
import CardsPagination from '../components/CardsPagination';
import CarImage from '../assets/images/imgs/car-img.png';
import carImg from '../assets/images/car.png';
import RoomImage from '../assets/images/room.png';
import PropertyImage from '../assets/images/Group 37907.png';
const Product = () => {
    const [key, setKey] = useState('home');


    const [index, setIndex] = useState(0);
    const images = [
        {
            carImg,
        },
        {
            carImg,
        },
        {
            carImg,
        },
    ];
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {images.map((image, idx) => (
                <Carousel.Item key={idx}></Carousel.Item>
            ))}
        </Carousel>
    </>;

    return (
        <>
            <div className="category-Page-heading text-center">
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-7">
                        <h1 className="text-white">Ford Shelby White Car</h1>
                    </div>
                </div>
            </div>
            <div className="bg-gradient container-fluid p-5">
                <div className="row g-4 mt-2">
                    <div className="col-4">
                        <div className="">
                            <h4 className=" mb-5">Ford shelby White Car</h4>
                            <p className="text-dark">Korem ipsum dolor amet, consectetur adipiscing elit. Maece nas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                            <p>ITEM CONDITION: <span className="text-primary">NEW</span></p>
                            <div className=" my-3">
                                <p>TIME LEFT</p>
                                <div className="d-flex align-items-center justify-content-between p-3 timer rounded-2 bg-light" >
                                    <div className="text-center days">
                                        <h4 className="mb-1 text-primary">96</h4>
                                        <p className="small mb-0">Days</p>
                                    </div>
                                    <div className="text-center hours">
                                        <h4 className="mb-1 text-primary">14</h4>
                                        <p className="small mb-0">Hours</p>
                                    </div>
                                    <div className="text-center minutes">
                                        <h4 className="mb-1 text-primary">44</h4>
                                        <p className="small mb-0">Minutes</p>
                                    </div>
                                    <div className="text-center seconds">
                                        <h4 className="mb-1 text-primary">12</h4>
                                        <p className="small mb-0">Seconds</p>
                                    </div>
                                </div>
                                <p className="my-3">AUCTION ENDS: <span className="text-primary"> January 30, 2024 12:00 AM</span></p>
                            </div>
                            <div className="">
                                <h5 className="mb-0">Current Bid</h5>
                                <h3 className="mb-0 text-primary">640,000,000.0$</h3>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-primary">+</button>
                                    <p className="mb-0 px-3 py-2 bg-light rounded-3 mx-2">640,000,000.0$</p>
                                    <button className="btn btn-primary">-</button>
                                </div>
                                <button className="btn btn-primary w-25">Bid Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="container position-relative rounded-1">
                            <div className="suite-img-slider bg-transparent" style={{ borderRadius: "5px" }}>
                                {/* <!-- ************======((( FULL- WIDTH IMGES WITH NUMBER TEXT)))======********** --> */}
                                <Carousel >
                                            <Carousel.Item className="">
                                                <img src={CarImage} className="d-block" style={{width: "100%", borderRadius: "5px 5px 5px 5px", height: "500px"}} alt="..." />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={RoomImage} className="d-block" style={{width: "100%", borderRadius: "5px 5px 5px 5px", height: "500px"}} alt="..." />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img src={PropertyImage} className="d-block" style={{width: "100%", borderRadius: "5px 5px 5px 5px", height: "500px"}} alt="..." />

                                            </Carousel.Item>
                                        </Carousel>
                            
                                {/* <!-- ************======((( THUMBNAILS IMGES)))======********** --> */}
                               
                            </div>
                        </div>
                    </div>

                </div>
                <div className="rounded-2 bg-white card-Shadow my-md-5" bis_skin_checked="1">
                    {/* <div className="" bis_skin_checked="1">
                <div className="tab-border-bottom pt-3 gap-3" bis_skin_checked="1">
                    <ul className="nav nav-tabs border-tabs gap-3" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link pt-1 pb-3" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="false" tabindex="-1">
                                Description
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link pt-1 pb-3" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" tabindex="-1">
                                Auction History
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link pt-1 pb-3 active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="true">
                                Vendor info
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link pt-1 pb-3 " id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="true">
                                More Products
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content pt-4" id="myTabContent" bis_skin_checked="1">
                <div className="tab-pane fade" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0" bis_skin_checked="1">
                    <p className="mb-0 p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0" bis_skin_checked="1">
                    <p className="mb-0 p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="tab-pane fade active show" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0" bis_skin_checked="1">
                    <p className="mb-0 p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div> */}

                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="tab-border-bottom pt-3 gap-3 mb-3 border-tabs"
                    >
                        <Tab className='p-3' eventKey="description" title="Description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Tab>
                        <Tab className='p-3' eventKey="auctionHistory" title="Auction History">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Tab>
                        <Tab className='p-3' eventKey="vendorInfo" title="Vendor info">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Tab>
                    </Tabs>

                </div>
                <div className="container">
                    <div className="row g-4" bis_skin_checked="1">
                        <h4 className="my-5">Related Products</h4>
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
                        <CardsPagination />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product