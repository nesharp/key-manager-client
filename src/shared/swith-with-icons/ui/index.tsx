'use client';
import styles from './swith-with-icons.module.scss';
import {
  Dispatch,
  ForwardRefExoticComponent,
  RefAttributes,
  SetStateAction,
} from 'react';
import cn from 'classnames';
import { Switch } from 'antd';
import { LucideProps } from 'lucide-react';
interface Props {
  LeftSideIcon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  RightSideIcon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  classNames?: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}
export const SwithWithIcons = ({
  checked,
  LeftSideIcon,
  RightSideIcon,
  setChecked,
  classNames,
}: Props) => {
  return (
    <div className={cn(styles.wrapper, classNames)}>
      <Switch
        className={styles.switch}
        checkedChildren={<LeftSideIcon className={styles.rightSideIcon} />}
        unCheckedChildren={<RightSideIcon className={styles.leftSideIcon} />}
        checked={checked}
        onChange={setChecked}
      />
    </div>
  );
};
