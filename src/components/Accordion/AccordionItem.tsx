'use client'

import { useState } from 'react'
import styles from './accordion.module.css'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  color?: 'blue' | 'green' | 'yellow' | 'orange' | 'red'
}

export function AccordionItem({ title, children, color }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const itemClassName = `${styles.item} ${color ? styles[color] : ''}`.trim();

  return (
    <div className={itemClassName}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.title}>{title}</span>
        <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  )
}
