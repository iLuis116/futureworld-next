import styles from "./Description.module.sass"
import Image from "next/image"

export const Description = () => {
    return (
        <section className = {styles.Description}>
            <div className={styles.Description__imageContainer}>
            <Image src="/images/description.jpeg"
            alt="products marketplace"
            fill
            />
            </div>
            <div className={styles.Description__text}>
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis doloribus, dolorum voluptatibus velit delectus! Maxime culpa ad sint, reprehenderit, dolor repudiandae asperiores a, exercitationem quas laudantium qui facere sit.</p>
            </div>
        </section>
    )
}