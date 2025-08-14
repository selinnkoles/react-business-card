import businessPhoto from "./assets/business-photo.jpg";
import emailIcon from "./assets/mail-icon.png";
import linkedinIcon from "./assets/linkedin.png";

import "./Info.css";

export default function Info() {
  return (
    <section id="info">
      <img src={businessPhoto} />
      <h1 className="name">Laura Smith</h1>
      <p id="role">Frontend Developer</p>
      <p id="email">
        <small>laurasmith@email.com</small>
      </p>
      <div className="buttons">
        <button className="email-button">
          <img src={emailIcon} alt="Email Icon" width="16px" height="12px" />
          <text id="text-Email">Email</text>
        </button>
        <button className="linkedin-button">
          <img
            src={linkedinIcon}
            alt="LinkedIn Icon"
            width="16px"
            height="16px"
          />
          <text id="text-Linkedin">LinkedIn</text>
        </button>
      </div>
    </section>
  );
}
