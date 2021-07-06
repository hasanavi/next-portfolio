import type { FC } from "react";
import KeeptInTouchLink from "./KeepInTouchLink/KeepInTouchLink";

import styles from "./KeepInTouch.module.css";

import emailIcon from "../../assets/icons/email.svg";
import linkedInlIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";
import twitterIcon from "../../assets/icons/twitter.svg";

const keepInTouch: FC = () => (
  <div className="keep-in-touch">
    <h2 className="h3 text-center">Lets keep in touch:</h2>
    <ul className="keep-in-touch__links">
      <KeeptInTouchLink
        href="mailto:smile@hasanavi.me"
        img={emailIcon}
        alt="email"
        text="Email"
      />

      <KeeptInTouchLink
        href="http://www.linkedin.com/in/hasanavi"
        img={linkedInlIcon}
        alt="linkedin"
        text="Linkedin"
      />

      <KeeptInTouchLink
        href="https://github.com/hasanavi"
        img={githubIcon}
        alt="github"
        text="Github"
      />

      <KeeptInTouchLink
        href="https://twitter.com/hasanavi"
        img={twitterIcon}
        alt="twitter"
        text="Twitter"
      />
    </ul>
  </div>
);

export default keepInTouch;
