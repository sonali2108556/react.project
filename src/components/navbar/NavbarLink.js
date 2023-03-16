function NavbarLink(props) {
    return (
        <ul className="list-unstyled navbar-nav ">
            <li className="nav-item">
                <a className="nav-link" href="./index.html"><span className="fa fa-home fa-lg p-3"></span>Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./contactus.html"><span
                    className="fa fa-address-card fa-lg p-3"></span>Services</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="./aboutus.html"><span className="fa fa-info fa-lg p-3"></span>Contact
                    Us</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" id="loginBtn"><span className="fa fa-sign-in fa-lg p-3"></span>More</a>
            </li>
        </ul>
    )
}
export default NavbarLink;