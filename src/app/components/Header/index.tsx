"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./header.module.css"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand}>
            <div className={styles.brandLogo}>
              <Image
                src="/images/ukraine-logo-circle.png"
                alt="A Dollar for Ukraine"
                fill
                className={styles.brandImage}
              />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>A Dollar for Ukraine</span>
              <span className={styles.brandSubtitle}>Not to forget</span>
            </div>
          </Link>

          <nav className={styles.navigation}>
            <button onClick={() => scrollToSection("hero")} className={styles.navLink}>
              Головна
            </button>
            <button onClick={() => scrollToSection("faq")} className={styles.navLink}>
              Часті запитання
            </button>
            <button onClick={() => scrollToSection("donate")} className={styles.navLink}>
              Підтримати
            </button>
            <button onClick={() => scrollToSection("gallery")} className={styles.navLink}>
              Галерея
            </button>
            <a
              href="https://secure.wayforpay.com/donate/d1bb03d3ccf14?amount=1&currency=EUR&frequency=monthly"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.donateButton}
            >
              <svg className={styles.donateIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Задонатити
            </a>
          </nav>

          <button
            className={styles.menuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.menuBar} ${isMobileMenuOpen ? styles.menuBarOpen : ""}`}></span>
            <span className={`${styles.menuBar} ${isMobileMenuOpen ? styles.menuBarOpen : ""}`}></span>
            <span className={`${styles.menuBar} ${isMobileMenuOpen ? styles.menuBarOpen : ""}`}></span>
          </button>
        </div>
      </header>

      <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.overlayActive : ""}`}>
        <nav className={styles.mobileNav}>
          <button onClick={() => scrollToSection("hero")} className={styles.mobileNavLink}>
            <span className={styles.mobileNavText}>Головна</span>
          </button>
          <button onClick={() => scrollToSection("faq")} className={styles.mobileNavLink}>
            <span className={styles.mobileNavText}>Часті Запитання</span>
          </button>
          <button onClick={() => scrollToSection("donate")} className={styles.mobileNavLink}>
            <span className={styles.mobileNavText}>Підтримати</span>
          </button>
          <button onClick={() => scrollToSection("gallery")} className={styles.mobileNavLink}>
            <span className={styles.mobileNavText}>Галерея</span>
          </button>
          <a
            href="https://secure.wayforpay.com/donate/d1bb03d3ccf14?amount=1&currency=EUR&frequency=monthly"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileDonateButton}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className={styles.mobileDonateIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Задонатити зараз
          </a>
        </nav>
      </div>
    </>
  )
}
