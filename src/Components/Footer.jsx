import "../Styles/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faFacebookF,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="sec">
            {/* <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1723282214~exp=1723285814~hmac=46732f48155268a1017a5726aa90baf70acec70f3ba384cb5a6920b166aba270&w=740"
              alt="logo"
            /> */}
            <span>SOULFIT</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quia quaerat excepturi blanditiis sapiente totam autem ut a omnis,
              dolore vel minima veniam voluptatum cupiditate. Facere at odio
              consequatur quo!
            </p>
            <ul className="sci">
              <li>
                <Link>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link>
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link>
                  <FaXTwitter />
                </Link>
              </li>
            </ul>
          </div>
          <div className="quicklinks">
            <h2>Quick Links <div className="underline"><span></span></div></h2>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2>Contact Us <div className="underline"><span></span></div></h2>
            <ul className="info">
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <p>
                  <a href="tel:+919167222521">Call us at +91-91678086998</a>
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <p>
                  <a href="mailto:info@soulfit.com">info@soulfit.com</a>
                </p>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <p>
                  <a href="#">###### , INDIA</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <a href="#" id="scroll">
        <span></span>
      </a>
      <div className="copyrighttext">
        <p>
          copyright & 2024 Designed by{" "}
          <a href="https://sugaam.in">Sugaam.in</a> All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
