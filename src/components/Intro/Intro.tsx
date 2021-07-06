import type { FC } from "react";
import styles from "./Intro.module.css";

interface IntroProps {
  className: string;
}

const Intro: FC<IntroProps> = ({ className, children }) => {
  return <p className={styles[className]}>{children}</p>;
};

export default Intro;
