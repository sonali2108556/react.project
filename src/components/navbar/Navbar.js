import React from "react";
import NavbarLink from "./NavbarLink"

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg color ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="row mx-auto ">

                    <div className="collapse navbar-collapse" id="Navbar">
                        <NavbarLink/>
                    </div>

                </div>
            </div>
        </nav>
        
    )
}
export default Navbar;