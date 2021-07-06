import type { FC } from "react";
import KeeptInTouchLink from "./KeepInTouchLink/KeepInTouchLink";

import styles from "./KeepInTouch.module.css";

const emailIcon = "/images/icons/email.svg";
const linkedInlIcon = "/images/icons/linkedin.svg";
const githubIcon = "/images/icons/github.svg";
const twitterIcon = "/images/icons/twitter.svg";

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
