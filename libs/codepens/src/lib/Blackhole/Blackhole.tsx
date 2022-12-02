import styles from './Blackhole.module.scss';

/* eslint-disable-next-line */
export interface BlackholeProps { }

export function Blackhole(props: BlackholeProps) {
  return (
    <div className={styles["container"]}>
      <div className={styles["blackhole"]}>
        <div className={styles["megna"]}>
          <div className={styles["black"]}></div>
        </div>
      </div>
    </div>
  );
}

export default Blackhole;
