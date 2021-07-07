import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "../hoc/Layout";
import Intro from "../components/Intro/Intro";
import KeepInTouch from "../components/KeepInTouch/KeepInTouch";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <h1>About Me</h1>
      <Intro className="long">
        <span className={styles.introText}>
          Hello, My name is Hasan Azizul Haque
        </span>
        <span className={styles.introCopy}>
          I&apos;m a London based Javascript Developer. I have over 14 years
          experience (5 years full stack + 9 years front-end) developing web and
          mobile application. I love building unique, efficient site and
          passionate about writing clean code.
        </span>
      </Intro>
      <KeepInTouch />
      <h2 className="text-center">
        I&apos;ve been lucky to work on these projects:
      </h2>
      <Link href="/work">
        <a>
          <Image
            src="/images/clients.png"
            alt="All clients logo"
            width={870}
            height={218}
            priority
          />
        </a>
      </Link>
    </Layout>
  );
};

export default Home;
