import styles from "../../styling/projects.module.css";
import style from "../../styling/projectpage.module.css";
import Image from "next/image";

export default function projectPage() {
  return (
    <>
      <div className={styles.projectContainer}>
        <div className={style.titleContainer}>
          <p className={style.projectTitle}>Atlein</p>
          <p className={style.projectDate}>2026</p>
        </div>
        <div className={style.projectDescription}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac leo volutpat, egestas arcu ut, accumsan mi. Integer a malesuada tortor, id lacinia felis. Maecenas vitae quam nec libero pharetra blandit. Nunc vitae turpis posuere, imperdiet enim eu, feugiat diam. Morbi at turpis dui. Sed tempor, turpis vel molestie gravida, libero velit lobortis felis, eu pellentesque arcu metus sit amet odio.</p>
        </div>
      </div>

      <div className={style.projectContainerMobile}>
        <div className={style.titleContainer}>
          <p className={style.projectTitle}>Atlein</p>
          <p className={style.projectDate}>2026</p>
        </div>
        <div className={style.projectDescription}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac leo volutpat, egestas arcu ut, accumsan mi. Integer a malesuada tortor, id lacinia felis. Maecenas vitae quam nec libero pharetra blandit. Nunc vitae turpis posuere, imperdiet enim eu, feugiat diam. Morbi at turpis dui. Sed tempor, turpis vel molestie gravida, libero velit lobortis felis, eu pellentesque arcu metus sit amet odio.</p>
        </div>
        <div className={style.imageContainer}>
          <Image
            src="/menu.png"
            alt=""
            className={style.image}
            width={800}
            height={1200}
          ></Image>
          <Image
            src="/temp-photos/infopage.jpg"
            alt=""
            className={style.image}
            width={800}
            height={1200}
          ></Image>
          <Image
            src="/menu.png"
            alt=""
            className={style.image}
            width={800}
            height={1200}
          ></Image>
          <Image
            src="/temp-photos/infopage.jpg"
            alt=""
            className={style.image}
            width={800}
            height={1200}
          ></Image>
          <Image
            src="/menu.png"
            alt=""
            className={style.image}
            width={800}
            height={1200}
          ></Image>
          <Image
            src="/temp-photos/infopage.jpg"
            alt=""
            className={style.image}
            width={800}
            height={1200}
          ></Image>
          <Image
            src="/menu.png"
            alt=""
            className={style.image}
            width={800}
            height={1200}
          ></Image>
          <Image
            src="/temp-photos/infopage.jpg"
            alt=""
            className={style.image}
            width={800}
            height={1200}
          ></Image>
          <Image
            src="/menu.png"
            alt=""
            className={style.image}
            width={800}
            height={1200}
          ></Image>
          <Image
            src="/temp-photos/infopage.jpg"
            alt=""
            className={style.image}
            width={800}
            height={1200}
          ></Image>
        </div>
      </div>
    </>
  )
}