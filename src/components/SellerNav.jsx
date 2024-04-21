import React from 'react'
import logoLight from "../assets/images/logo/Logo-light.png";
import { Link, useLocation } from 'react-router-dom';

const SellerNav = () => {
  const { pathname } = useLocation();

  return (
    <>
        <nav className="navbar navbar-expand-md scrolled dark-navbar fixed-top">
        <div className="container-lg">
            <Link to="/" className="navbar-brand ps-0 ps-md-4" >
                <img src={logoLight}
                    className="brandImg" alt=''/>
                    </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto nav-links">
                    <li className="nav-item pe-4">
                        <Link to="/productdetails" class={`nav-link nav-border  ${pathname === '/productdetails' && 'active' }`} >Products Details
                            <span className="bottom-border"></span>
                        </Link>
                    </li>
                    <li className="nav-item pe-4">
                        <Link to="/listinginfo" class={`nav-link nav-border  ${pathname === '/listinginfo' && 'active' }`} >Listing Information
                            <span className="bottom-border"></span>
                        </Link>
                    </li>

                    <li className="nav-item pe-4">
                        <a className="nav-link nav-border" href={{}}>Contact
                            <span className="bottom-border"></span>
                        </a>
                    </li>
                    <li className="nav-item pe-0 pe-md-4">
                        <a className="nav-link btn btn-gradiant text-white" href={{}}> <span
                                className="fw-semibold">Log</span>out</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default SellerNav