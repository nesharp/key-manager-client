import { Switch } from 'antd';
import styles from './swith-with-icons.module.scss';
import { Moon, Sun } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
interface Props {
  leftSideIcon: React.ReactNode;
  rightSideIcon: React.ReactNode;
  classNames?: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}
export const SwithWithIcons = ({
  checked,
  leftSideIcon,
  rightSideIcon,
  setChecked,
  classNames,
}: Props) => {
  return (
    <div className={cn(classNames, styles.swith)}>
      <Switch
        className={styles.switch}
        checkedChildren={<Sun className={styles.rightSideIcon} />}
        unCheckedChildren={<Moon className={styles.leftSideIcon} />}
        checked={checked}
        onChange={setChecked}
      />
    </div>
  );
};
