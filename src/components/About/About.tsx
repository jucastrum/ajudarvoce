// src/components/About/About.tsx

import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './About.module.css';

const About: NextPage = () => {
  return (
    <section id="quemsomos" className={`${styles.container} scroll-mt-[100rem]`}>
      {/* Elementos visuais de fundo */}
      <div className={styles.visuals}>
        <Image
          src="/assets/Linhasabstratas2.png"
          alt="Linhas decorativas"
          width={227}
          height={591}
          className={styles.abstractLines}
        />
      </div>

      {/* Conteúdo centralizado */}
      <div className={styles.contentWrapper}>
        
        {/* Título com logo no meio */}
        <div className={styles.titleWrapper}>
          <span className={styles.titleText}>O que é o</span>
          <div className={styles.logoAndQuestion}>
            <Image
            src="/assets/Ajudarvocehorizontal.svg"
            alt="Logo Ajudar Você"
            width={369}
            height={76}
            className={styles.logoHorizontal}
              />
            <span className={styles.titleText}>?</span>
          </div>
        </div>


        {/* Descrição */}
        <p className={styles.description}>
          O AjudarVocê conecta pessoas de Manaus a apoio psicológico acessível.
          Nossa missão é ajudar quem busca acolhimento — seja de baixa renda ou não —
          a encontrar orientação antes que o sofrimento se torne maior.
        </p>

        {/* Imagens principais e secundárias */}
        <div className={styles.visualBlock}>
          <Image
            src="/images/Menina1.png"
            alt="Imagem principal"
            width={335}
            height={493}
            className={styles.mainImage}
          />

          <div className={styles.inlineImagesWrapper}>
            <Image
              src="/images/Homemcasaco.png"
              alt="Imagem 1"
              width={310}
              height={208}
              className={styles.inlineImage}
            />
            <Image
              src="/images/Homem2.png"
              alt="Imagem 2"
              width={310}
              height={208}
              className={styles.inlineImage}
            />
            <Image
              src="/images/Mulher2.png"
              alt="Imagem 3"
              width={310}
              height={208}
              className={styles.inlineImage}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
