import styles from "../styling/projects.module.css";
import Image from "next/image";

export default function Editorial() {
  return (
    <>
      <div className={styles.projectContainer}>
        <a href="/editorial/atlein">
          <div className={`${styles.titleContainer} ${styles.firstContainer}`}>
            <p>Atlein</p>
          </div>
        </a>
        <div className={styles.titleContainer}>
          <p>Come If You Can</p>
        </div>
        <div className={styles.titleContainer}>
          <p>Soap Magazine</p>
        </div>
        <div className={styles.titleContainer}>
          <p>Off Trend</p>
        </div>
        <div className={styles.titleContainer}>
          <p>Versace</p>
        </div>
      </div>
      {/* DESKTOP ABOVE */}

      {/* MOBILE BELOW */}
      <div className={styles.projectContainerMobile}>
        <div className={styles.pageTitle}>
          <p>Editorial</p>
        </div>
        <a href="/editorial/atlein">
          <div className={styles.projectImageContainer}>
            <div className={styles.projectImage}>
              <Image
                src="/menu.png"
                alt=""
                className={styles.image}
                width={800}
                height={1200}
              ></Image>
            </div>
            <div className={styles.projectName}>
              <p>Atlein</p>
            </div>
          </div>
        </a>
        <div className={styles.projectImageContainer}>
          <div className={styles.projectImage}>
            <Image
              src="/temp-photos/infopage.jpg"
              alt=""
              className={styles.image}
              width={800}
              height={1200}
            ></Image>
          </div>
          <div className={styles.projectName}>
            <p>Atlein</p>
          </div>
        </div>
        <div className={styles.projectImageContainer}>
          <div className={styles.projectImage}>
            <Image
              src="/temp-photos/infopage.jpg"
              alt=""
              className={styles.image}
              width={800}
              height={1200}
            ></Image>
          </div>
          <div className={styles.projectName}>
            <p>Atlein</p>
          </div>
        </div>
        <div className={styles.projectImageContainer}>
          <div className={styles.projectImage}>
            <Image
              src="/menu.png"
              alt=""
              className={styles.image}
              width={800}
              height={1200}
            ></Image>
          </div>
          <div className={styles.projectName}>
            <p>Atlein</p>
          </div>
        </div>
        <div className={styles.projectImageContainer}>
          <div className={styles.projectImage}>
            <Image
              src="/menu.png"
              alt=""
              className={styles.image}
              width={800}
              height={1200}
            ></Image>
          </div>
          <div className={styles.projectName}>
            <p>Atlein</p>
          </div>
        </div>
        <div className={styles.projectImageContainer}>
          <div className={styles.projectImage}>
            <Image
              src="/temp-photos/infopage.jpg"
              alt=""
              className={styles.image}
              width={800}
              height={1200}
            ></Image>
          </div>
          <div className={styles.projectName}>
            <p>Atlein</p>
          </div>
        </div>
        <div className={styles.projectImageContainer}>
          <div className={styles.projectImage}>
            <Image
              src="/temp-photos/infopage.jpg"
              alt=""
              className={styles.image}
              width={800}
              height={1200}
            ></Image>
          </div>
          <div className={styles.projectName}>
            <p>Atlein</p>
          </div>
        </div>
        <div className={styles.projectImageContainer}>
          <div className={styles.projectImage}>
            <Image
              src="/menu.png"
              alt=""
              className={styles.image}
              width={800}
              height={1200}
            ></Image>
          </div>
          <div className={styles.projectName}>
            <p>Atlein</p>
          </div>
        </div>
        <div className={styles.projectImageContainer}>
          <div className={styles.projectImage}>
            <Image
              src="/menu.png"
              alt=""
              className={styles.image}
              width={800}
              height={1200}
            ></Image>
          </div>
          <div className={styles.projectName}>
            <p>Atlein</p>
          </div>
        </div>
        <div className={styles.projectImageContainer}>
          <div className={styles.projectImage}>
            <Image
              src="/temp-photos/infopage.jpg"
              alt=""
              className={styles.image}
              width={800}
              height={1200}
            ></Image>
          </div>
          <div className={styles.projectName}>
            <p>Atlein</p>
          </div>
        </div>
      </div>
    </>
  )
}