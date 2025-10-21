"use client"

import styles from "./gallery-section.module.css"
import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"
import Image from "next/image"
import { galleryImages } from "./value"

export const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation()


  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>Наша діяльність</h2>
            <p className={styles.description}>
              Подивіться, як ваші донати допомагають Збройним Силам України
            </p>
          </div>

          <div className={styles.galleryContainer}>
            <div className={styles.gallery}>
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className={styles.galleryItem}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={styles.overlay}>
                      <h3 className={styles.imageTitle}>{image.title}</h3>
                      <p className={styles.imageDescription}>{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
