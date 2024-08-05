import Link from 'next/link';
import styles from './buttonWithIcon.module.scss';
interface Props {
  icon: JSX.Element;
  onClick?: () => void;
  href?: string;
}
export const ButtonWithIcon = ({ onClick, icon, href }: Props) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {href ? <Link href={href}>{icon}</Link> : icon}
    </button>
  );
};
