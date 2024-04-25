import React, { useState } from "react";
import LogoWhite from "../../assets/images/logo/Logo-white.png";
import signupBid from "../../assets/images/imgs/signup-bid-img.png";
import { useLogin } from "../../hooks/common";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginResponse, setLoginResponse] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const onError = (error) => {
    setPasswordError("Invalid Password");
    setUserNameError("Invalid Username");
  };
  const handleSuccess = (data) => {
    console.log(data)
    navigate("/");

  };

  const { mutate: loginApi, data } = useLogin(onError, handleSuccess);

  const handleLogin = (e) => {
    e.preventDefault();
    const Data = { email: userName, password: password };
    loginApi(Data);
  };
  const handleFocus = () => {
    setPasswordError("");
    setUserNameError("");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row  signup" style={{ height: "100vh" }}>
          <div className="col-md-6 bg-img p-sm-5 p-0 text-center">
            <div className="py-5">
              <img className="" src={LogoWhite} alt="" />
            </div>
            <div className="pb-5 d-none d-md-block">
              <img src={signupBid} alt="" />
            </div>
            <div className="d-none d-md-block">
              <h3 className="mb-4 text-white">Welcome Back</h3>
              <p className="mb-0 mx-lg-5 px-lg-5 text-white">
                Unlock exclusive auctions for cars, watches, and digital
                accessories at BidHub. Elevate your bidding experience and seize
                luxury with a click.
              </p>
            </div>
          </div>
          <div className="col-md-6  p-sx-5">
            <div className="py-5 text-center">
              <h2 className="mb-0">SIGN IN TO YOUR ACCOUNT</h2>
              <p className="small">
                Don't have an account? {" "}
                <Link to="/signup" >
                  <span className="text-danger">Join here</span>
                </Link>
              </p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="p-sm-5 p-3 p-lg-5 pt-sm-5 pt-0 ">
                <div className="mb-3">
                  <label className="form-label regular small">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control "
                    placeholder="Please Enter"
                    value={userName}
                    onFocus={handleFocus}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  {userNameError ? userNameError : ""}
                </div>
                <div className="mb-3">
                  <label className="form-label regular small">Password</label>
                  <input
                    type="password"
                    className="form-control "
                    placeholder="Please Enter"
                    onFocus={handleFocus}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button href="" className="border-0 bg-transparent" onClick={handleShow}>
                    <span className="text-danger" >Forget Password?</span>
                  </button>
                </div>
                <div className="d-flex justify-content-evenly align-items-center pt-5 mt-3">
                  <button
                    className="btn btn-danger px-5 w-75 text-white"
                    type="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Model */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton className="border-bottom-0">
        </Modal.Header>
        <Modal.Body >
          <label className="form-label regular small">
            Email address
          </label>
          <input
            type="email"
            className="form-control "
            placeholder="Please Enter"
            value={userName}
            onFocus={handleFocus}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer className="border-top-0">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
