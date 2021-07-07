import Image from "next/image";
import { FC } from "react";

import styles from "./KeepInTouchLink.module.css";

interface KeepInTouchLinkProps {
  href: string;
  img: string;
  alt: string;
  text: string;
}

const KeepInTouchLink: FC<KeepInTouchLinkProps> = ({
  href,
  img,
  alt,
  text,
}) => (
  <li className={styles.keepInTouchLink}>
    <a href={href} target="_blank" rel="noreferrer">
      <Image src={img} alt={alt} width={80} height={80} />
      <span>{text}</span>
    </a>
  </li>
);

export default KeepInTouchLink;
