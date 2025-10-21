"use client"

import Image from "next/image"
import styles from "./hero-section.module.css"
import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation()

  const scrollToDonate = () => {
    document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.particlesBackground}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <div className={styles.heroOverlay} />

      <div ref={ref} className={`${styles.container} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.heroGrid}>
          {/* Left side - Logo and badge */}
          <div className={styles.logoSection}>
            <div className={styles.badgeContainer}>
              <span className={styles.badge}><span className="fi fi-ua"></span> Офіційна підтримка ЗСУ</span>
            </div>

            <div className={styles.logoWrapper}>
              <div className={styles.logoGlow} />
              <div className={styles.circularLogo}>
                <Image
                  src="/images/ukraine-logo-circle.png"
                  alt="A Dollar for Ukraine"
                  fill
                  className={styles.logoImage}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className={styles.contentSection}>
            <h1 className={styles.mainTitle}>
              <span className={styles.titleHighlight}>Разом</span> ми наближаємо перемогу
            </h1>

            <p className={styles.subtitle}>
              Кожен ваш внесок — це конкретна допомога нашим захисникам на передовій. Приєднуйтесь до тисяч небайдужих
              людей, які щодня підтримують Збройні Сили України.
            </p>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>11,117 UAH</div>
                <div className={styles.statLabel}>зібрано</div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <div className={styles.statNumber}>261</div>
                <div className={styles.statLabel}>донатів</div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>прозорість</div>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <button className={styles.primaryCta} onClick={scrollToDonate}>
                <span>Підтримати зараз</span>
                <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                className={styles.secondaryCta}
                onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Як це працює</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
