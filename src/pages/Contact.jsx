import React from 'react'
import Footer from "../components/Footer";
import Emailimg from '../assets/images/email.png'
import Phoneimg from '../assets/images/PHONE.png'
const Contact = () => {
  return (
    <>
     <div class="Page-heading-contact text-center">
        <div class="d-flex justify-content-center">
            <div class="col-12 col-md-6">
                <h1 class="text-white text-uppercase">NEED HELP </h1>
                <p class="text-white text-uppercase mb-0 fs-1">We are here for you 24/7</p>
                <p class="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eveniet reprehenderit ratione ad
                    perspiciatis repudiandae iste ipsam temporibus sit quo! Incidunt, necessitatibus fugiat.
                </p>
            </div>
        </div>
    </div>
    <div class="contactus-bg">
        <div class="container-xxl justify-content-center align-items-center  pt-5">
            <div class="text-center pt-md-4">
                <h1 class="mb-0">
                    <span class="  mb-0"> Customer </span><span class="text-primary"><b> Service</b></span>
                </h1>
                <p class="mb-0 paragraph small">How can we help?</p>
                <div class="row py-5 g-5 w-100 mx-0">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="card contact-card p-3 py-4">
                            <div class="card-body">
                                <img src={Emailimg} alt="" />
                                <h6 class="card-subtitle my-3 pt-2  text-primary"><strong>Send us a message</strong>
                                </h6>
                                <p class="card-text paragraph">Contact our agents about your booking, and we'll reply as soon as possible.</p>
                                <p class="card-text offer text-primary"><strong>support@gmail.com</strong></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="card contact-card p-3 py-4">
                            <div class="card-body">
                                <img src={Phoneimg} alt="" />
                                <h6 class="card-subtitle my-3 pt-2  text-primary"><strong>Call us</strong></h6>
                                <p class="card-text paragraph">For anything urgent, you can call us 24/7 on a local or
                                    international phone number.</p>
                                <p class="card-text   text-primary"><strong>+92 213 4567 891</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="container contect-us-form pb-5">
        <div class="row flex-wrap-reverse">
            <div class="col-lg-8 mt-sm-5 px-4 px-lg-3">
                <h2 class="text-uppercase ">submit <span class="text-primary font-family-bold"> request </span></h2>
                <form class="row g-3 mt-5">

                    <div class="col-md-6">
                        <label class="form-label">Full Name</label>
                        <input type="email" class="form-control " id="inputEmail4" placeholder="Enter your full name" />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Email Address</label>
                        <input type="password" class="form-control " id="inputPassword4" placeholder="Type Email" />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Phone Number</label>
                        <div class="  d-flex phone  row m-0">
                            <div class="col-4 p-0">
                                <select class="form-select phone-select" name="countryCode" id="countryCode">
                                    <option>+92</option>
                                    <option>+91</option>
                                    <option>+90</option>
                                </select>
                            </div>
                            <div class="col-8 p-0">
                                <input type="text" class="border-0 form-control phone-number" name="phone" id="phone"
                                    aria-describedby="helpId" placeholder="312 3456 759" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Subject</label>
                        <input type="password" class="form-control " id="inputPassword4"
                            placeholder="Please Enter..." />
                    </div>
                    <div class="col-12">
                        <label class="form-label">Description</label>
                        <textarea class="form-control " id="exampleFormControlTextarea1" placeholder="Please Enter..."
                            rows="3"></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary"> Submit </button>
                    </div>
                </form>
            </div>
            <div class="col-lg-4 d-none d-lg-block mb-5">
                <img src="./assets/images/submuit-req.png" class="object-fit-cover w-100" alt=""/>
            </div>
        </div>
    </div>
    <Footer />
  </>
  )
}

export default Contact