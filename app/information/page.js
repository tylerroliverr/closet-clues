import styles from "../styling/information.module.css";
import Image from "next/image";

export default function Information() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoDescription}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac leo volutpat, egestas arcu ut, accumsan mi. Integer a malesuada tortor, id lacinia felis. Maecenas vitae quam nec libero pharetra blandit. Nunc vitae turpis posuere, imperdiet enim eu, feugiat diam. Morbi at turpis dui. Sed tempor, turpis vel molestie gravida, libero velit lobortis felis, eu pellentesque arcu metus sit amet odio.</p>
        <br></br>
        <p>
          Suspendisse hendrerit hendrerit porttitor. Donec id ex lectus. Curabitur quis enim justo. Ut dui ante, malesuada vitae metus in, ultricies ornare tellus. Integer leo magna, semper vitae orci ut, vestibulum pretium risus. Donec sed pharetra sapien. Vivamus euismod fermentum eros, a ultricies nunc interdum et.</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/temp-photos/infopage.jpg"
          alt=""
          className={styles.image}
          width={800}
          height={1200}
        />
      </div>
    </div>
  )
}