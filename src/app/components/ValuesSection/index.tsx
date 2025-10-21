"use client"

import styles from "./values-section.module.css"
import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"
import { values } from "./values"

export const ValuesSection = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="values" className={styles.section}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${isVisible ? styles.visible : styles.hidden}`}>
          
          {/* Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>Наші принципи</h2>
            <p className={styles.subtitle}>
              Цінності, якими ми керуємося у нашій роботі
            </p>
          </div>

          {/* Values Grid */}
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
                <div className={styles.valueNumber}>{String(index + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
