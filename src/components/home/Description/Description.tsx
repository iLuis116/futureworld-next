'use client'

import classNames from "classnames/bind"
import { useState } from "react"
import styles from "./Description.module.sass"
import Image from "next/image"


export const Description = () => {
    const [hasBorder, setBorder] = useState(false);

    const handleclick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button',{
        'Description__button__border': hasBorder,
    });
    console.log(buttonStyles)
    return (
        <section className = {styles.Description}>
            <button onClick={handleclick} className={buttonStyles}>
            <div className={styles.Description__imageContainer}>
            <Image src="/images/description.jpeg"
            alt="products marketplace"
            fill
            />
            </div>
            </button>
            <div className={styles.Description__text}>
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis doloribus, dolorum voluptatibus velit delectus! Maxime culpa ad sint, reprehenderit, dolor repudiandae asperiores a, exercitationem quas laudantium qui facere sit.</p>
            </div>
        </section>
    )
}