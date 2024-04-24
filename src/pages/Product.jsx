import React, { useState, useEffect } from "react";
import { Alert, Tab, Tabs } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../components/Footer";
import CardsPagination from "../components/CardsPagination";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getFromLocalStorage } from "../utils/localStorage";
import CountdownTimer from "../components/CountdownTimer";
const Product = () => {
  const [key, setKey] = useState("description");
  const [tabkey, setTabKey] = useState("description"); 
  const { id: auctionId } = useParams();
  const [auctionData, setAuctionData] = useState([]);
  const [bidAmount, setBidAmount] = useState();
  const [bidData, setBidData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getAuctionById();
  }, [auctionId]);

  useEffect(() => {
    getBidsByAuctionId();
  }, [auctionId, currentPage, pageSize]);

  const getBidsByAuctionId = async () => {
    try {
      const url = `https://ua80926.pythonanywhere.com/v1/api/bids/by_auction/${auctionId}/?p=${currentPage}&page_size=${pageSize}`;
      const bidResponse = await axios.get(url);
      const { results, count } = bidResponse.data;

      setBidData(results);
      setTotalPages(Math.ceil(count / pageSize));
    } catch (error) {
      console.error("Error fetching bid data:", error);
    }
  };

  const getAuctionById = async () => {
    try {
      const url = `https://ua80926.pythonanywhere.com/v1/api/auction/${auctionId}`;
      const auctionResponse = await axios.get(url);
      
      setAuctionData(auctionResponse.data.results[0]);
    } catch (error) {
      console.error("Error fetching auction data:", error);
    }
  };

  const postBidsData = async () => {
   
    const condition = bidAmount < auctionData.latest_bid;
    if (!condition) {
      const postData = {
        auction: auctionId,
        bidder: userId,
        price: bidAmount,
      };

      try {
        const response = await axios.post(
          "https://ua80926.pythonanywhere.com/v1/api/bids/",
          postData
        );
        console.log("Response:", response.data);
        setSuccess(true);
        alert("Bid Placed Successfully");
      } catch (error) {
        console.error("Error:", error);
        setSuccess(false);
      }
    } else {
      alert("Bid amount should be greater than the current bid amount");
      return;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const setLoader = (errMsg) => {
    if (!success) {
      return <label>{errMsg}</label>;
    }
    return null;
  };

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
          <div className="col-5">
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
          <div className="col-7">
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
                    bidData
                      .map((bid, index) => (
                        <tr key={index}>
                          <th scope="row" className="ps-4 pe-2">
                            {bid.id}
                          </th>
                          <td>{bid.price}</td>
                          <td>{bid.created_at}</td>
                        </tr>
                      ))}
                </tbody>
              </table>
              {/* pagination */}

              <div className="employee-displaying d-flex flex-wrap-reverse align-items-center justify-content-between p-3 border-top">
                <div className="d-flex flex-wrap-reverse align-items-center mt-md-0 mt-3">
                  <p className="mb-0 mt-sm-0 mt-1 displaying-records">
                    Displaying {bidData.length} for {totalPages} records
                  </p>
                  <div className="d-flex justify-content-between align-items-center ms-sm-0 ms-2">
                    <select
                      className="ms-sm-4 form-select input-flied gray border-0"
                      onChange={(e) => handlePageChange(e.target.value)}
                      value={currentPage}
                    >
                      {Array.from({ length: totalPages }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <div className="d-flex align-items-center">
                      <div className="ms-sm-3 ms-2">
                        <div className="loader"></div>
                      </div>
                      <div className="displaying-records ms-2">
                        <label htmlFor="loader">loading...</label>
                      </div>
                    </div>
                  </div>
                </div>
                <CardsPagination />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
