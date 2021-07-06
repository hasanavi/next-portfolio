import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "../hoc/Layout";
import Intro from "../components/Intro/Intro";
import KeepInTouch from "../components/KeepInTouch/KeepInTouch";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <h1>About Me</h1>
      <Intro className="long">
        <span className="intro-text">Hello, My name is Hasan Azizul Haque</span>
        <span className="intro-copy">
          I&apos;m a London based Javascript Developer. I have over 10 years
          experience (4 years full stack + 6 years front-end) developing web and
          mobile application. I love building unique, efficient site and
          passionate about writing clean code.
        </span>
      </Intro>
      <KeepInTouch />
      <h2 className="h3 text-center">
        I&apos;ve been lucky to work on these projects:
      </h2>
      <Link href="/work">
        <a>
          <Image
            src="/images/clients.png"
            alt="All clients logo"
            width={870}
            height={218}
          />
        </a>
      </Link>
    </Layout>
  );
};

export default Home;
