// HeroBanner.tsx

import type { NextPage } from 'next';
import Image from "next/image";
import styles from './HeroBanner.module.css';

const HeroBanner: NextPage = () => {
  return (
    <div className={styles.heroWrapper}>
      {/* Mãos e elementos visuais */}
      <div className={styles.visuals}>
        <Image className={styles.maoEsquerda} src="/assets/mao esquerda.png" alt="Mão esquerda" width={450} height={386} />
        <Image className={styles.linhasAbstratas} src="/assets/Linhasabstratas1.png" alt="Linhas abstratas" width={226} height={487} />
        <Image className={styles.maoDireita} src="/assets/mao direita.png" alt="Mão direita" width={467} height={478} />
      </div>

      {/* Banner central */}
      <div className={styles.banner}>
        <h2 className={styles.titulo}>Você não está sozinho(a)</h2>
        <p className={styles.texto}>
          Sabemos o quanto pode ser difícil, solitário e desafiador pedir e encontrar ajuda.
          Por isso, aqui você encontrará locais de apoio e informações especiais para cuidar da sua saúde mental.
        </p>
        <p className={styles.texto}>
          Pode parecer difícil, mas esse é um passo importante no caminho para o seu bem estar.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
