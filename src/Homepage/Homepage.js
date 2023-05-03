import "./Homepage.css";
import Footer from "../Footer";
import AWS_Logo from "./AWS_Logo.svg";
import UF_Logo from "./UF_Logo.svg";

export default function Homepage() {
    return (
        <>

            <div className="hero">
                <div className="hero-content">
                    <h1 className="hero-header">SKYLAR STEWART</h1>
                    <p className="hero-subtitle"> Computer Science Student, Web Developer, Enthusiast</p>
                </div>
            </div>

            <div className="body">

                <div className="about-container">
                    <div className="about-title-container">
                        <h1 className="about-title">ABOUT ME</h1>
                        <div className="about-line-container">
                            <hr className="about-title-line"></hr>
                        </div>

                    </div>
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="work-container">
                    <div className="about-title-container">
                        <h1 className="about-title">WORK HISTORY</h1>
                        <div className="about-line-container">
                            <hr className="work-title-line"></hr>
                        </div>


                    </div>
                    <div className="obj-container">
                        <div className="img-container">
                            <img src={AWS_Logo} className="img-aws"></img>
                        </div>
                        <div className="obj-text-container">
                            <h1 className="obj-title">Amazon Web Services</h1>
                            <h6 className="obj-subtitle">Accessibility & User Satisfaction</h6>
                            <p className="obj-location">Arlington, VA (May 2023 - present)</p>
                            <p className="obj-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            </p>
                        </div>
                    </div>

                </div>

                <div className="education-container">
                    <div className="about-title-container">
                        <h1 className="about-title">EDUCATION</h1>
                        <div className="about-line-container">
                            <hr className="education-title-line"></hr>
                        </div>
                    </div>

                    <div className="obj-container">
                        <div className="img-container">
                            <img src={UF_Logo} className="img-ufl"></img>
                        </div>
                        <div className="obj-text-container">
                            <h1 className="obj-title">University of Florida</h1>
                            <h6 className="obj-subtitle">B.S. in Computer Science, Minor in Business Administration</h6>
                            <p className="obj-location">Gainesville, FL (August 2020 - May 2024)</p>
                            <p className="obj-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}