import type { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./NavigationItem.module.css";

interface NavigationItemProps {
  text: string;
  href: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ href, text }) => {
  const router = useRouter();

  const linkClasses = [
    styles.navigationLink,
    router.pathname === href ? styles.navigationLinkActive : "",
  ];
  return (
    <li className="navigation-item">
      <Link href={href}>
        <a className={linkClasses.join(" ")}>{text}</a>
      </Link>
    </li>
  );
};

export default NavigationItem;
