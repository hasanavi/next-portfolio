import type { NextPage } from "next";
import Link from "next/link";
import Intro from "../components/Intro/Intro";
import KeepInTouch from "../components/KeepInTouch/KeepInTouch";
import styles from "../styles/Home.module.css";
import { attributes } from "../../content/home.md";

const Home: NextPage = () => {
	return (
		<>
			<h1>{attributes.page_title}</h1>
			<Intro className="long">
				<span className={styles.introText}>{attributes.page_subtitle}</span>
				<span className={styles.introCopy}>{attributes.page_description}</span>
			</Intro>
			<KeepInTouch />
			<h2 className="text-center">{attributes.projects_title}</h2>
			<Link href="/work">
				<a>
					<img
						className={styles.img}
						src={attributes.projects_image}
						alt="All clients logo"
					/>
				</a>
			</Link>
		</>
	);
};

export default Home;
