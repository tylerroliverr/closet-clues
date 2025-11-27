"use client";

import { useSize } from "../SizeContext";
import styles from "../styling/homepage.module.css";
import Image from "next/image";

export default function HomepageClient({ images }) {
  const { cols } = useSize();

  return (
    <div
      className={styles.homepageContainer}
      style={{ "--cols": cols }}
    >
      {images.map((src) => (
        <div key={src} className={styles.imageContainer}>
          <Image
            src={src}
            alt=""
            className={styles.image}
            width={800}
            height={1200}
          />
        </div>
      ))}
    </div>
  );
}
