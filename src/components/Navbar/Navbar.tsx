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

  // Função para rolar até a seção desejada
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
        {/* Mapeando itens do menu */}
        {[
          { name: "Quem somos", id: "quemsomos" },
          { name: "Serviços", id: "servicos" },
          { name: "Como você está se sentindo?", id: "comovocestasesentindo" },
          { name: "Locais", id: "locais" }
        ].map((item, index) => (
          <li key={index}>
            <button
              className={styles.menuButton}
              onClick={() => scrollToSection(item.id)} // Chama a função para rolar até a seção
            >
              {item.name}
            </button>
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
