'use client'

import { ReactNode } from 'react'
import styles from './accordion.module.css'

interface AccordionProps {
  children: ReactNode
}

export default function Accordion({ children }: AccordionProps) {
  return <div className={styles.accordion}>{children}</div>
}
