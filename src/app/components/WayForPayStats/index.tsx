"use client"
import 'flag-icons/css/flag-icons.min.css';
import { useEffect, useState } from "react"
import styles from "./wayforpay-stats.module.css"
import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"

export const WayForPayStats = () => {
  const { ref, isVisible } = useScrollAnimation()
  const [counts, setCounts] = useState({ collected: 0, donations: 0 })

  useEffect(() => {
    if (!isVisible) return

    const targets = { collected: 11117, donations: 261 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let current = { collected: 0, donations: 0 }
    const stepValues = {
      collected: targets.collected / steps,
      donations: targets.donations / steps,
    }

    const timer = setInterval(() => {
      current = {
        collected: Math.min(current.collected + stepValues.collected, targets.collected),
        donations: Math.min(current.donations + stepValues.donations, targets.donations),
      }

      setCounts({
        collected: Math.floor(current.collected),
        donations: Math.floor(current.donations),
      })

      if (current.collected >= targets.collected && current.donations >= targets.donations) {
        clearInterval(timer)
      }
    }, increment)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <section className={styles.section}>
      <div className={styles.backgroundPattern}>
        <div className={styles.radialGradient} />
      </div>

      <div ref={ref} className={`${styles.container} ${isVisible ? styles.containerVisible : ""}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Разом ми сильніші</h2>
          <p className={styles.subtitle}>Дякуємо кожному, хто долучився до підтримки</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardGradient} />
            <div className={styles.cardContent}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.statsContent}>
                <div className={styles.number}>
                  {counts.collected.toLocaleString()}
                  <span className={styles.currency}>₴</span>
                </div>
                <div className={styles.label}>Зібрано коштів</div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: isVisible ? "100%" : "0%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardGradient} />
            <div className={styles.cardContent}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>
                  <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.statsContent}>
                <div className={styles.number}>{counts.donations}</div>
                <div className={styles.label}>Задонатили разів</div>
                <div className={styles.hearts}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={styles.heart}>
                      💙
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>Кожна гривня наближає нас до перемоги! <span className="fi fi-ua"></span></p>
        </div>
      </div>
    </section>
  )
}  
  
