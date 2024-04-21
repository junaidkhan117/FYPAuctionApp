import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ReactComponent as SearchIcon } from '../assets/images/new-icons/listing-search-icon.svg'
import { ReactComponent as FilterIcon } from '../assets/images/new-icons/listing-filter-icon.svg'
import { ReactComponent as EditIcon } from '../assets/images/new-icons/listing-edit-icon.svg'
import { ReactComponent as MenuIcon } from '../assets/images/new-icons/listing-menu-icon.svg'
import CardsPagination from './CardsPagination';
const Table = () => {
    return (
        <>
            <div className="container-fluid mt-1 bg-white card-Shadow rounded-2 px-0">
                <div className="d-flex justify-content-between flex-wrap align-items-center p-3 pb-0">
                    <div className="input mb-3">
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Please Enter"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button className="btn bg-primary rounded-end-2" variant="" id="button-addon2">
                            <SearchIcon className="SearchIcon mb-1" />
                            </Button>
                        </InputGroup>
                    </div>
                    <div className="mb-3 d-flex flex-wrap gap-2">
                        <button type="button" className="btn btn-light-primary px-3 py-2">
                            <FilterIcon className="filterIcon" width="11" height="13" />
                            Filter
                        </button>
                        <button type="button" className="btn btn-light-primary px-3 py-2">
                            <FilterIcon className="filterIcon" width="11" height="13" />
                            Sort By
                        </button>
                    </div>
                </div>
                <div className="table-responsive" style={{ height: "60vh" }}>
                    <table className="table Search-Employees table-borderless table-striped table-hover">
                        <thead className="Employees-border sticky-top bg-white" style={{ zIndex: "1 !important" }}>
                            <tr className="small">
                                <th scope="col" className="pb-3 ps-4 dashed-border-bottom">#</th>
                                <th scope="col" className="pb-3 dashed-border-bottom" style={{ minWidth: "150px" }}>Seller Name</th>
                                <th scope="col" className="pb-3 dashed-border-bottom" style={{ minWidth: "150px" }}>Phone Number</th>
                                <th scope="col" className="pb-3 dashed-border-bottom" style={{ minWidth: "150px" }}>Product Name</th>
                                <th scope="col" className="pb-3 dashed-border-bottom">Last Visit</th>
                                <th scope="col" className="pb-3 dashed-border-bottom">Status</th>
                                <th scope="col" className="pb-3 text-center dashed-border-bottom">Action</th>
                            </tr>
                        </thead>
                        <tbody className="small">
                            <tr className="mt-4">
                                <th scope="row" className="ps-4 pe-2">1</th>
                                <td>Jennifer Anyanwu</td>
                                <td>0312 3456789</td>
                                <td>BMW m4</td>
                                <td>22/12/2022</td>
                                <td>
                                    <span className="badge text-bg-info">sold out</span>
                                </td>
                                <td className="d-flex justify-content-evenly">
                                    <button className="btn btn-light-primary d-flex justify-content-center align-items-center border-0 px-2" href="#">
                                        <EditIcon className="svg-light-btn m-0" width="14" height="14" />
                                    </button>

                                    <Dropdown>
                                        <Dropdown.Toggle className="btn btn-light-primary d-flex justify-content-center align-items-center position-relative border-0 px-2" variant="success" id="dropdown-basic">
                                            <MenuIcon className="svg-light-btn m-0" width="14" height="14" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu border-0 Shadow" style={{ fontSize: "14px", minWidth: '73px !important' }}>
                                            <Dropdown.Item className="dropdown-item dropdown-menu-hover" href="#/action-1">View</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item dropdown-menu-hover" href="#/action-2">delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                            <tr className="mt-4">
                                <th scope="row" className="ps-4 pe-2">1</th>
                                <td>Jennifer Anyanwu</td>
                                <td>0312 3456789</td>
                                <td>BMW m4</td>
                                <td>22/12/2022</td>
                                <td>
                                    <span className="badge text-bg-danger">Unsold</span>
                                </td>
                                <td className="d-flex justify-content-evenly">
                                    <button className="btn btn-light-primary d-flex justify-content-center align-items-center border-0 px-2" href="#">
                                        <EditIcon className="svg-light-btn m-0" width="14" height="14" />
                                    </button>

                                    <Dropdown>
                                        <Dropdown.Toggle className="btn btn-light-primary d-flex justify-content-center align-items-center position-relative border-0 px-2" variant="success" id="dropdown-basic">
                                            <MenuIcon className="svg-light-btn m-0" width="14" height="14" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu border-0 Shadow" style={{ fontSize: "14px", minWidth: '73px !important' }}>
                                            <Dropdown.Item className="dropdown-item dropdown-menu-hover" href="#/action-1">View</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item dropdown-menu-hover" href="#/action-2">delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="employee-displaying d-flex flex-wrap-reverse align-items-center justify-content-between p-3 border-top">
                    <div className="d-flex flex-wrap-reverse align-items-center mt-md-0 mt-3">
                        <p className="mb-0 mt-sm-0 mt-1 displaying-records">Displaying 10 for 230 records</p>
                        <div className="d-flex justify-content-center align-items-center ms-sm-0 ms-2">
                            <select className="ms-sm-4 form-select input-flied gray border-0">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                                <option>50</option>
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
    )
}

export default Table