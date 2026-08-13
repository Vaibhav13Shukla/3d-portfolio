import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:vaibhav.shuklahere@gmail.com"
                data-cursor="disable"
              >
                vaibhav.shuklahere@gmail.com
              </a>
            </p>
            <h4>LinkedIn</h4>
            <p>
              <a
                href="https://linkedin.com/in/Vaibhav13Shukla"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                linkedin.com/in/Vaibhav13Shukla
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Data Science &amp; Artificial Intelligence (CGPA: 8.4/10) — Atria University, Bengaluru (Expected Jul 2027)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Vaibhav13Shukla"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/Vaibhav13Shukla"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Personalized &amp; Built <br /> by <span>Vaibhav Shukla</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
