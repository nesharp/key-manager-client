import { Plus } from 'lucide-react';
import styles from './sidebar.module.scss';
import { ButtonWithIcon } from '@/(src)/shared/button-with-icon/ui';
export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ButtonWithIcon icon={<Plus />} href="/applications/create" />
    </aside>
  );
};
