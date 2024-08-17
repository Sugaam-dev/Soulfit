import React from "react";
import "../Styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
function Contact() {
  return (
    <>
	<div className="cont">
		<div className="headingc">
			<h1>Get In Touch With Soulfit</h1>
			<img src="./images/lg.png" alt="" />
		</div>
    <div class="contact-wrap">
    <div class="contact-in">
				<h1>Contact Info</h1>
				<h2><FaPhoneAlt /> Phone</h2>
				<p>9898989890</p>
				<h2><MdEmail /> Email</h2>
				<p>info@soulfit.com</p>
				<h2><CiLocationOn /> Address</h2>
				<p>Vasant Vihar, Delhi, India</p>
				<ul>
					<li><a href="#"><FaFacebookF /></a></li>
					<li><a href="#"><FaXTwitter /></a></li>
					<li><a href="#"><IoLogoYoutube /></a></li>
					<li><a href="#"><FaInstagram /></a></li>
				</ul>
			</div>
      {/* <div class="contact-in">
				<h1>Send a Message</h1>
				<form>
					<input type="text" placeholder="Full Name" class="contact-in-input">
					<input type="text" placeholder="Email" class="contact-in-input">
					<input type="text" placeholder="Subject" class="contact-in-input">
					<textarea placeholder="Message" class="contact-in-textarea"></textarea>
					<input type="submit" value="SUBMIT" class="contact-in-btn">
				</form>
			</div> */}
      <div class="contact-in">
				<h1>Send a Message</h1>
			<form action="">
        <input type="text" placeholder="Full Name" className="contact-in-input" required/>
        <input type="email" placeholder="Email" className="contact-in-input" required/>
        <input type="text" placeholder="Subject" className="contact-in-input" required/>
		<textarea name="massage" placeholder="Message"  className="contact-in-input" required />
        <input type="submit" value="SUBMIT" className="contact-in-btn" /> 
      </form>
			</div>
      <div class="contact-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906969727!2d73.69815309340439!3d18.524870610788835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723829478886!5m2!1sen!2sin"
          width="100%"
          height="500px"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
	  </div>
    </>
  );
}

export default Contact;
