import Image from "next/image";
import type { FC } from "react";

import styles from "./ArticleListItem.module.css";

interface articleListItemProps {
  publishDate?: string;
  info1: string;
  info2?: string;
  img?: string;
  title: string;
}

const ArticleListItem: FC<articleListItemProps> = ({
  publishDate,
  info1,
  info2,
  img,
  title,
  children,
}) => {
  return (
    <div className={styles.articleListItem}>
      <div className={styles.infoContainer}>
        {publishDate ? (
          <time className={["h5", styles.time].join(" ")}>{publishDate}</time>
        ) : null}
        <h2 className={["h3", styles.heading].join(" ")}>{title}</h2>
        <span className={styles.infoSeparator}>/</span>
        <p className={styles.info1}>{info1}</p>
        {info2 ? (
          <>
            <span className={styles.infoSeparator}>/</span>
            <p className={styles.info2}>{info2}</p>
          </>
        ) : null}
        {children ? <p className={styles.additionalInfo}>{children}</p> : null}
      </div>
      {img ? (
        <div className={styles.imageContainer}>
          <Image
            src={img}
            alt={title}
            width={420}
            height={233}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcaQwAAWsAzpQ06/UAAAAASUVORK5CYII="
            loading="eager"
            layout="responsive"
          />
        </div>
      ) : null}
    </div>
  );
};

export default ArticleListItem;
