import { FC } from "react";

import "./KeepInTouchLink.css";

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
  <li className="keep-in-touch-link">
    <a href={href} target="_blank" rel="noreferrer">
      {/* <img src={img} alt={alt} /> */}
      <span>{text}</span>
    </a>
  </li>
);

export default KeepInTouchLink;
