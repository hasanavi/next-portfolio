import type { FC } from "react";
import Head from "next/head";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import Intro from "../components/Intro/Intro";
import Navigation from "../components/Navigation/Navigation";
import TwitterTimeline from "../components/TwitterTimeline/TwitterTimeline";
import styles from "./Layout.module.css";

const siteTitle = "Hasan Haque - JavaScript Enthusiast London, UK";

const Layout: FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>{siteTitle}</title>
				<meta
					name="description"
					content="I'm a London based Javascript Developer.  I love building unique, efficient site and passionate about writing clean code."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container}>
				<aside className={styles.aside}>
					<ProfilePicture />
					<Intro className="short">
						I am a<span className={styles.secondaryColor}>Javascript</span>{" "}
						<span className={styles.tertiaryColor}>Enthusiast</span>
					</Intro>
					<Navigation />
					<TwitterTimeline userName="hasanavi" />
				</aside>

				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;
