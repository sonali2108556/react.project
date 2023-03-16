import React from "react";
import logo from "../../assets/images/web.png"

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="container ">
                <div className="row">
                    <div className="col-12 ">
                        <div className="row">
                            <div className="footer-text col-12 col-sm-3 ">
                                <div className="image-name">
                                    <img src={logo} width="80" height="80" alt="" />
                                </div>
                                <div className="text">
                                    <p>Providing design,development,and
                                        maintenance Services and support to clients
                                        across the global.</p>
                                    <p>A. Sah Bhawan,Vaishali,Bihar-844118,India</p>

                                </div>
                            </div>
                            <div className="footer-text col-12 col-sm-3">
                                <div className="text">
                                    <h3 className="light"><strong>Services</strong></h3>
                                    <p>Web App development</p>
                                    <p>Mobile App development</p>
                                    <p>Maintenance</p>
                                </div>
                            </div>
                            <div className="footer-text col-12 col-sm-3">
                                <div className="text">
                                    <h3 className="light"><strong>Careers</strong></h3>
                                    <p>Frontend developer</p>
                                    <p>Backend developer</p>
                                    <p>UI Designer</p>
                                    <h3 className="light"><strong>Others</strong></h3>
                                    <p>Training+Internship program</p>
                                </div>
                            </div>
                            <div className="footer-text col-12 col-sm-3">
                                <div className="text ">
                                    <h3 className="light"><strong>Quick Links</strong></h3>
                                    <p>Home</p>
                                    <p> Privacy policy</p>
                                    <p>Terms of use</p>
                                    <p>Refund/Cancellation policy</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;