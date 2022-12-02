import styles from './codepens.module.scss';

/* eslint-disable-next-line */
export interface CodepensProps {}

export function Codepens(props: CodepensProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Codepens!</h1>
    </div>
  );
}

export default Codepens;
