"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Image
          src="/assets/Ajudarvoceminilogo.svg"
          alt="Logo"
          width={58}
          height={40}
          className={styles.logoImage}
        />
        <Image
          src="/assets/AjudarvoceAZUL.svg"
          alt="Logo"
          width={58}
          height={40}
          className={styles.logoBlue}
        />
      </div>

      <ul className={`${styles.menu} ${mobileMenuOpen ? styles.open : ""}`}>
        {["Quem somos", "Serviços", "Como você está se sentindo?", "Locais", "Contato"].map((item, index) => (
          <li key={index}>
            <button className={styles.menuButton}>{item}</button>
          </li>
        ))}
      </ul>

      <div className={styles.rightSpace}>
        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <div className={`${styles.animatedIcon} ${mobileMenuOpen ? styles.open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </nav>
  );
}
