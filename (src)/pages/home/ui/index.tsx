import { FC } from 'react';
import styles from './home.module.scss';
import { DatePicker } from 'antd';

export const HomePage: FC = () => {
  return (
    <section className={styles.wrapper}>
      Home page
      <DatePicker />
    </section>
  );
};
