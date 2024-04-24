import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Table from "../components/Table";
import axios from "axios";

const ListingInformation = () => {
 
  return (
    <>
      <div className="container-fluid background p-md-5 p-3 mt-5">
        <div className="">
          <div className="col-6 py-5">
            <h4 className="mb-0">Listing</h4>
          </div>
        </div>
        <Table />
        
      </div>
      <Footer />
    </>
  );
};

export default ListingInformation;
