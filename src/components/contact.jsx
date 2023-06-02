import React, { useRef,useState } from "react";
import './contact.css';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false); // State variable to track sent status

  function sendEmail(e) {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_fc97lhh",
      "template_t2rzjwf",
      formRef.current,
      "n50L2fRrrahr6c-HI"
    )
    .then(
      (result) => {
        console.log(result.text);
        setIsSent(true); // Set the sent status to true
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  }
  return (
    <div className="contactUs">
      <div className="title">
        <h2>Get in Touch</h2>
      </div>
      <div className="box">
        <div className="form">
          <h1>Send a Message</h1>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="formBox">
              <div className="row50">
                <div className="inputBox">
                  <span>First Name</span>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="inputBox">
                  <span>Last Name</span>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="row50">
                <div className="inputBox">
                  <span>Email ID</span>
                  <input
                    type="text"
                    placeholder="vsujathavsujatha0968@gmail.com"
                  />
                </div>
              </div>
              <div className="row100">
                <div className="inputBox">
                  <span>Message</span>
                  <textarea placeholder="Write Your Message Here..."></textarea>
                </div>
              </div>
              <div className="row100">
                <div className="inputBox">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="info">
          <h3>Contact Info</h3>
          <div className="infoBox">
          <div className={`contact__option ${isSent ? "sent" : ""}`}>
    <h2> <MdOutlineEmail/>Gmail</h2>
    <h3>vsujathavsujatha0968@gmail.com</h3>
    <a href="mailto:vsujathavsujatha0968@gmail.com">Send a message</a>
  </div>
  <div className={`contact__option ${isSent ? "sent" : ""}`}>
    <h2><RiMessengerLine />Messenger</h2>
    <h3>Why Global Services</h3>
    <a href="https://m.me">Send a message</a>
  </div>
  <div className={`contact__option ${isSent ? "sent" : ""}`}>
    <h2><RiWhatsappLine/>Contact</h2>
    <h3>+91 86672 79822</h3>
    <a href="https://api.whatsapp.com/send?phone=917904544228">Send a message</a>
  </div>
</div>
            <ul className="sci">
              <li>
                <a href="https://www.facebook.com/whyglobal/" alt="names">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" alt="names">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/i/flow/login" alt="names">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/i/flow/login" alt="names">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.769417185833!2d80.23583389059625!3d13.07112774757432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526672b30ccb71%3A0xb24303aa60c7e198!2sElcanso%20Complex%2C%20CASA%20Major%20Rd%2C%20Egmore%2C%20Chennai%2C%20Tamil%20Nadu%20600008!5e0!3m2!1sen!2sin!4v1685674802067!5m2!1sen!2sin"
            title="Google Maps"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="medium"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
  );
}

export default Contact;
