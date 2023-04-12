import './assets/css/footer.css'
const Footer = () => {
    return (
        <>
            <div className="page-footer-section">
                <div className="container">
                    <div className="row mb-5 py-3">
                        <div className="col-sm-6 col-lg-2 py-3">
                            <h5 className="mb-3">Pages</h5>
                            <ul className="menu-link">
                                <li><a href="#" className="">Features</a></li>
                                <li><a href="#" className="">Customers</a></li>
                                <li><a href="#" className="">Pricing</a></li>
                                <li><a href="#" className="">GDPR</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-2 py-3">
                            <h5 className="mb-3">Company</h5>
                            <ul className="menu-link">
                                <li><a href="#" className="">About</a></li>
                                <li><a href="#" className="">Team</a></li>
                                <li><a href="#" className="">Leadership</a></li>
                                <li><a href="#" className="">Careers</a></li>
                                <li><a href="#" className="">HIRING!</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 py-3">
                            <h5 className="mb-3">Contact</h5>
                            <ul className="menu-link">
                                <li><a href="#" className="">Contact Us</a></li>
                                <li><a href="#" className="">Office Location</a></li>
                                <li><a href="#" className="">hello@mobster.com</a></li>
                                <li><a href="#" className="">support@macodeid.com</a></li>
                                <li><a href="#" className="">+808 11233 900</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 py-3">

                        </div>
                    </div>
                </div>

                <hr />

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 py-2">
                            {/* <img src="../assets/favicon-light.png" alt="" width="40" /> */}
                            <p className="d-inline-block ml-2">Copyright &copy; HouseArcs. All rights reserved</p>
                        </div>
                        <div className="col-12 col-md-6 py-2">
                            <ul className="nav justify-content-end">
                                <li className="nav-item"><a href="#" className="nav-link">Terms of Use</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Privacy Policy</a></li>
                                <li className="nav-item"><a href="#" className="nav-link">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer