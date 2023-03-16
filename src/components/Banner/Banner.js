import React from "react";
import logo from "../../assets/images/web.png"
import BannerImage from "./BannerImage";
import BannerText from "./BannerText";

function Banner (props) {
    return (
        <div className="back">
            <div className="dotted">
        </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-6 logo">
                    <img src={logo} width="100" height="100" alt="" />
                       <BannerText/> 
                    </div>
                    <BannerImage/>
                </div>
            </div>
        </div>
    )
}
export default Banner;