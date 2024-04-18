import React from 'react'
import logoLight from "../assets/images/logo/Logo-light.png";
import { Link, useLocation } from 'react-router-dom';

const SellerNav = () => {
  const { pathname } = useLocation();

  return (
    <>
        <nav class="navbar navbar-expand-md scrolled dark-navbar fixed-top">
        <div class="container-lg">
            <Link to="/" class="navbar-brand ps-0 ps-md-4" >
                <img src={logoLight}
                    class="brandImg" alt=''/>
                    </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto nav-links">
                    <li class="nav-item pe-4">
                        <Link to="/productdetails" class={`nav-link nav-border  ${pathname === '/productdetails' && 'active' }`} >Products Details
                            <span class="bottom-border"></span>
                        </Link>
                    </li>
                    <li class="nav-item pe-4">
                        <Link to="/listinginfo" class={`nav-link nav-border  ${pathname === '/listinginfo' && 'active' }`} >Listing Information
                            <span class="bottom-border"></span>
                        </Link>
                    </li>

                    <li class="nav-item pe-4">
                        <a class="nav-link nav-border" href={{}}>Contact
                            <span class="bottom-border"></span>
                        </a>
                    </li>
                    <li class="nav-item pe-0 pe-md-4">
                        <a class="nav-link btn btn-gradiant text-white" href={{}}> <span
                                class="fw-semibold">Log</span>out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default SellerNav