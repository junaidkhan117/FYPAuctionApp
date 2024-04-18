import React, { useState } from 'react'
import LogoWhite from '../../assets/images/logo/Logo-white.png';
import signupBid from "../../assets/images/imgs/signup-bid-img.png"
import { useLogin } from "../../hooks/common";
const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const onError = (error) => {
        setPasswordError("Invalid Password");
        setUserNameError("Invalid Username");
    };

    const { mutate: login, isLoading } = useLogin(onError);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ userName, password });
    };
    const handleFocus = () => {
        setPasswordError("");
        setUserNameError("");
    };

    return (
        <>
            <div className="container-fluid">
                <div class="row  signup" style={{ height: '100vh' }}>
                    <div class="col-md-6 bg-img p-sm-5 p-0 text-center">
                        <div class="py-5">
                            <img class="" src={LogoWhite} alt="" />
                        </div>
                        <div class="pb-5 d-none d-md-block">
                            <img src={signupBid} alt="" />
                        </div>
                        <div class="d-none d-md-block">
                            <h3 class="mb-4 text-white">Welcome Back</h3>
                            <p class="mb-0 mx-lg-5 px-lg-5 text-white">Unlock exclusive auctions for cars, watches, and digital accessories at BidHub. Elevate your bidding experience and seize luxury with a click.</p>
                        </div>
                    </div>
                    <div class="col-md-6  p-sx-5">
                        <div class="py-5 text-center">
                            <h2 class="mb-0">SIGN IN TO YOUR ACCOUNT</h2>
                            <p class="small">Don't have an account? <span class="text-danger">Join here</span>
                            </p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div class="p-sm-5 p-3 p-lg-5 pt-sm-5 pt-0 ">
                                <div class="mb-3">
                                    <label for="" class="form-label regular small">Username or email address</label>
                                    <input type="email" class="form-control "
                                        placeholder="Please Enter"
                                        value={userName}
                                        onFocus={handleFocus}
                                        onChange={(e) => {
                                            setUserName(e.target.value);
                                        }}
                                    />
                                    {userNameError ? userNameError: ''}
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label regular small">Password</label>
                                    <input type="email" class="form-control " placeholder="Please Enter"
                                    onFocus={handleFocus}
                                    value={password}
                                    onChange={(e) => {
                                      setPassword(e.target.value);
                                    }}
                                    />
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="" />
                                        <label class="form-check-label regular small" for="">Remember Me</label>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-evenly align-items-center pt-5 mt-3">
                                    <button class="btn btn-danger px-5 w-75 text-white" type="submit">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login