import styles from "./Description.module.sass"
import Image from "next/image"

export const Description = () => {
    return (
        <section className = {styles.Description}>
            <Image src="/images/description.jpeg"
            alt="products marketplace"
            width={500}
            height={300}
            />
            <div className={styles.Description__text}>
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis doloribus, dolorum voluptatibus velit delectus! Maxime culpa ad sint, reprehenderit, dolor repudiandae asperiores a, exercitationem quas laudantium qui facere sit.</p>
            </div>
        </section>
    )
}