import githubIcon from "./assets/github-icon.png";
import twitterIcon from "./assets/twitter-icon.png";
import facebookIcon from "./assets/facebook-icon.png";
import instagramIcon from "./assets/insta-icon.png";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src={githubIcon} alt="GitHub Icon" width="24px" height="24px" />
        <img src={twitterIcon} alt="Twitter Icon" width="24px" height="24px" />
        <img
          src={facebookIcon}
          alt="Facebook Icon"
          width="24px"
          height="24px"
        />
        <img
          src={instagramIcon}
          alt="Instagram Icon"
          width="24px"
          height="24px"
        />
      </div>
    </footer>
  );
}
