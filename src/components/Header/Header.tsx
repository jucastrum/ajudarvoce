// Header.tsx
import styles from './Header.module.css';
import { Navbar } from '../Navbar/Navbar';
import Image from 'next/image';

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
      <div className={styles.tituloWrapper}>
        <h1 className={styles.titulo}>Sua saúde mental</h1>
        <p className={styles.subtitulo}>importa</p>
      </div>
    </header>
  );
}
