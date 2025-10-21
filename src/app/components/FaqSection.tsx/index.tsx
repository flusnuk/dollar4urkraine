"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import styles from "./faq-section.module.css"
import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"
import { faqs } from "./value"

export function FaqSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.content} ${isVisible ? styles.visible : styles.hidden}`}>
          <div className={styles.header}>
            <h2 className={styles.title}>Часті запитання</h2>
            <p className={styles.description}>Відповіді на найпоширеніші питання про донати</p>
          </div>

          <Accordion type="single" collapsible className={styles.accordion}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className={styles.accordionItem}>
                <AccordionTrigger className={styles.question}>{faq.question}</AccordionTrigger>
                <AccordionContent className={styles.answer}>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
