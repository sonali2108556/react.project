import React from "react";

function BannerText(props) {
    return (
        <div>       
            <h4> <strong> FOR THE GROWTH OF YOUR</strong></h4>
            <h1  className="blue"><strong>BUSINESS.</strong></h1>
            <h1  className="yellow"><strong>SOFTWARE DEVELOPMENT</strong></h1>

            <h5  className="line-space"><strong> We love helping you to achieve your digital ambition,whether
                strategic,
                creative or technical. We provide mobile application & web application
                designing, development, support and maintenance services.</strong>
            </h5>
            <div  className="button">
                <button type="submit"  className="continue-btn">REQUEST A CALLBACK</button>
            </div>
        </div>
    )
}
export default BannerText;