import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ReactComponent as SearchIcon } from "../assets/images/new-icons/listing-search-icon.svg";
import { ReactComponent as FilterIcon } from "../assets/images/new-icons/listing-filter-icon.svg";
import { ReactComponent as EditIcon } from "../assets/images/new-icons/listing-edit-icon.svg";
import { ReactComponent as MenuIcon } from "../assets/images/new-icons/listing-menu-icon.svg";
import CardsPagination from "./CardsPagination";
import axios from "axios";

const Table = () => {
  const [auctionData, setAuctionData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(""); // State variable for sorting
  const [filterBy, setFilterBy] = useState(""); // State variable for filtering

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, searchTerm, sortBy, filterBy]); // Include sortBy and filterBy in the dependencies array

  const fetchData = async (page) => {
    const pageSize = 4;
    let auctionUrl = `https://ua80926.pythonanywhere.com/v1/api/auction/?page=${page}&page_size=${pageSize}`;
    if (searchTerm) {
      auctionUrl += `&search=${searchTerm}`;
    }
    if (sortBy) {
      auctionUrl += `&sort_by=${sortBy}`; // Corrected to sort_by
    }
    // if (filterBy) {
    //   auctionUrl += `&is_sold=${filterBy}`; // Corrected to is_sold
    // }
    try {
      const auctionResponse = await axios.get(auctionUrl);
      console.log("Auction Data:", auctionResponse.data);
      setAuctionData(auctionResponse.data.results);
      setTotalPages(Math.ceil(auctionResponse.data.count / pageSize));
    } catch (error) {
      console.error("Error fetching auction data:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleSortBy = () => {
    // Sort by isSold field (assuming boolean values)
    setAuctionData([...auctionData.sort((a, b) => a.isSold - b.isSold)]);
  };

  const handleFilterBy = (field) => {
    setFilterBy(field);
  };

  const calculateDuration = (start, end) => {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const durationMs = endTime.getTime() - startTime.getTime();
    const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
    const durationMinutes = Math.floor(
      (durationMs % (1000 * 60 * 60)) / (1000 * 60)
    );
    return `${durationHours}h ${durationMinutes}m`;
  };

  return (
    <>
      <div className="container-fluid mt-1 bg-white card-Shadow rounded-2 px-0">
        <div className="d-flex justify-content-between flex-wrap align-items-center p-3 pb-0">
          <div className="input mb-3">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search by product name"
                aria-label="Search by product name"
                aria-describedby="basic-addon2"
                value={searchTerm}
                onChange={handleSearch} // Call handleSearch on input change
              />
              <Button
                className="btn bg-primary rounded-end-2"
                variant=""
                id="button-addon2"
                onClick={handleSubmit} // Call handleSubmit on button click
              >
                <SearchIcon className="SearchIcon mb-1" />
              </Button>
            </InputGroup>
          </div>
          <div className="mb-3 d-flex flex-wrap gap-2">
            <button
              type="button"
              className="btn btn-light-primary px-3 py-2"
            //   onClick={() => handleFilterBy(true)} // Call handleFilterBy with your filter criteria
            >
              <FilterIcon className="filterIcon" width="11" height="13" />
              Filter
            </button>
            <button
              type="button"
              className="btn btn-light-primary px-3 py-2"
              onClick={() => handleSortBy(true)} // Call handleSortBy with your sort criteria
            >
              <FilterIcon className="filterIcon" width="11" height="13" />
              Sort By
            </button>
          </div>
        </div>
        <div className="table-responsive" style={{ height: "60vh" }}>
          <table className="table Search-Employees table-borderless table-striped table-hover">
            <thead
              className="Employees-border sticky-top bg-white"
              style={{ zIndex: "1 !important" }}
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
                  Product Name
                </th>
                <th
                  scope="col"
                  className="pb-3 dashed-border-bottom"
                  style={{ minWidth: "150px" }}
                >
                  Condition
                </th>
                <th scope="col" className="pb-3 dashed-border-bottom">
                  Auction_Duration
                </th>
                <th scope="col" className="pb-3 dashed-border-bottom">
                  Status
                </th>
                <th
                  scope="col"
                  className="pb-3 text-center dashed-border-bottom"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="small">
              {auctionData.map((item, index) => (
                <tr key={index + 1}>
                  <th scope="row" className="ps-4 pe-2">
                    {index + 1}
                  </th>
                  <td>{item.product_name}</td>
                  <td>{item.product_condition}</td>
                  <td>
                    {calculateDuration(
                      item.auction_start_time,
                      item.auction_end_time
                    )}
                  </td>
                  <td>
                    <span
                      className={`badge text-bg-${
                        item.isSold ? "info" : "danger"
                      }`}
                    >
                      {item.isSold ? "True" : "False"}
                    </span>
                  </td>
                  <td className="d-flex justify-content-evenly">
                    <button className="btn btn-light-primary">
                      <EditIcon width="14" height="14" />
                    </button>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="btn btn-light-primary"
                        variant="success"
                      >
                        <MenuIcon width="14" height="14" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="employee-displaying d-flex flex-wrap-reverse align-items-center justify-content-between p-3 border-top">
          <div className="d-flex flex-wrap-reverse align-items-center mt-md-0 mt-3">
            <p className="mb-0 mt-sm-0 mt-1 displaying-records">
              Displaying {auctionData.length} for {totalPages} records
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
      </div>
    </>
  );
};

export default Table;
