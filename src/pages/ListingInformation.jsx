import React from 'react'
import Footer from "../components/Footer";
import Table from '../components/Table';
const ListingInformation = () => {
    return (
        <>
            <div class="container-fluid background p-md-5 p-3 mt-5">
            <div class="">
                <div class="col-6 py-5">
                    <h4 class="mb-0">Listing</h4>
                </div>
            </div>
            <Table />
            </div>
            <Footer />
        </>
    )
}

export default ListingInformation