import type { FC } from "react";
import styles from "./Navigation.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigation: FC = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navigationList}>
      <NavigationItem href="/" text="HOME" />
      <NavigationItem href="/work" text="WORK" />
      {/* <NavigationItem href="/blog" text="BLOG" /> */}
      <NavigationItem href="/achievement" text="ACHIEVEMENT" />
      <NavigationItem href="/contact" text="CONTACT" />
    </ul>
  </nav>
);

export default navigation;
