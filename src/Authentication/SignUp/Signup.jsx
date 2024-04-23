import React, { useState } from 'react'
import { useSignUp } from '../../hooks/common';
import LogoWhite from '../../assets/images/logo/Logo-white.png';
import signupBid from "../../assets/images/imgs/signup-bid-img.png"
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [userType, setuserType] = useState(true);
    const onError = (error) => {
        console.log(error)
    };
    const handleSuccess = (data) => {
        console.log(data)
        navigate("/login");
    };
    const { mutate: SignUpUser } = useSignUp(onError, handleSuccess);
console.log(userType)
    const handleSignUp = (e) => {
        e.preventDefault();
        //   const Data = { email: userName, password: password };
        const Data = {
            user: {
                username: userName,
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName
            },
            phone: phoneNo,
            user_type: userType ? 'buyer' : 'seller'
        }
        SignUpUser(Data);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row signup" style={{ height: "100vh" }}>
                    <div className="col-md-6 bg-img p-sm-5 p-0 text-center">
                        <div className="py-5">
                            <img className="" src={LogoWhite} alt="" />
                        </div>
                        <div className="pb-5 d-none d-md-block">
                            <img src={signupBid} alt="" />
                        </div>
                        <div className="d-none d-md-block">
                            <h3 className="mb-4 text-white">Welcome Back</h3>
                            <p className="mb-0 mx-sm-5 mx-md-0 mx-lg-5 px-sm-5 px-md-0 px-lg-5 text-white">Unlock exclusive auctions for cars, watches, and digital accessories at BidHub. Elevate your bidding experience and seize luxury with a click.</p>
                        </div>
                    </div>
                    <div className="col-md-6  p-sm-5">
                        <div className="py-5 text-center">
                            <h2 className="mb-0">Create a new account</h2>
                            <p className="small">Already have an account? {" "}
                                <Link to="/login" >
                                    <span className="text-danger">Sign-in here</span>
                                </Link>
                            </p>
                        </div>
                        <form onSubmit={handleSignUp}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label regular small">First Name</label>
                                        <input type="text" className="form-control " value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Please Enter" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label regular small">Last Name</label>
                                        <input type="text" className="form-control " value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Please Enter" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label regular small">Username</label>
                                        <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Please Enter" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label regular small">Email address</label>
                                        <input type="email" className="form-control " value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please Enter" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label regular small">Phone Number</label>
                                        <input type="number" className="form-control " value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder="Please Enter" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-3">
                                        <label className="form-label regular small">Password</label>
                                        <input type="password" className="form-control " value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please Enter" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-check mb-3 d-flex gap-5">
                                        <div className="">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                            checked={userType}
                                            onChange={(e)=> setuserType(e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Buyer
                                        </label>
                                        </div>
                                        <div className="">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault2"
                                            onChange={(e)=> setuserType(false)}
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Seller
                                        </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center pt-5 mt-3">
                                    <button className="btn btn-danger px-5 w-75 text-white" type="submit">
                                        SignUp
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

export default Signup
