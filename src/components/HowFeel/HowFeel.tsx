import styles from './HowFeel.module.css';
import Image from 'next/image';

const HowFeel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.leftContent}>
          <h2 className={styles.title}>Como você está se sentindo?</h2>
          <p className={styles.description}>
            O sistema de cores abaixo pode te ajudar a entender qual tipo de ajuda você precisa agora. 
            Tente identificar qual se parece mais com o que você tem sentido e conheça o serviço indicado.
          </p>
          <p className={styles.reference}>
            Esse sistema de categorias foi desenvolvido com base no Protocolo de Manchester e principalmente 
            o Protocolo de Classificação de Risco em Saúde Mental, criado pela Secretaria de Estado da Saúde do Espírito Santo em 2018.
          </p>
        </div>

        <div className={styles.middleContent}>
          {/* Espaço*/}
        </div>

        <div className={styles.rightContent}>
          <Image
            src="/assets/Linhasabstratas3.svg"
            alt="Linhas Abstratas"
            className={styles.backgroundLines}
            width={600}
            height={550}
          />
          <Image
            src="/assets/cabecaazul.svg"
            alt="Cabeça Azul"
            className={styles.headImage}
            width={450}
            height={565}
          />
        </div>

      </div>
    </div>
  );
};

export default HowFeel;
