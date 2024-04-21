import React, { useState } from "react";
import LogoWhite from "../../assets/images/logo/Logo-white.png";
import signupBid from "../../assets/images/imgs/signup-bid-img.png";
import { useLogin } from "../../hooks/common";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState("faisal@gmail.com");
  const [password, setPassword] = useState("123456");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginResponse, setLoginResponse] = useState(null);
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
                    Username or email address
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
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label regular small">
                      Remember Me
                    </label>
                  </div>
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
    </>
  );
};

export default Login;
