import "./Homepage.css";
import Footer from "../Footer";

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
                    <div className="work-title-container">
                        <h1 className="work-title">WORK HISTORY</h1>
                        <div className="work-line-container">
                            <hr className="work-title-line"></hr>
                        </div>

                    </div>
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="education-container">
                    <div className="education-title-container">
                        <h1 className="education-title">EDUCATION</h1>
                        <div className="education-line-container">
                            <hr className="education-title-line"></hr>
                        </div>

                    </div>
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <Footer/>
        </>
    );
}