import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const formRef = useRef(null);

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
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Gmail</h4>
            <h5>vsujathavsujatha0968@gmail.com</h5>
            <a href="mailto:vsujathavsujatha0968@gmail.com">Send a message</a>
          </div>
          <div className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>TCS World</h5>
            <a href="https://m.me">Send a message</a>
          </div>
          <div className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>Contact</h4>
            <h5>+91 7904544228</h5>
            <a href="https://api.whatsapp.com/send?phone=917904544228">
              Send a message
            </a>
          </div>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <label>
            <span>Your Full Name:</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Your Email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your Message:</span>
            <textarea name="message" rows="7" required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
