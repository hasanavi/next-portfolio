import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProfilePicture.module.css";

const profilePicture: FC = () => (
  <div className={styles.profilePicture}>
    <div className={styles.profileImgContainer}>
      <Link href="/">
        <a>
          <Image
            src="/images/hasan-haque.jpg"
            alt="Picture of Hasan Azizul Haque"
            width={150}
            height={150}
          />
        </a>
      </Link>
    </div>
  </div>
);

export default profilePicture;
