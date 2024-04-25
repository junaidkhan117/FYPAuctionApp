import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import CardsPagination from "../components/CardsPagination";
import CountdownTimer from "../components/CountdownTimer";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const [page, setPage] = useState(1);
  const [AuctionsCards, setAuctionsCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cardCount, setcardCount] = useState("");
  const [sortBy, setSortBy] = useState("");

  const getAuctions = async () => {
    let auctionUrl = `https://ua80926.pythonanywhere.com/v1/api/auction/?page=${page}&page_size=4`;

    if (searchTerm) {
      auctionUrl += `&search=${searchTerm}`;
    }
    if (sortBy) {
      auctionUrl += `&sort_by=${sortBy}`;
    }

    try {
      const response = await axios.get(auctionUrl);
      setAuctionsCards(response.data.results);
      setcardCount(response.data.count)
      console.log(response)
    } catch (error) {
      console.error("Error fetching auctions:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getAuctions();
  }, [page, searchTerm, sortBy]);

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
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            {/* Other category buttons */}
          </div>
        </div>
        <div className="text-center py-5">
          <h1 className="text-primary text-dark">
            LIVE <span className="text-primary h1">BIDDING</span> SHOWCASE
          </h1>
          <p className="text-dark mb-0">
            Discover the finest items on the world's largest bidding platform.
            Join us for a chance to be a part of your happiness, achievements,
            and future prosperity.
          </p>
        </div>
        <div className="container pt-4">
          <div className="col-10">
            <div className="row g-4">
              {AuctionsCards?.map((item, key) => (
                <div className="col-lg-6" key={key}>
                  <div className="card mb-3 border-0 overflow-hidden rounded-start-4">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <Carousel>
                          {item.product_images &&
                            item.product_images.map((uploaded_image, index) => (
                              <Carousel.Item key={index}>
                                <img
                                  src={uploaded_image.image}
                                  className="d-block"
                                  style={{ width: "370px", height: "247px" }}
                                  alt="..."
                                />
                              </Carousel.Item>
                            ))}
                        </Carousel>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h6 className="card-title mb-0">
                            {item.product_name}
                          </h6>
                          <div className="card-text my-3">
                            <div className="d-flex align-items-center justify-content-between p-3 timer rounded-2">
                              <CountdownTimer
                                startTime={new Date(item.auction_start_time0)}
                                endTime={new Date(item.auction_end_time)}
                              />
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <p className="mb-0 small">Current Bid</p>
                            <h6 className="mb-0">
                              {item.latest_bid ? item.latest_bid : "000.00"}
                            </h6>
                          </div>

                          <button disabled className="btn btn-primary w-100">
                            Bid Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Pagination */}
          {cardCount > 1 && (

            <CardsPagination
              count={Math.ceil(cardCount / 4)}
              page={page}
              onClick={handlePageChange}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
