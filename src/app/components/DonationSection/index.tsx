"use client"

import { useState } from "react"
import styles from "./donation-section.module.css"
import Image from "next/image"
import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"

export const  DonationSection = () => {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedFrequency, setSelectedFrequency] = useState<"daily" | "weekly" | "monthly">("monthly")

  const handleDonate = () => {
    window.open(
      `https://secure.wayforpay.com/donate/d1bb03d3ccf14?amount=1&currency=EUR&frequency=${selectedFrequency}`,
      "_blank",
    )
  }

  const frequencies = [
    { value: "daily" as const, label: "Щодня", description: "1$ Щоденна підтримка" },
    { value: "weekly" as const, label: "Щотижня", description: "1$ Раз на тиждень" },
    { value: "monthly" as const, label: "Щомісяця", description: "1$ Раз на місяць" },
  ]

  return (
    <section id="donate" className={styles.section}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>Станьте частиною перемоги</h2>
            <p className={styles.subtitle}>
              Кожен внесок — це ваша особиста підтримка наших захисників. Разом ми наближаємо перемогу!
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.trustBadges}>
                <div className={styles.badge}>
                  <div className={styles.badgeIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span>Верифіковано</span>
                </div>
                <div className={styles.badge}>
                  <div className={styles.badgeIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <span>Безпечно</span>
                </div>
                <div className={styles.badge}>
                  <div className={styles.badgeIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <span>Прозоро</span>
                </div>
              </div>
              <h3 className={styles.cardTitle}>Долучитися до підтримки</h3>
              <p className={styles.cardDescription}>Офіційна платформа підтримки Збройних Сил України</p>
              <div className={styles.securityNote}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
                <span>Всі транзакції захищені міжнародними стандартами безпеки</span>
              </div>
            </div>
            {/* </CHANGE> */}

            <div className={styles.cardContent}>
              <div className={styles.qrSection}>
                <div className={styles.qrContainer}>
                  <a
                    href="https://secure.wayforpay.com/donate/d1bb03d3ccf14?amount=1&currency=EUR&frequency=monthly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.qrLink}
                  >
                    <div className={styles.qrWrapper}>
                      <Image
                        src="/images/qr-code.png"
                        alt="QR код для донату через WayForPay"
                        width={200}
                        height={200}
                        className={styles.qrImage}
                      />
                      <div className={styles.qrBadge}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm15 0h3v3h-3v-3zm0 5h3v3h-3v-3zm-2-5h3v8h-3v-8z" />
                        </svg>
                      </div>
                    </div>
                    <div className={styles.qrInfo}>
                      <p className={styles.qrText}>Скануйте для швидкого донату</p>
                      <p className={styles.qrSubtext}>Безпечний платіж через WayForPay</p>
                    </div>
                  </a>
                </div>
                <div className={styles.divider}>
                  <span className={styles.dividerText}>або оберіть параметри</span>
                </div>
              </div>
              {/* </CHANGE> */}

              <div className={styles.frequencySection}>
                <h4 className={styles.frequencyTitle}>Оберіть частоту підтримки</h4>
                <div className={styles.frequencyGrid}>
                  {frequencies.map((frequency) => (
                    <button
                      key={frequency.value}
                      onClick={() => setSelectedFrequency(frequency.value)}
                      className={`${styles.frequencyButton} ${
                        selectedFrequency === frequency.value ? styles.selected : ""
                      }`}
                    >
                      <div className={styles.frequencyContent}>
                        <div className={styles.frequencyLabel}>{frequency.label}</div>
                        <div className={styles.frequencyDescription}>{frequency.description}</div>
                      </div>
                      {selectedFrequency === frequency.value && (
                        <div className={styles.checkmark}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <button className={styles.mainButton} onClick={handleDonate}>
                <span>Підтримати зараз</span>
                <div className={styles.svgArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                </div>
              </button>

              <div className={styles.statsBar}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>100%</div>
                  <div className={styles.statLabel}>Прозорість</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>24/7</div>
                  <div className={styles.statLabel}>Підтримка</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>SSL</div>
                  <div className={styles.statLabel}>Захист</div>
                </div>
              </div>

              <div className={styles.infoBox}>
                <h4 className={styles.infoTitle}>Гарантії та переваги</h4>
                <ul className={styles.infoList}>
                  <li className={styles.infoItem}>
                    <div className={styles.checkIcon}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Повна прозорість:</strong> 100% коштів йде безпосередньо на підтримку ЗСУ
                    </div>
                  </li>
                  <li className={styles.infoItem}>
                    <div className={styles.checkIcon}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Безпека платежів:</strong> Захищено міжнародними стандартами PCI DSS
                    </div>
                  </li>
                  <li className={styles.infoItem}>
                    <div className={styles.checkIcon}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Звітність:</strong> Регулярні звіти про використання коштів
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.paymentMethods}>
                <p className={styles.paymentTitle}>Доступні способи оплати:</p>
                <div className={styles.paymentIcons}>
                  <div className={styles.paymentIcon}>Visa</div>
                  <div className={styles.paymentIcon}>Mastercard</div>
                  <div className={styles.paymentIcon}>Apple Pay</div>
                  <div className={styles.paymentIcon}>Google Pay</div>
                </div>
              </div>
              {/* </CHANGE> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
