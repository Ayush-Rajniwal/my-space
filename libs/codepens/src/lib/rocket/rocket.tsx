import styles from './rocket.module.scss';

/* eslint-disable-next-line */
export interface RocketProps {}

export function Rocket(props: RocketProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['stage']}>
        <div className={styles['body']}>
          <div className={styles['top']}>
            <div className={styles['light']}></div>
            <div className={styles['antenna']}></div>
            <div className={styles['base2']}></div>
            <div className={styles['base1']}></div>
          </div>
          <div className={styles['glass']}>
            <div className={styles['reflection']}></div>
          </div>
          <div className={`${styles['boster']} ${styles['bosterL']}`}></div>
          <div className={`${styles['boster']} ${styles['bosterR']}`}></div>
          <div className={styles['ring']}>
            <div className={styles['s1']}></div>
            <div className={styles['s1']}></div>
            <div className={styles['s1']}></div>
            <div className={styles['s1']}></div>
            <div className={styles['s1']}></div>
            <div className={styles['s1']}></div>
            <div className={styles['s1']}></div>
          </div>
          <div className={styles['fire']}>
            <div className={`${styles['flame']} ${styles['h1']}`}></div>
            <div className={`${styles['flame']} ${styles['h2']}`}></div>
            <div className={`${styles['flame']} ${styles['h3']}`}></div>
            <div className={`${styles['flame']} ${styles['h4']}`}></div>
            <div className={`${styles['flame']} ${styles['h5']}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rocket;
