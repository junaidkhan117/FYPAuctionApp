import React from 'react'
import { useCreateUser } from '../hooks/common';
import LogoWhite from '../assets/images/logo/Logo-white.png';
import signupBid from "../assets/images/imgs/signup-bid-img.png"
const Signup = () => {
    
  return (
    <>
    <div className="container-fluid">
    <div class="row signup" style={{height: "100vh"}}>
    <div class="col-md-6 bg-img p-sm-5 p-0 text-center">
        <div class="py-5">
            <img class="" src={LogoWhite} alt=""/>
        </div>
        <div class="pb-5 d-none d-md-block">
            <img src={signupBid} alt=""/>
        </div>
        <div class="d-none d-md-block">
            <h3 class="mb-4 text-white">Welcome Back</h3>
            <p class="mb-0 mx-sm-5 mx-md-0 mx-lg-5 px-sm-5 px-md-0 px-lg-5 text-white">Unlock exclusive auctions for cars, watches, and digital accessories at BidHub. Elevate your bidding experience and seize luxury with a click.</p>
        </div>
    </div>
    <div class="col-md-6  p-sm-5">
        <div class="py-5 text-center">
            <h2 class="mb-0">Create a new account</h2>
            <p class="small">Already have an account?<span class="text-danger">Sign-in here</span>
            </p>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="mb-3">
                    <label for="" class="form-label regular small">First Name</label>
                    <input type="email" class="form-control " name="" id="" aria-describedby="emailHelpId" placeholder="Please Enter"/>
                </div>
            </div>
                <div class="col-6">
                <div class="mb-3">
                    <label for="" class="form-label regular small">Last Name</label>
                    <input type="email" class="form-control " name="" id="" aria-describedby="emailHelpId" placeholder="Please Enter"/>
                </div>
            </div>
            <div class="col-6">
        <div class="mb-3">
            <label for="" class="form-label regular small">Username or email address</label>
            <input type="email" class="form-control " name="" id="" aria-describedby="emailHelpId" placeholder="Please Enter"/>
        </div>
    </div>
    <div class="col-6">
        <div class="mb-3">
            <label for="" class="form-label regular small">Phone Number</label>
            <input type="number" class="form-control " name="" id="" aria-describedby="emailHelpId" placeholder="Please Enter"/>
        </div>
    </div>
        <div class="col-6">
        <div class="mb-3">
            <label for="" class="form-label regular small">Password</label>
            <input type="email" class="form-control " name="" id="" aria-describedby="emailHelpId" placeholder="Please Enter"/>
        </div>
    </div>
    <div class="col-6">
        <div class="mb-3">
            <label for="" class="form-label regular small">Confirm Password</label>
            <input type="email" class="form-control " name="" id="" aria-describedby="emailHelpId" placeholder="Please Enter"/>
        </div>
    </div>
        <div class="d-flex justify-content-evenly align-items-center pt-5 mt-3">
            <a href={{}} class="btn btn-danger px-5 w-75 text-white" type="button">
                SignUp
            </a>
        </div>
    </div>
    </div>
 </div>
    </div>
    </>
  )
}

export default Signup
