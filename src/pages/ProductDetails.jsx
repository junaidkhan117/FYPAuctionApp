import React, { useRef, useEffect, useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import Footer from "../components/Footer";
import AuctionItems from '../assets/images/imgs/Auction-Items.png';
import DeleteIcon from '../assets/images/icons/delete.png'
import { ReactComponent as LocationIcon } from "../assets/images/icons/location-icon.svg";
import { ReactComponent as TagIcon } from "../assets/images/icons/price-area-tag.svg";
import { ReactComponent as DetailsIcon } from "../assets/images/icons/featrures.svg";
import UploadIcon from '../assets/images/icons/upload.png'



import { getFromLocalStorage } from "../utils/localStorage";
import { deleteFromLocalStorage } from "../utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Authentication/Login/loginSlice";
import { userLoggedOut } from "../store/userSlice";
import { useNavigate } from 'react-router-dom';


const ProductDetails = () => {
    const parentScrollContainerRef = useRef();
    const [activeSection, setActiveSection] = useState("section-1"); // State to track active section
    const [imgsAlertMsg, setimgsAlertMsg] = useState('')



    const userType = getFromLocalStorage("userType");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (userType == 'buyer') {
            dispatch(logout());
            dispatch(userLoggedOut());
            deleteFromLocalStorage("authToken");
            deleteFromLocalStorage("email");
            deleteFromLocalStorage("user");
            deleteFromLocalStorage("userId");
            deleteFromLocalStorage("userType");
            navigate("/login");
        }
    }, []);

    //   useEffect(() => {
    //     if (parentScrollContainerRef.current) {
    //       parentScrollContainerRef.current.style.overflowY = "scroll";
    //       parentScrollContainerRef.current.style.height = "50vh";
    //       parentScrollContainerRef.current.style.position = "relative";
    //     }
    //   }, []);

    const onPress = (e) => {
        e.preventDefault();
        const sectionId = e.currentTarget.href.split("#")[1];
        setActiveSection(sectionId); // Set active section on click

        const target = window.document.getElementById(
            e.currentTarget.href.split("#")[1]
        );
        if (target) {
            var headerOffset = 250;
            var elementPosition = target.getBoundingClientRect().top;
            var offsetPosition = elementPosition + parentScrollContainerRef.current.scrollTop - headerOffset;

            parentScrollContainerRef.current.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    // image uploader
    const [images, setImages] = useState([]);

    const handleFileChange = (event) => {
        if (images.length >= 20) {
            setimgsAlertMsg("You can only upload up to 20 images.");
            return;
        }

        const files = event.target.files;
        const newImages = [...images];
        let totalImagesAfterUpload = newImages.length + files.length;

        if (totalImagesAfterUpload > 20) {
            setimgsAlertMsg("You cannot upload more than 20 images. Please select fewer images.");
            return;
        }
        else {
            setimgsAlertMsg("");

        }

        for (let i = 0; i < files.length; i++) {
            if (files[i].size > 20971520) {
                setimgsAlertMsg("Image size must not exceed 20 MB");
                return;
            }
            const fileTypes = ['image/jpeg', 'image/png'];
            if (!fileTypes.includes(files[i].type)) {
                setimgsAlertMsg("Only JPEG and PNG images are accepted.");
                return;
            }
            const imageUrl = URL.createObjectURL(files[i]);
            newImages.push(imageUrl);
        }

        setImages(newImages);
        event.target.value = ''; // clear file input
    };

    const handleDelete = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    return (
        <>

            <div className="container-fluid background p-md-5 p-3 mt-5">
                <div className="row align-items-center justify-content-between my-md-5 mb-3">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h4 className="mb-3">Reach Millions of Buyers on our Platforms</h4>
                    </div>
                    <div className="col-lg-6 text-center d-none d-md-block">
                        <img src={AuctionItems} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 d-none d-lg-block">
                        <div id="simple-list-example" className="d-flex flex-column gap-3 details-list text-center">
                            <a className={`p-3 rounded text-start ss-item-demo-2 ${activeSection === "section-1" ? "active" : ""}`} onClick={(e) => onPress(e)} href={"#section-1"} data-to-scrollspy-id="section-1" >

                                <LocationIcon width="15" height="15" className="mb-1 me-2" />
                                Product Description
                            </a>
                            <a className={`p-3 rounded text-start ss-item-demo-2 ${activeSection === "section-2" ? "active" : ""}`} onClick={(e) => onPress(e)} href={"#section-2"} data-to-scrollspy-id="section-2" >
                                <TagIcon width="15" height="15" className="mb-1 me-2" />
                                Product Images
                            </a>
                            <a className={`p-3 rounded text-start ss-item-demo-2 ${activeSection === "section-3" ? "active" : ""}`} onClick={(e) => onPress(e)} href={"#section-3"} data-to-scrollspy-id="section-3" >
                                <DetailsIcon width="15" height="15" className="mb-1 me-2" />
                                Biding Details
                            </a>
                        </div>

                    </div>

                    <div className="col-lg-8">
                        <div className="scrollspy"
                            ref={parentScrollContainerRef}
                        >
                            <ScrollSpy
                                parentScrollContainerRef={parentScrollContainerRef}
                                activeclassName="active"
                                offsetBottom={100}
                                scrollThrottle={80}
                                useBoxMethod
                            >
                                <div id="section-1" className="bg-white rounded-2 p-3 mb-5 scroll-form">
                                    <h5>Product Description</h5>
                                    <div className="row">
                                        <div className="">
                                            <label className="form-label mb-3 small">Product Categories</label>
                                            <select className="form-select form-control mb-3" name="" id="validationServer05" aria-describedby="validationServer05Feedback">
                                                <option selected="">Please Select</option>
                                                <option value="">New Delhi</option>
                                                <option value="">Istanbul</option>
                                                <option value="">Jakarta</option>
                                            </select>
                                        </div>
                                        <div className="">
                                            <label className="form-label mb-3 small">Product Title</label>
                                            <input type="text" className="form-control mb-3" placeholder="Please Enter" />
                                        </div>
                                        <div className="" bis_skin_checked="1">
                                            <label className="form-label mb-3 small">Description</label>
                                            <div className="form-floating mb-3" bis_skin_checked="1">
                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                                <label htmlFor="floatingTextarea2">Please Enter</label>
                                            </div>
                                        </div>
                                        <div className="">
                                            <label className="form-label mb-3 small">Product Condition</label>
                                            <select className="form-select form-control mb-3" name="" id="validationServer05" aria-describedby="validationServer05Feedback">
                                                <option selected="">Please Select</option>
                                                <option value="">New Delhi</option>
                                                <option value="">Istanbul</option>
                                                <option value="">Jakarta</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div id="section-2" className="bg-white rounded-2 p-3 mb-5 scroll-form">
                                    <h5>Product Images</h5>
                                    <h6 className="small">Upload Images</h6>
                                    <p className="small text-gray">Upload up to 20 Images. JPEG, PNG Images Only accepted, Image size
                                        must not exceed 20 MB</p>
                                    <div className=" d-flex gap-2">
                                        <div className="">
                                            <label className="btn btn-default btn-file border-0 p-3 position-relative">
                                                <div className="uploadFile d-flex justify-content-center align-items-center ">
                                                    <img src={UploadIcon} height="40" width="40" id="image-preview" alt="" />
                                                </div>
                                                <input type="file" className="d-none" id="file-input" onChange={handleFileChange} multiple required="" />
                                            </label>
                                        </div>
                                        <div className="image-container d-flex gap-3 flex-wrap position-relative">
                                            {images.map((imageUrl, index) => (
                                                <div key={index} className="upload-property-image">
                                                    <div className="del-icon" onClick={() => handleDelete(index)}>
                                                        <img src={DeleteIcon} alt="" />
                                                    </div>
                                                    <img className="uploaded-image" src={imageUrl} alt="" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="ImageAlert" >
                                        {imgsAlertMsg ? imgsAlertMsg : null}
                                    </div>

                                </div>

                                <div id="section-3" className="bg-white rounded-2 p-3  scroll-form pb-custom" >
                                    <h5 className="my-3">Biding Details</h5>
                                    <div className="row align-items-end ">
                                        <div className="">
                                            <label className="form-label mb-3 small">Starting Bid Price</label>
                                            <input type="text" className="form-control mb-3" placeholder="Please Enter" />
                                            <div className="d-flex justify-content-end mt-3">
                                            <button className="nav-link btn btn-gradiant text-white p-2">
                                            Price Recommendation 
                                            </button>
                                            </div>
                                        </div>
                                        <div className="">
                                            <label className="form-label mb-3 small">Auction Duration</label>
                                            <select className="form-select form-control mb-3" name="" id="validationServer05" aria-describedby="validationServer05Feedback">
                                                <option selected="">Please Select</option>
                                                <option value="">12 hrs</option>
                                                <option value="">24 hrs</option>
                                                <option value="">3 days</option>
                                                <option value="">7 days</option>
                                                <option value="">15 days</option>
                                                <option value="">30 days</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </ScrollSpy>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                    <button className="nav-link btn btn-gradiant text-white p-2">
                        Add Post
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;