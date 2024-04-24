import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
import CardsPagination from "../components/CardsPagination";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getFromLocalStorage } from "../utils/localStorage";
import CountdownTimer from "../components/CountdownTimer";
const Product = () => {
  const [key, setKey] = useState("home");
  const { id: auctionId } = useParams();
  const [auctionData, setAuctionData] = useState([]);
  const [bidAmount, setBidAmount] = useState();
  const [bidData, setBidData] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getAuctionbyId();
    getBidsByAuctionId();
  }, [auctionId]);

  const getBidsByAuctionId = async () => {
    const url = `https://ua80926.pythonanywhere.com/v1/api/bids/by_auction/${auctionId}/?p=1&page_size=5`;
    try {
      const bidResponse = await axios.get(url);
      console.log("Bid Data:", bidResponse.data.results);
      setBidData(bidResponse.data.results);
    } catch (error) {
      console.error("Error fetching bid data:", error);
    }
  };

  const getAuctionbyId = async () => {
    const url = `https://ua80926.pythonanywhere.com/v1/api/auction/${auctionId}`;
    try {
      const auctionResponse = await axios.get(url);
      console.log("Auction Data:", auctionResponse.data.results);
      setAuctionData(auctionResponse.data.results[0]);
    } catch (error) {
      console.error("Error fetching auction data:", error);
    }
  };
  let userId;
  useEffect(() => {
    const userType = localStorage.getItem("userType");

    userId = getFromLocalStorage("userId");
  }, [bidAmount]);

  const postBidsData = async () => {
    console.log("user id", userId);
    const postData = {
      auction: auctionId,
      bidder: 2,
      price: bidAmount,
    };

    try {
      const response = await axios.post(
        "https://ua80926.pythonanywhere.com/v1/api/bids/",
        postData
      );
      console.log("Response:", response.data);
      setSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      setSuccess(false);
    }
  };

  const setLoader = (errMsg) => {
    if (!success) {
      return <label>{errMsg}</label>;
    }
    return null;
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="category-Page-heading text-center">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-7">
            <h1 className="text-white">{auctionData.product_name}</h1>
          </div>
        </div>
      </div>
      <div className="bg-gradient container-fluid p-5">
        <div className="row g-4 mt-2">
          <div className="col-4">
            <div className="">
              <h4 className=" mb-5">{auctionData.product_name}</h4>
              <p className="text-dark">
                {auctionData && auctionData.description
                  ? auctionData.description.split(" ").slice(0, 20).join(" ") +
                    (auctionData.description.split(" ").length > 20
                      ? " ..."
                      : "")
                  : ""}
              </p>

              <p>
                ITEM CONDITION:{" "}
                <span className="text-primary">
                  {auctionData.product_condition
                    ? auctionData.product_condition
                    : "Not Available"}
                </span>
              </p>
              <p>
                Expected Price:{" "}
                <span className="text-primary">
                  {auctionData.expected_value ? auctionData.expected_value : 0}
                </span>
              </p>
              <div className=" my-3">
                <p>TIME LEFT</p>
                <div className="d-flex align-items-center justify-content-between p-3 timer rounded-2 bg-light">
                  <CountdownTimer
                    startTime={new Date(auctionData.auction_start_time0)}
                    endTime={new Date(auctionData.auction_end_time)}
                  />
                </div>
                <p className="my-3">
                  AUCTION ENDS:{" "}
                  <span className="text-primary">
                    {new Date(auctionData.auction_end_time).toLocaleString()}
                  </span>
                </p>
              </div>
              <div className="">
                <h5 className="mb-0">Current Bid</h5>
                <h3 className="mb-0 text-primary">{auctionData.latest_bid}</h3>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="d-flex align-items-center">
                  <input
                    type="number"
                    className="form-control "
                    placeholder="Enter Bid Amount"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary w-25" onClick={postBidsData}>
                  Bid Now
                </button>
              </div>
              <div className="mt-3">
                {success === true ? setLoader("Bid Failed") : setLoader("")}{" "}
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="container position-relative rounded-1">
              <div
                className="suite-img-slider bg-transparent"
                style={{ borderRadius: "5px" }}
              >
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  {auctionData.product_images &&
                    auctionData.product_images.map((image, idx) => (
                      <Carousel.Item key={idx}>
                        <img
                          src={image.image}
                          className="d-block"
                          alt="..."
                          style={{
                            width: "100%",
                            borderRadius: "5px 5px 5px 5px",
                            height: "500px",
                          }}
                        />
                      </Carousel.Item>
                    ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-2 bg-white card-Shadow my-md-5"
          bis_skin_checked="1"
        >
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="tab-border-bottom pt-3 gap-3 mb-3 border-tabs"
          >
            <Tab className="p-3" eventKey="description" title="Description">
              {auctionData.description}
            </Tab>
            <Tab
              className="p-3 "
              eventKey="auctionHistory"
              title="Auction History"
            >
              <table className="table Search-Employees table-borderless table-striped table-hover ">
                <thead
                  className="Employees-border sticky-top bg-white"
                  style={{ zIndex: 1 }}
                >
                  <tr className="small">
                    <th scope="col" className="pb-3 ps-4 dashed-border-bottom">
                      #
                    </th>
                    <th
                      scope="col"
                      className="pb-3 dashed-border-bottom"
                      style={{ minWidth: "150px" }}
                    >
                      Bid Amount
                    </th>
                    <th
                      scope="col"
                      className="pb-3 dashed-border-bottom"
                      style={{ minWidth: "150px" }}
                    >
                      Placed At
                    </th>
                  </tr>
                </thead>
                <tbody className="small">
                  {bidData &&
                    bidData.map((bid, index) => (
                      <tr key={index}>
                        <th scope="row" className="ps-4 pe-2">
                          {index + 1}
                        </th>
                        <td>{bid.price}</td>
                        <td>{bid.created_at}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
