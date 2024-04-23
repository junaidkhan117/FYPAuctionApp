import React, { useEffect, useState } from 'react'
import logoLight from "../assets/images/logo/Logo-light.png";
import logoDark from "../assets/images/logo/Logo-dark.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getFromLocalStorage } from "../utils/localStorage";
import { deleteFromLocalStorage } from "../utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Authentication/Login/loginSlice";
import { userLoggedOut } from "../store/userSlice";
// import { useNavigate } from "react-router";
const NavBar = () => {
  const { pathname } = useLocation();
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const authToken = getFromLocalStorage("authToken");
  const userType = getFromLocalStorage("userType");
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(userLoggedOut());
    deleteFromLocalStorage("authToken");
    deleteFromLocalStorage("email");
    deleteFromLocalStorage("user");
    deleteFromLocalStorage("userId");
    deleteFromLocalStorage("userType");
    navigate("/login");
  };

  const handlesell = () => {
    if (userType == 'seller') {
      navigate('/productdetails')
    }
    else {
      handleLogout()
    }
  }

  return (
    <>
      <nav
        className={`navbar navbar-expand-md dark-navbar fixed-top ${scrollY > 50 || innerWidth < 768 ? "scrolled" : "container-lg"
          }`}
      >
        <div className="container-lg">
          <Link to="/" className="navbar-brand ps-0 ps-md-4">
            <img
              src={scrollY > 50 || innerWidth < 768 ? logoLight : logoDark}
              className="brandImg"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto nav-links">
              <li className="nav-item pe-4">
                <Link to="/"
                  className={`nav-link nav-border ${pathname === "/" && 'active'}`}
                  aria-current="page"
                >
                  Home
                  <span className="bottom-border "></span>
                </Link>
              </li>

              {userType == 'seller' ? null :
                <>
                  <li className="nav-item pe-4">
                    <Link to={"/categoryListing"} className={`nav-link nav-border ${pathname === "/categoryListing" && 'active'}`}>
                      Category Listing
                      <span className="bottom-border"></span>
                    </Link>
                  </li>

                  <li className="nav-item pe-4">
                    <Link to={"/products"} className={`nav-link nav-border ${pathname === "/products" && 'active'}`}>
                      Products
                      <span className="bottom-border"></span>
                    </Link>
                  </li>
                </>
              }
              <li className="nav-item pe-0 pe-md-4">
                <button className="nav-link btn btn-gradiant text-white"
                  onClick={handlesell}
                // href="Products-Details.html"
                >
                  <span className="fw-semibold">Sell</span> your product
                </button>
              </li>
              {authToken &&
                <li className="nav-item pe-0 pe-md-4">
                  <button
                    className="nav-link btn btn-gradiant text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar