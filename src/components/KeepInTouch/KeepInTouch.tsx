import type { FC } from "react";
import KeeptInTouchLink from "./KeepInTouchLink/KeepInTouchLink";

import styles from "./KeepInTouch.module.css";

const keepInTouch: FC = () => (
  <div className={styles.keepInTouch}>
    <h2 className="h3 text-center">Lets keep in touch:</h2>
    <ul className={styles.keepInTouchLinks}>
      <KeeptInTouchLink
        href="mailto:smile@hasanavi.me"
        img="/icons/email.svg"
        alt="email"
        text="Email"
      />

      <KeeptInTouchLink
        href="http://www.linkedin.com/in/hasanavi"
        img="/icons/linkedin.svg"
        alt="linkedin"
        text="Linkedin"
      />

      <KeeptInTouchLink
        href="https://github.com/hasanavi"
        img="/icons/github.svg"
        alt="github"
        text="Github"
      />

      <KeeptInTouchLink
        href="https://twitter.com/hasanavi"
        img="/icons/twitter.svg"
        alt="twitter"
        text="Twitter"
      />
    </ul>
  </div>
);

export default keepInTouch;
