import React, { useState } from "react";
import Footer from "../components/Footer";
import CardsPagination from "../components/CardsPagination";
import { ReactComponent as CarSvg } from "../assets/images/new-icons/car-category.svg";
import { ReactComponent as WatchSvg } from "../assets/images/new-icons/watch-category.svg";
import { ReactComponent as DigiAssessoriesSvg } from "../assets/images/new-icons/DigitalAssessories-category.svg";
import carImg from "../assets/images/car.png";
import Carousel from "react-bootstrap/Carousel";
import { usegetAuctions } from "../hooks/common";
import { getFromLocalStorage } from "../utils/localStorage";
import CountdownTimer from './../components/CountdownTimer';
const Home = () => {
  const [page, setPage] = useState(1);
  const { data: AuctionsCards } = usegetAuctions(page);
  console.log(AuctionsCards);
  // const authToken = getFromLocalStorage("authToken");
  const [index, setIndex] = useState(0);

  const PageChange = (number) => {
    setPage(number);

    // Implementation of callApi
  };
  // const images = [
  //   {
  //     carImg,
  //   },
  //   {
  //     carImg,
  //   },
  //   {
  //     carImg,
  //   },
  // ];
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  // <>
  //   <Carousel activeIndex={index} onSelect={handleSelect}>
  //     {images.map((image, idx) => (
  //       <Carousel.Item key={idx}></Carousel.Item>
  //     ))}
  //   </Carousel>
  // </>;
  return (
    <>
      <div className="Page-heading text-center">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-7">
            <p>A WORLD OF POSSIBILITES AWAITS.</p>
            <h1 className="text-white">
              DISCOVER, TRADE & TREASURE CUTTING-EDGE DIGITAL GOODS.
            </h1>
            <p className="text-white">
              ELEVATE YOUR EXPERIENCE IN THE DIGITAL REALM.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient pb-4">
        <div className="container Search-Area">
          <div className="row g-3 searcbar-home rounded-3 p-3 pt-0 bg-white">
            <div className="col">
              <a
                href="./property-adds.html"
                className="w-100 py-2 btn btn-city"
              >
                <CarSvg className=" mb-1 me-1" width="33" height="33" />
                Cars
              </a>
            </div>
            <div className="col">
              <a
                href="./property-adds.html"
                className="w-100 py-2 btn btn-city"
              >
                <WatchSvg className=" mb-1 me-1" width="30" height="30" />
                Watches
              </a>
            </div>
            <div className="col">
              <a
                href="./property-adds.html"
                className="w-100 py-2 btn btn-city"
              >
                <DigiAssessoriesSvg
                  className=" mb-1 me-1"
                  width="30"
                  height="30"
                />
                Digital Assessories
              </a>
            </div>
          </div>
        </div>
        <div className="text-center py-5">
          <h1 className="text-primary text-dark">
            LIVE <span className="text-primary h1">BIDDING</span> SHOWCACE
          </h1>
          <p className="text-dark mb-0">
            Discover the finest items on the world's largest bidding platform.
            Join us for a chance to be a part of your happiness, achievements,
            and future prosperity.
          </p>
        </div>
        <div className="container pt-4">
          <div className="row g-4">
            {AuctionsCards?.results?.map((auctions) => (
              <div className="col-lg-6">
                <div
                  className="card mb-3 border-0 overflow-hidden rounded-start-4"
                  style={{ maxWidth: "695px" }}
                >
                  <div className="row g-0  ">
                    <div className="col-md-4 ">
                      {/* <Carousel>
                        {auctions?.product_images.map((imgs, index)=>(
                        <Carousel.Item className="">
                          <img
                            src={imgs.index}
                            className="d-block object-fit-contain"
                            alt="..."
                          />
                        </Carousel.Item>
                       ))}
                      </Carousel> */}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title mb-0">
                          {auctions.product_name}
                        </h6>
                        <div className="card-text my-3">
               
                          <CountdownTimer endTime={auctions.end_time} />
                          
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <p className="mb-0 small">Current Bid</p>
                          <h6 className="mb-0">
                            {auctions.latest_bid || auctions.product_initialPrice}
                          </h6>
                        </div>
                        <button className="btn btn-primary w-100">
                          Bid Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {AuctionsCards?.count > 1 && (
              <CardsPagination
                count={Math.ceil(AuctionsCards?.count / 4)}
                // count={Math.ceil(6 / 4)}
                page={page}
                onClick={PageChange}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
