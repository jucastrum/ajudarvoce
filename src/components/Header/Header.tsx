// Header.tsx
import styles from './Header.module.css';
import { Navbar } from '../Navbar/Navbar';

export function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.tituloWrapper}>
        <h1 className={styles.titulo}>Sua saúde mental</h1>
        <p className={styles.subtitulo}>importa</p>
      </div>
    </header>
  );
}
