import React, { useState } from "react";
import Footer from "../components/Footer";
import Emailimg from "../assets/images/email.png";
import Phoneimg from "../assets/images/PHONE.png";
import axios from "axios";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendEmail = async () => {
    const url = "http://127.0.0.1:8000/v1/api/contact/create";

    // Data you want to send in the request body
    const data = {
      full_name: fullName,
      email: emailAddress,
      phone_number: phoneNumber,
      subject: subject,
      message: text,
    };

    // Optional headers, if needed
    const headers = {
      "Content-Type": "application/json",
      // Add any other headers you need
    };

    // Making the POST request using Axios
    axios
      .post(url, data, { headers })
      .then((response) => {
        // Handle success
        console.log("Response:", response.data);
        alert("Form Submitted Successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    sendEmail(); // Call the sendEmail function
  };

  return (
    <>
      <div className="Page-heading-contact text-center">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-6">
            <h1 className="text-white text-uppercase">NEED HELP </h1>
            <p className="text-white text-uppercase mb-0 fs-1">
              We are here for you 24/7
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              eveniet reprehenderit ratione ad perspiciatis repudiandae iste
              ipsam temporibus sit quo! Incidunt, necessitatibus fugiat.
            </p>
          </div>
        </div>
      </div>
      <div className="contactus-bg">
        <div className="container-xxl justify-content-center align-items-center  pt-5">
          <div className="text-center pt-md-4">
            <h1 className="mb-0">
              <span className="  mb-0"> Customer </span>
              <span className="text-primary">
                <b> Service</b>
              </span>
            </h1>
            <p className="mb-0 paragraph small">How can we help?</p>
            <div className="row py-5 g-5 w-100 mx-0">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card contact-card p-3 py-4">
                  <div className="card-body">
                    <img src={Emailimg} alt="" />
                    <h6 className="card-subtitle my-3 pt-2  text-primary">
                      <strong>Send us a message</strong>
                    </h6>
                    <p className="card-text paragraph">
                      Contact our agents about your booking, and we'll reply as
                      soon as possible.
                    </p>
                    <p className="card-text offer text-primary">
                      <strong>support@gmail.com</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card contact-card p-3 py-4">
                  <div className="card-body">
                    <img src={Phoneimg} alt="" />
                    <h6 className="card-subtitle my-3 pt-2  text-primary">
                      <strong>Call us</strong>
                    </h6>
                    <p className="card-text paragraph">
                      For anything urgent, you can call us 24/7 on a local or
                      international phone number.
                    </p>
                    <p className="card-text   text-primary">
                      <strong>+92 213 4567 891</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container contect-us-form pb-5">
        <div className="row flex-wrap-reverse">
          <div className="col-lg-8 mt-sm-5 px-4 px-lg-3">
            <h2 className="text-uppercase ">
              submit{" "}
              <span className="text-primary font-family-bold"> request </span>
            </h2>
            <form className="row g-3 mt-5" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control "
                  value={fullName}
                  onChange={handleFullNameChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control "
                  value={emailAddress}
                  onChange={handleEmailAddressChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <div className="  d-flex phone  row m-0">
                  <div className="col-4 p-0">
                    <select
                      className="form-select phone-select"
                      name="countryCode"
                    >
                      <option>+92</option>
                      <option>+91</option>
                      <option>+90</option>
                    </select>
                  </div>
                  <div className="col-8 p-0">
                    <input
                      type="tel"
                      className="border-0 form-control phone-number"
                      name="phone"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      aria-describedby="helpId"
                      placeholder="312 3456 759"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control "
                  value={subject}
                  onChange={handleSubjectChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control "
                  value={text}
                  onChange={handleTextChange}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary"> Submit </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4 d-none d-lg-block mb-5">
            <div class="col-lg-4 d-none d-lg-block mb-5">
              <img
                src="./assets/images/submuit-req.png"
                class="object-fit-cover w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
