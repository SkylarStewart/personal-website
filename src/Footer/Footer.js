import "./Footer.css";
import {BsLinkedin} from "react-icons/bs";
import {BsFillEnvelopeFill} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

export default function Footer() {

    return (
        <>
        <div className="footer-container">
            <div className = "icon-container">
                <a className = "icon" href = "https://www.linkedin.com/in/skylarstewart/">
                    <BsLinkedin size={36} className = "icon-style"></BsLinkedin>
                </a>
                <a className = "icon" href = "https://www.instagram.com/skylardstewart/">
                    <BsInstagram size={36} className = "icon-style"></BsInstagram>
                </a>
                <a className = "icon" href = "https://github.com/SkylarStewart">
                    <BsGithub size={36} className = "icon-style"></BsGithub>
                </a>
                <a className = "icon" href = "mailto:bonairehomepc@gmail.com">
                    <BsFillEnvelopeFill size={36} className = "icon-style"></BsFillEnvelopeFill>
                </a>
            </div>
            <div className = "text-container">
                <p className = "text">Skylar Stewart 2023</p>
            </div>
        </div>
        </>
    );
}