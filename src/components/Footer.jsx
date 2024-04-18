import React from 'react'
import LogoDark from "../assets/images/logo/Logo-dark.png"
const Footer = () => {
  return (
    <>
    <footer className="">
        <div className="footer-small bg-black text-center">
          <img src={LogoDark} alt="" />
        </div>
        <div className="bg-black text-center py-2 footer-copyright">
          <a href={{}} className="text-decoration-none">
            @OnlineBiding.com
          </a>{" "}
          2024, All Rights Reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer