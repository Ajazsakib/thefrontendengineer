import React, { useRef, useEffect, useState } from "react";
import "./contactMe.css";
import { ToastContainer, toast } from "react-toastify";
import { contactDetails } from "../../data/contactMe";
import { ColorRing } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { profileLinks } from "../../data/profileLinks";
import
{
  EmailJS_SERVICE_ID,
  EmailJS_TEMPLATE_ID,
  EmailJS_PUBLIC_KEY,
} from "../../utils/constants";

const ContactMe = (e) =>
{
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const isValidEmail = (email) =>
  {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() =>
  {
    if (name && isValidEmail(email) && message) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [name, email, message]);

  const resetData = () =>
  {
    setName("");
    setEmail("");
    setMessage("");
    setIsFormSubmitting(false);
    setDisableSubmit(true);
  };

  const sendEmail = (e) =>
  {
    e.preventDefault();
    setIsFormSubmitting(true);

    emailjs
      .sendForm(
        EmailJS_SERVICE_ID,
        EmailJS_TEMPLATE_ID,
        form.current,
        EmailJS_PUBLIC_KEY
      )
      .then(
        (result) =>
        {
          resetData();
          setIsFormSubmitting(false);
          toast.success("Email sent successfully!");
        },
        (error) =>
        {
          toast.error("Error sending email, please try again later!");
          setIsFormSubmitting(false);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="reachme-container">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className="contactPageTitle">Contact Me</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="reachme-title">
            <div className="row">
              {contactDetails &&
                contactDetails.map((details) => (
                  <div className="col-md-4 contact-info" key={details.id}>
                    <div className="contact-details">
                      <i className={details.icon}></i>
                      <div className="contact-me">
                        <h4 className="contact-name">{details.contact_name}</h4>
                        <p className="contact_info">{details.contact_info}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>


      </div>

      <div className="profile-links-container" data-aos-duration="1800">
        <ul>
          <li>
            {profileLinks &&
              profileLinks.map((data) => (
                <a
                  href={data.link}
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={data.id}
                >
                  <i className={data.social_icon}></i>
                </a>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
