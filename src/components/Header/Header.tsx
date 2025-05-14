// Header.tsx
import styles from './Header.module.css';
import { Navbar } from '../Navbar/Navbar';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

export function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.headerImageWrapper}>
        <Image
          src="/images/headerfundo.png" 
          alt="Imagem de fundo da header"
          layout="fill" 
          objectFit="cover" 
          priority // A imagem será carregada com prioridade para melhorar o LCP
        />
      </div>
      <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.2}}

      className={styles.tituloWrapper}>
        <h1 className={styles.titulo}>Sua saúde mental</h1>
        <p className={styles.subtitulo}>importa</p>
      </motion.div>
    </header>
  );
}
